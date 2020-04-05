import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterService } from '../../../ng5-basic/services/router.service';
import { CopyToClipboard } from '../../../ng5-basic/services/helpers';
import { InteractiveButtons } from '../../../ng5-basic/services/common';
import { TeamsService } from '../../../ng5-basic/services/teams.service';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { ConfirmService } from '../../../ng5-basic/services/confirm.service';
import { UserFlowService } from '../../../ng5-basic/services/userflow.service';
import { RequestsService } from '../../../ng5-basic/services/requests.service';

@Component({
  selector: 'ng-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss'],
})
export class InvitationsComponent extends NgdBaseComponent implements OnInit {
  public items = [];
  public working = true;
  public teams = [];
  public form = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(null),
    description: new FormControl(''),
  });

  constructor(
    private requests: RequestsService,
    public config: ConfigurationService,
    private teamsService: TeamsService,
    public ngdRouter: RouterService,
    private route: ActivatedRoute,
    public confirm: ConfirmService,
    private userflow: UserFlowService
  ) {
    super();
  }

  async ngOnInit() {
    this.SetInteractiveButtons([
      InteractiveButtons.Refresh(this.GetItems.bind(this)),

      {
        icon: 'icon-add',
        key: 'add',
        keyboardShortcut: 'n',
        onPress: this.createNewStatement.bind(this),
      },
    ]);
    this.ComponentSubscription(
      this.teamsService.TeamsStore.subscribe((teams) => (this.teams = teams))
    );
    this.GetItems();
  }

  public createNewStatement(teamId: number) {
    this.ngdRouter.navigateTo(
      '/invite-new-user' + (teamId ? '/' + teamId : '')
    );
  }

  public BuildInviteLink(item) {
    return (
      `${window.location.protocol}//${window.location.host}/join/` + item.key
    );
  }

  public CopyLink(item) {
    const link = this.BuildInviteLink(item);

    CopyToClipboard(link);
    this.config.ShowToast({
      message: this.config.translate('invitation_link_copied'),
    });
  }

  public async GetItems() {
    const team = +this.route.snapshot.params.teamId;

    this.StartRequest(() => this.requests.GetInvitations()).then((result) => {
      if (result && result.items) {
        this.items = result.items.filter((t: any) => t.team === team);
      }
    });

    this.userflow.syncUserCoreAndTeams();
  }
}
