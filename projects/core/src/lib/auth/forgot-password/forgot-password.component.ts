import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'response-type';
import { GetNetworkError } from '../shared';
import { ConfigurationService } from '../../ng5-basic/services/configuration.service';
import { NgdBaseComponent } from '../../ng5-basic/services/ngd-base.component';
import { FormGroup, FormControl } from '@angular/forms';
import { timeout } from 'rxjs/operators';
import { RouterService } from '../../ng5-basic/services/router.service';

@Component({
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent extends NgdBaseComponent {
  public completed = false;
  public form = new FormGroup({
    email: new FormControl(null),
  });
  public response: IResponse<any> = null;

  constructor(
    private http: HttpClient,
    public config: ConfigurationService,
    public ngdRouter: RouterService
  ) {
    super();
  }

  public async requestPassword() {
    const data = this.form.value;
    const url = this.config.API('/api/forget-password');

    const request = () =>
      this.http.post(url, data).pipe(timeout(5000)).toPromise();

    const res = await this.StartSingleRequest(request);
    if (res.item) {
      this.completed = true;
      this.config.ShowToast({
        message: this.config.translate('recovery_link_has_been_sent'),
        type: 'SUCCESS',
      });
    }
  }
}
