import { Component, OnInit } from '@angular/core';
import { error, GetNetworkError } from '../shared';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'response-type';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IResetForm } from '../../ng5-basic/definitions';
import {
  ConfigurationService,
  ShowToast
} from '../../ng5-basic/services/configuration.service';
import { AuthPublicService, AuthEvent } from '../auth-public.service';
import { UserService } from '../../ng5-basic/services/user.service';

@Component({
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public key = '';
  public url = null;
  public error = error;
  public response: IResponse<any> = null;
  public isRequesting = false;
  public form: IResetForm = {
    password1: null,
    password2: null,
    key: null
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private config: ConfigurationService,
    private auth: AuthPublicService,
    private user: UserService
  ) {}

  ngOnInit() {
    this.url = this.config.API('/api/reset-password');

    this.route.params.subscribe((data: { key: string }) => {
      this.key = this.form.key = data.key;
    });
  }
  public SubmitForm() {
    this.execute({
      resetkey: this.form.key,
      password: this.form.password1
    });
  }
  private execute(data) {
    const conf = this.config.Config;
    this.http.post(this.url, data).subscribe(
      response => {
        this.response = response;
        if (this.response.data && this.response.data.items[0]) {
          this.auth.events.emit({
            payload: this.response.data.items[0],
            type: AuthEvent.LOGIN_SUCCESS
          });
          if (conf.afterLoginRedirect) {
            this.router.navigateByUrl(conf.afterLoginRedirect);
          }
          this.user.SetToken(this.response.data.items[0].token);
          this.user.SetUser(this.response.data.items[0].user);
          ShowToast({
            message: this.config.translationsDictionary.value
              .password_successfully_changed,
            type: 'SUCCESS'
          });
        }
        this.isRequesting = false;
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
