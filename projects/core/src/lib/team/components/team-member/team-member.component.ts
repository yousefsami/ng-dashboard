import { Component, OnInit } from '@angular/core';

import {
  PageContainerAction,
  IInteractiveNote,
  IUser,
  Team,
  IRole,
} from '../../../ng5-basic/definitions';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { TeamsService } from '../../../ng5-basic/services/teams.service';
import { ModalService } from '../../../ng5-basic/services/modal.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { RouterService } from '../../../ng5-basic/services/router.service';
import { IInvitationData } from '../../team.definitions';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../ng5-basic/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RoleService } from '../../role.service';
import { BehaviorSubject, combineLatest } from 'rxjs';

const TeamMemberNotVisible: IInteractiveNote = {
  description: 'no_teams_available',
  animation: 'warning',
};

@Component({
  selector: 'ng-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})
export class TeamMemberComponent extends NgdBaseComponent implements OnInit {
  public roles: Array<{ id: any; name: any }> = [];
  public teams = [];
  public invitations: IInvitationData[] = [];
  public note: IInteractiveNote;
  public isSuperUser = false;
  public permissions: BehaviorSubject<
    Array<{ id: any; name: any }>
  > = new BehaviorSubject([]);

  public actions: Array<PageContainerAction> = [
    {
      type: 'ICON',
      onClick: (params) => {
        this.removeMemberFromTeam();
      },
      className: 'team-delete-icon',
      icon: 'icon-delete',
      title: this.config.translate('remove_member_from_team'),
    },
  ];

  public form = new FormGroup({
    firstname: new FormControl(null),
    lastname: new FormControl(null),
    teamMemberId: new FormControl(null),
    isSuperUser: new FormControl(false),
    email: new FormControl(null),
    id: new FormControl(null),
    roles: new FormControl([]),
  });

  public teamActions: Array<PageContainerAction> = [];

  constructor(
    public teamsService: TeamsService,
    public requests: RequestsService,
    public config: ConfigurationService,
    public ngdRouter: RouterService,
    public user: UserService,
    public router: Router,
    public route: ActivatedRoute,
    public confirm: ModalService,
    public roleService: RoleService
  ) {
    super();
  }

  public MemberName(user: IUser) {
    if (user.firstname && user.lastname) {
      return `${user.firstname} ${user.lastname}`;
    }
    if (user.firstname) {
      return user.firstname;
    }
    if (user.lastname) {
      return user.lastname;
    }
    if (user.email) {
      return user.email;
    }
    if (user.phone) {
      return user.phone;
    }
    return 'anonymouse_member';
  }

  editTeam(id: number) {
    this.router.navigateByUrl('/team/' + id);
  }

  ngOnInit() {
    this.ComponentSubscription(
      this.teamsService.TeamsStore.subscribe((teams: Team[]) => {
        let teamMember = null;
        const { team_id, member_id } = this.route.snapshot.params;
        const team = teams.find((t) => t.id === +team_id);

        if (team) {
          teamMember = team.members.find((member) => member.id === +member_id);
        }

        if (!teamMember) {
          this.note = TeamMemberNotVisible;
        } else {
          this.form.patchValue({
            ...teamMember,
            roles: teamMember.roles.map((t) => t.id),
          });
          this.note = null;
        }
      })
    );

    this.ComponentSubscription(
      combineLatest(this.roleService.RolesStore, this.permissions).subscribe(
        ([roles, permissions]) => {
          this.roles = roles.map((t) => {
            return {
              id: t.id,
              name: t.title,
            };
          });
        }
      )
    );

    this.SetInteractiveButtons([
      {
        icon: 'icon-add',
        key: 'add',
        keyboardShortcut: 'n',
        onPress: this.createNewTeam.bind(this),
      },
    ]);

    this.StartRequest<IInvitationData>(() =>
      this.requests.GetInvitations()
    ).then((result) => {
      if (result && result.items) {
        this.invitations = result.items;
      }
    });

    this.GetRoles();
    this.GetPermissions();
  }

  public removeMemberFromTeam() {
    const teamMemberId = this.Form.teamMemberId;
    this.confirm
      .open({
        content: this.config.translate('delete_team_member_confirmation'),
      })
      .subscribe(async ({ type }) => {
        if (type !== 'CONFIRMED') {
          return;
        }
        const res = await this.StartRequest<any>(() =>
          this.requests.DeleteTeamMember(teamMemberId)
        );

        if (res.item) {
          this.teamsService.RemoveMemberFromTeam(res.item.team, res.item.id);
          this.router.navigateByUrl('/teams');
        }
      });
  }

  public inviteMemberToTeam(teamId: number) {
    this.router.navigateByUrl('/invite-new-user?teamId=' + teamId);
  }

  public createNewTeam() {
    this.router.navigateByUrl('/new-team');
  }

  public GetRoles() {
    this.StartRequest<IRole>(() => this.requests.GetRoles()).then((result) => {
      if (result && result.items) {
        this.roleService.SetRoles(result.items);
      }
      this.formTouchedElements = {};
      this.res = null;
    });
  }

  public async onSubmit() {
    const data = this.form.value;

    if (data.isSuperUser) {
      data.permissions = ['TEAM:*'];
    } else {
      data.permissions = (data.permissions || []).filter((p) => p !== 'TEAM:*');
    }

    const result = await this.StartValidatedRequest<IRole>(() =>
      this.requests.PostTeamMember(data)
    );

    if (result.item) {
      this.ngdRouter.navigateTo(`/roles?focus=${result.item.id}`);
    }
  }

  private async GetPermissions() {
    const res = await this.StartRequest<string>(() =>
      this.requests.GetPermissions()
    );

    if (res.items) {
      this.permissions.next(
        res.items.map((t) => {
          return {
            id: t,
            name: t,
          };
        })
      );
    }
  }
}
