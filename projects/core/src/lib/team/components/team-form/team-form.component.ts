import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { UserService } from '../../../ng5-basic/services/user.service';
import { TeamsService } from '../../../ng5-basic/services/teams.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { RouterService } from '../../../ng5-basic/services/router.service';
import { IResponseErrorItem } from 'response-type';
import { ERROR_CODES, TimeZoneArray } from '../../../ng5-basic/services/common';
import { Router, ActivatedRoute } from '@angular/router';

function teamFormValidator(form): IResponseErrorItem[] {
  const errors: IResponseErrorItem[] = [];

  if (!form.name) {
    errors.push({
      location: 'name',
      message: ERROR_CODES.REQUIRED_FIELD,
    });
  }

  return errors;
}

@Component({
  selector: 'ng-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
})
export class TeamFormComponent extends NgdBaseComponent implements OnInit {
  public TimeZoneArray = TimeZoneArray;
  public validator = teamFormValidator;
  public form = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(null),
    description: new FormControl(''),
    timezone: new FormControl('Europe/Warsaw'),
  });

  constructor(
    public requests: RequestsService,
    public user: UserService,
    public config: ConfigurationService,
    public teams: TeamsService,
    public ngdRouter: RouterService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.fetchTeam();
  }

  async fetchTeam() {
    const { id } = this.route.snapshot.params;

    if (!id || isNaN(+id)) {
      return;
    }
    const res = await this.StartSingleRequest(() => this.requests.GetTeam(id));

    if (res.item) {
      this.form.patchValue(res.item);
    }
  }

  public CancelHandler() {
    this.router.navigateByUrl('/teams');
  }

  public teamFormSubmit() {
    this.StartSingleRequest<any>(() =>
      this.requests.PostTeam(this.form.value)
    ).then((result) => {
      if (!result.item) {
        return;
      }

      // Update the user information since now user has an extra role.
      if (result.item.members) {
        this.user.SetUser(result.item.members[0]);
      }

      const teams = this.teams.TeamsStore.value;
      if (!this.form.value.id) {
        this.config.ShowToast({
          message: this.config.translate('team_created_successfully'),
          type: 'SUCCESS',
        });
        this.teams.SetTeams([...teams, result.item]);
      } else {
        this.teams.SetTeams(
          teams.map((team) => {
            if (team.id === this.Form.id) {
              return {
                ...team,
                name: result.item.name,
                description: result.item.description,
              };
            }
            return team;
          })
        );
      }

      if (result.item) {
        this.router.navigateByUrl('/teams');
      }
    });
  }
}
