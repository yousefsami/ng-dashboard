import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { NgBasicConfig, Team } from '../../definitions';
import { TranslateService } from '../../services/translate.service';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'ng-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.scss'],
  providers: [TranslateService]
})
export class TeamSelectorComponent implements OnInit {
  public teams: Array<Team> = [];
  constructor(
    @Inject('config') public gconfig: NgBasicConfig,
    public sidebar: NgxSidebarService,
    private config: ConfigurationService
  ) {}

  ngOnInit() {
    this.config.Teams.subscribe(teams => (this.teams = teams));
  }

  public formatLabel(team: Team) {
    return team.name;
  }

  public get label() {
    if (!this.teams || this.teams.length === 0) {
      return 'Teams';
    }
    const selected = this.teams.find(team => team.$selected);

    if (!selected) {
      return this.formatLabel(this.teams[0]);
    }
    return this.formatLabel(selected);
  }

  public get TeamsConfig() {
    return this.config.TeamsConfig.value;
  }

  public selectTeam(team: Team) {
    this.config.SelectedTeam.next(team);
  }
}
