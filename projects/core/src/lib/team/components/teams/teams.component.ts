import { Component, OnInit } from '@angular/core';

import {
  PageContainerAction,
  IInteractiveNote,
} from '../../../ng5-basic/definitions';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { TeamsService } from '../../../ng5-basic/services/teams.service';
import { ConfirmService } from '../../../ng5-basic/services/confirm.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { RouterService } from '../../../ng5-basic/services/router.service';

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
  public note: IInteractiveNote;
  public teamActions: Array<PageContainerAction> = [
    {
      type: 'ICON',
      icon: 'icon-add',
      onClick: (params) => {
        this.inviteMemberToTeam(params.team.id);
      },
      title: this.config.translate('invite_people_to_this_team'),
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
