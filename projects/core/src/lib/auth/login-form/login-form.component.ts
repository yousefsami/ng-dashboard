import { Component, OnInit } from '@angular/core';
import { IUserForm, GetNetworkError, error } from '../shared';
import { Router } from '@angular/router';
import { IResponse } from 'response-type';
import { HttpClient } from '@angular/common/http';
import { FacebookService, IFBAuthInformation } from '../facebook.service';
import { AuthPublicService, AuthEvent } from '../auth-public.service';
import { ConfigurationService } from '../../ng5-basic/services/configuration.service';
import { ComponentCommon } from '../../ng5-basic/services/common';
import { ToastaService } from 'ngx-toasta';
import { UserService } from '../../ng5-basic/services/user.service';
declare var FB: any;

@Component({
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends ComponentCommon implements OnInit {
  public alternativeLogins = [];
  public isRequesting = false;
  public url = ``;
  public facebookUrl = `/api/facebook/auth`;
  public response: IResponse<any> = null;
  public error = error;
  public form: IUserForm = {
    email: '',
    password: ''
  };
  public message = '';
  public passwordVisibility = false;
  public isLoggedInByFacebook = false;
  public loginDialog = 'Please enter your email and password.';

  constructor(
    private router: Router,
    private http: HttpClient,
    private facebook: FacebookService,
    private config: ConfigurationService,
    private auth: AuthPublicService,
    private user: UserService,
    public toastaService: ToastaService
  ) {
    super();
  }

  ngOnInit() {
    this.user.SetToken(null);
    this.user.SetUser(null);
    this.facebookUrl = this.config.API(`/api/facebook/auth`);
    this.auth.events.emit({
      type: AuthEvent.REVOKE
    });
    const { Config } = this.config;
    this.url = this.config.API('/api/user/signin');

    if (Config.loginDialog) {
      this.loginDialog = Config.loginDialog;
    }
    if (Config.provideFacebook) {
      this.alternativeLogins.push({
        type: 'facebook'
      });
    }
    this.facebook.IsLoggedInByFacebook().then(result => {
      if (result) {
        this.isLoggedInByFacebook = true;
      } else {
        this.isLoggedInByFacebook = false;
      }
    });
  }

  public async login(e) {
    this.auth.events.emit({
      type: AuthEvent.TRY_LOGIN
    });
    e.preventDefault();
    this.isRequesting = true;
    this.signinHttp(this.form);
  }

  public loginFacebook() {
    if (!FB) {
      return;
    }
    FB.login((result: any) => {}, { scope: 'public_profile,email' });
  }
  public togglePassword() {
    this.passwordVisibility = this.passwordVisibility ? false : true;
  }

  public onSigninSuccess(response = null) {
    this.router.navigateByUrl('/index');
  }

  public continueWithFacebook() {
    this.signinFacebook(this.facebook.GetUserAuthenticationInformation());
  }
  private signinFacebook(data: IFBAuthInformation) {
    const conf = this.config.Config;
    this.http.post(this.facebookUrl, data).subscribe(
      response => {
        this.response = response;
        if (this.response.data && this.response.data.items[0]) {
          this.auth.events.emit({
            payload: this.response.data.items[0],
            type: AuthEvent.LOGIN_SUCCESS
          });
          if (conf.onLoginSuccess) {
            conf.onLoginSuccess(response);
          }
          if (conf.afterLoginRedirect) {
            this.router.navigateByUrl(conf.afterLoginRedirect);
          }
        }
        this.isRequesting = false;
      },
      response => {
        this.auth.events.emit({
          type: AuthEvent.LOGIN_FAILED
        });
        this.isRequesting = false;
        if (response.name === 'HttpErrorResponse') {
          this.response = GetNetworkError();
          return false;
        }
        this.response = response;
      }
    );
  }
  private signinHttp(data: IUserForm) {
    this.http.post(this.url, data).subscribe(
      response => {
        this.isRequesting = false;

        this.response = response;

        if (this.response.data && this.response.data.items[0]) {
          this.auth.events.emit({
            payload: this.response.data.items[0],
            type: AuthEvent.LOGIN_SUCCESS
          });
          this.onSigninSuccess(response);
          this.user.SetToken(this.response.data.items[0].token);
          this.user.SetUser(this.response.data.items[0].user);
        } else {
          this.InternalError({
            message: this.response.error.message,
            name: ''
          });
        }
        this.isRequesting = false;
      },
      response => {
        this.isRequesting = false;
        this.auth.events.emit({
          type: AuthEvent.LOGIN_FAILED,
          payload: response
        });
        if (response.name === 'HttpErrorResponse') {
          this.response = GetNetworkError();
          return false;
        }
        this.response = response;
      }
    );
  }
}
