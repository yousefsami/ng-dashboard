import { Component, OnInit } from '@angular/core';
import { IResponse } from 'response-type';
import { IUserForm, LoginResponse } from '../shared';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GetNetworkError, error } from '../shared';
import { ConfigService } from '../config.service';
import { AuthPublicService, AuthEvent } from '../auth-public.service';

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
    private config: ConfigService
  ) {}
  ngOnInit() {
    const { Config } = this.config;
    if (Config.signupDialog) {
      this.signupDialog = Config.signupDialog;
    }
  }
  async signup(e) {
    this.signupUrl = this.config.Config.baseUrl + '/api/user/signup';
    e.preventDefault();
    this.isRequesting = true;
    this.signupHttp(this.form);
  }
  togglePassword() {
    this.passwordVisibility = this.passwordVisibility ? false : true;
  }

  public onSignupSuccess(response = null) {}
  private signupHttp(data: IUserForm) {
    const conf = this.config.Config;
    window.scroll(0, 0);
    this.http.post(this.signupUrl, data).subscribe(
      (response: IResponse<LoginResponse>) => {
        this.response = response;
        this.isRequesting = false;
        if (this.response.data && this.response.data.items[0]) {
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
        this.onSignupSuccess(response);
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
