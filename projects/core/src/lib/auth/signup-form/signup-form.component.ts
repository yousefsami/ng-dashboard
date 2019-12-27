import { Component, OnInit } from '@angular/core';
import { IResponse } from 'response-type';
import { IUserForm, LoginResponse } from '../shared';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GetNetworkError, error } from '../shared';
import { AuthPublicService, AuthEvent } from '../auth-public.service';
import { ConfigurationService } from '../../ng5-basic/services/configuration.service';
import { UserService } from '../../ng5-basic/services/user.service';

@Component({
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  public isRequesting = false;
  public response: IResponse<any> = null;
  public signupDialog = `It's very easy to create an account. Please write your Email and A safe password`;
  public form: IUserForm = {
    email: '',
    password: ''
  };
  public passwordVisibility = false;
  public error = error;
  public signupUrl = null;
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthPublicService,
    private config: ConfigurationService,
    private user: UserService
  ) {}

  ngOnInit() {
    const { Config } = this.config;
    if (Config.signupDialog) {
      this.signupDialog = Config.signupDialog;
    }
  }

  async signup(e) {
    this.signupUrl = this.config.API('/api/user/signup');
    e.preventDefault();
    this.isRequesting = true;
    this.signupHttp(this.form);
  }

  togglePassword() {
    this.passwordVisibility = this.passwordVisibility ? false : true;
  }

  public onSignupSuccess(response = null) {
    this.user.SetToken(response.data.items[0].token);
    this.user.SetUser(response.data.items[0].user);
  }

  private signupHttp(data: IUserForm) {
    const conf = this.config.Config;
    window.scroll(0, 0);
    this.http.post(this.signupUrl, data).subscribe(
      (response: IResponse<LoginResponse>) => {
        this.response = response;
        this.isRequesting = false;

        if (this.response.data && this.response.data.items[0]) {
          this.onSignupSuccess(response);

          if (conf.onSignupSuccess) {
            conf.onSignupSuccess(response);
          }
          this.auth.events.emit({
            type: AuthEvent.SIGNUP_SUCCESS,
            payload: response.data.items[0]
          });
          if (conf.afterSignupRedirect) {
            this.router.navigateByUrl(conf.afterSignupRedirect);
          }
        }
      },
      response => {
        this.isRequesting = false;
        if (response.name === 'HttpErrorResponse') {
          this.response = GetNetworkError();
          return false;
        }
        this.response = response;
      }
    );
  }
}
