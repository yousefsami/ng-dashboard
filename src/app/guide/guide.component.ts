import { Component, OnInit } from '@angular/core';
import {
  ConfigurationService,
  WorkingStates
} from 'projects/core/src/public_api';

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
        name: `Ali's team`,
        $selected: true
      }
    ]);
    this.config.TeamsConfig.next({
      manageTeams: true,
      manageTeamsText: 'ManageTeams',
      onClick: () => {
        alert('You clicked this. Use angular router to go to teams page');
      }
    });
  }

  public showLoader() {
    WorkingStates.next([
      {
        active: true
      },
      {
        active: true
      }
    ]);
  }

  public hideLoader() {
    WorkingStates.next([]);
  }

  public showMessage() {
    this.config.ShowToast({
      message: 'This is warning',
      type: 'WARNING'
    });
    this.config.ShowToast({
      message: 'This is success',
      type: 'SUCCESS'
    });
    this.config.ShowToast({
      message: 'This is info',
      type: 'INFO'
    });
    this.config.ShowToast({
      message: 'Error',
      type: 'ERROR'
    });
  }
}
