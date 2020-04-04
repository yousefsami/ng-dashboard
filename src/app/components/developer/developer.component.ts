import { Component, OnInit } from '@angular/core';
import { CookiesService } from 'ngx-universal-cookies';
import { TeamsService, UserService } from 'projects/core/src/public_api';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss'],
})
export class DeveloperComponent implements OnInit {
  public teamsData = null;
  public userData = null;
  public cookieData = null;

  constructor(
    public teams: TeamsService,
    public user: UserService,
    public cookie: CookiesService
  ) {}

  ngOnInit() {
    this.teams.TeamsStore.subscribe((teams) => {
      this.teamsData = teams;
    });

    this.userData = this.user.User;

    this.cookieData = this.cookie.getAll();
  }
}
