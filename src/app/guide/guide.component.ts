import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'projects/core/src/public_api';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  constructor(private config: ConfigurationService) {}

  ngOnInit() {}

  public clearTeams() {
    this.config.Teams.next([]);
  }

  public addTeams() {
    this.config.Teams.next([
      {
        members: [],
        name: 'Personal team'
      },
      {
        members: [],
        name: `Ali's team`
      }
    ]);
    this.config.TeamsConfig.next({
      manageTeams: true,
      manageTeamsText: 'ManageTeams',
      onClick: () => {
        alert('You clicked this. Use angular router to go to teams page');
      }
    });

    this.config.SelectedTeam.next({
      members: [],
      name: `Ali's team`
    });
  }
}
