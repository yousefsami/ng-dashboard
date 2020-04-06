import { Component, OnInit, Input } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ng-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss'],
})
export class DeveloperComponent implements OnInit {
  public teams = null;
  public user = null;
  public token = null;

  constructor(
    private teamsService: TeamsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.teamsService.TeamsStore.subscribe((teams) => (this.teams = teams));
    this.userService.CurrentUser.subscribe((user) => (this.user = user));
    this.token = this.userService.GetToken();
  }
}
