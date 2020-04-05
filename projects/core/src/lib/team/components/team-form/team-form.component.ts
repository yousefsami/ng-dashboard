import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { UserService } from '../../../ng5-basic/services/user.service';
import { TeamsService } from '../../../ng5-basic/services/teams.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { RouterService } from '../../../ng5-basic/services/router.service';
import { IResponse } from 'response-type';

@Component({
  selector: 'ng-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
})
export class TeamFormComponent extends NgdBaseComponent implements OnInit {
  public form = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(null),
    description: new FormControl(''),
  });

  constructor(
    public requests: RequestsService,
    public user: UserService,
    public config: ConfigurationService,
    public teams: TeamsService,
    public ngdRouter: RouterService
  ) {
    super();
  }

  ngOnInit() {}

  public teamFormSubmit() {
    this.StartValidatedRequest<any>(() =>
      this.requests.PostTeam(this.form.value)
    ).then((result) => {
      if (result.item && !this.form.value.id) {
        this.config.ShowToast({
          message: this.config.translate('team_created_successfully'),
          type: 'SUCCESS',
        });
        const teams = this.teams.TeamsStore.value;
        this.teams.SetTeams([...teams, result.item]);
      }
      if (result.item) {
        this.ngdRouter.navigateTo('/teams');
      }
    });
  }
}
