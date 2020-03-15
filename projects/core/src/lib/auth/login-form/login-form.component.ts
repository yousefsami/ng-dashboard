import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthPublicService } from '../auth-public.service';
import { ConfigurationService } from '../../ng5-basic/services/configuration.service';
import { UserService } from '../../ng5-basic/services/user.service';
import { AuthCommonComponent } from '../AuthCommonComponent';

@Component({
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends AuthCommonComponent implements OnInit {
  constructor(
    public router: Router,
    public http: HttpClient,
    public auth: AuthPublicService,
    public user: UserService,
    public config: ConfigurationService
  ) {
    super(http, router, auth, config, user);
  }

  ngOnInit() {
    this.LogoutUser();
  }
}
