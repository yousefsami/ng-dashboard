import { Component, OnInit } from '@angular/core';

import {
  PageContainerAction,
  IInteractiveNote,
  IUser,
} from '../../../ng5-basic/definitions';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { TeamsService } from '../../../ng5-basic/services/teams.service';
import { ConfirmService } from '../../../ng5-basic/services/confirm.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { RouterService } from '../../../ng5-basic/services/router.service';
import { IInvitationData } from '../../team.definitions';

const NoTeamsAvailable: IInteractiveNote = {
  description: 'no_teams_available',
  animation: 'warning',
};

@Component({
  selector: 'ng-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent extends NgdBaseComponent implements OnInit {
  public teams = [];
  public invitations: IInvitationData[] = [];
  public note: IInteractiveNote;
  public teamActions: Array<PageContainerAction> = [
    {
      type: 'ICON',
      icon: 'icon-add',
      onClick: (params) => {
        this.inviteMemberToTeam(params.team.id);
      },
      title: this.config.translate('invite_people'),
    },
    {
      type: 'ICON',
      onClick: (params) => {
        this.deleteTeam(params.team);
      },
      icon: 'icon-delete',
      title: this.config.translate('delete_team'),
    },
  ];
  constructor(
    public teamsService: TeamsService,
    public requests: RequestsService,
    public config: ConfigurationService,
    public ngdRouter: RouterService,
    public confirm: ConfirmService
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

  ngOnInit() {
    this.ComponentSubscription(
      this.teamsService.TeamsStore.subscribe((teams) => {
        this.teams = teams;
        if (this.teams.length === 0) {
          this.note = NoTeamsAvailable;
        } else {
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
    this.ngdRouter.navigateTo('/invite-new-user');
  }

  public createNewTeam() {
    this.ngdRouter.navigateTo('/new-team');
  }
}
