import { Component, OnInit } from '@angular/core';

import {
  PageContainerAction,
  IInteractiveNote,
  IUser,
  Team,
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
  public teams = [];
  public invitations: IInvitationData[] = [];
  public note: IInteractiveNote;
  public form = new FormGroup({
    firstname: new FormControl(null),
    lastname: new FormControl(null),
  });
  public defaultActions: Array<PageContainerAction> = [
    {
      type: 'ICON',
      icon: 'icon-add',
      className: 'team-invite-icon',
      onClick: (params) => {
        this.inviteMemberToTeam(params.team.id);
      },
      title: this.config.translate('invite_people'),
    },
  ];

  public teamActions: Array<PageContainerAction> = [];

  constructor(
    public teamsService: TeamsService,
    public requests: RequestsService,
    public config: ConfigurationService,
    public ngdRouter: RouterService,
    public user: UserService,
    public router: Router,
    public route: ActivatedRoute,
    public confirm: ModalService
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
          this.form.patchValue(teamMember);
          this.note = null;
        }
      })
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
  }

  public deleteTeam(team) {
    this.confirm
      .open({
        content: this.config.translate('delete_team_confirmation'),
      })
      .subscribe(({ type }) => {
        if (type !== 'CONFIRMED') {
          return;
        }
        this.StartRequest<any>(() => this.requests.DeleteTeam(team.id)).then(
          (result) => {
            // Set the current team to another teams :)
            const ut = this.teams.filter((t) => t.id !== team.id);
            if (ut.length > 0) {
              this.teamsService.SelectTeam(ut[0].id);
            }

            if (result.item) {
              this.config.ShowToast({
                message: this.config.translate('team_has_been_deleted'),
                type: 'WARNING',
              });
              const teamId = result.item.deletedTeams[0].id;
              this.teams = this.teams.map(($team) => {
                if ($team.id === teamId) {
                  return {
                    ...$team,
                    $isBeingDeleted: true,
                  };
                }
                return {
                  ...$team,
                };
              });

              setTimeout(() => {
                this.teamsService.DeleteTeam(teamId);
              }, 510);
            }
          }
        );
      });
  }

  public inviteMemberToTeam(teamId: number) {
    this.router.navigateByUrl('/invite-new-user?teamId=' + teamId);
  }

  public createNewTeam() {
    this.router.navigateByUrl('/new-team');
  }
}
