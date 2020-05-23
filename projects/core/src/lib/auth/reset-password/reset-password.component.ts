import { Component, OnInit } from '@angular/core';
import { GetNetworkError } from '../shared';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'response-type';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from '../../ng5-basic/services/configuration.service';
import { AuthPublicService, AuthEvent } from '../auth-public.service';
import { UserService } from '../../ng5-basic/services/user.service';
import { NgdBaseComponent } from '../../ng5-basic/services/ngd-base.component';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterService } from '../../ng5-basic/services/router.service';

@Component({
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent extends NgdBaseComponent implements OnInit {
  public key = '';
  public url = null;
  public response: IResponse<any> = null;

  public form = new FormGroup({
    password: new FormControl(null),
    passwordRepeat: new FormControl(null),
    resetkey: new FormControl(null),
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    public ngdRouter: RouterService,
    private route: ActivatedRoute,
    public config: ConfigurationService,
    private auth: AuthPublicService,
    private user: UserService
  ) {
    super();
  }

  ngOnInit() {
    this.url = this.config.API('/api/reset-password');

    this.route.params.subscribe((data: { key: string }) => {
      this.form.patchValue({
        resetkey: data.key,
      });
    });
  }

  public SubmitForm() {
    const conf = this.config.Config;
    this.http.post(this.url, this.form.value).subscribe(
      (response) => {
        this.response = response;
        if (this.response.data) {
          this.auth.events.emit({
            payload: this.response.data,
            type: AuthEvent.LOGIN_SUCCESS,
          });
          if (conf.afterLoginRedirect) {
            this.ngdRouter.navigateTo(conf.afterLoginRedirect);
          }
          this.user.SetToken(this.response.data.token);
          this.user.SetUser(this.response.data.user);
          this.config.ShowToast({
            message: this.config.translationsDictionary.value
              .password_successfully_changed,
            type: 'SUCCESS',
          });
        }
        this.working = false;
      },
      (response) => {
        this.working = false;
        if (response.name === 'HttpErrorResponse') {
          this.response = GetNetworkError();
          return false;
        }
        this.response = response;
      }
    );
  }
}
