import { Component, OnInit } from '@angular/core';
import { IResponse } from 'response-type';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthPublicService } from '../auth-public.service';
import { ConfigurationService } from '../../ng5-basic/services/configuration.service';
import { UserService } from '../../ng5-basic/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthCommonComponent } from '../AuthCommonComponent';
import { RouterService } from '../../ng5-basic/services/router.service';

@Component({
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent extends AuthCommonComponent implements OnInit {
  constructor(
    public http: HttpClient,
    public router: Router,
    public auth: AuthPublicService,
    public ngdRouter: RouterService,
    public config: ConfigurationService,
    public user: UserService,
    public route: ActivatedRoute
  ) {
    super(http, router, ngdRouter, auth, config, user);
  }

  ngOnInit() {
    const { email } = this.route.snapshot.queryParams;
    if (email) {
      this.userForm.patchValue({ email });
    }
  }
}
