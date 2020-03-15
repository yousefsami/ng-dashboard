import { Component } from '@angular/core';
import { IResponse } from 'response-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthPublicService } from '../auth-public.service';
import { ConfigurationService } from '../../ng5-basic/services/configuration.service';
import { UserService } from '../../ng5-basic/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthCommonComponent } from '../AuthCommonComponent';

@Component({
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent extends AuthCommonComponent {
  constructor(
    public http: HttpClient,
    public router: Router,
    public auth: AuthPublicService,
    public config: ConfigurationService,
    public user: UserService
  ) {
    super(http, router, auth, config, user);
  }
}
