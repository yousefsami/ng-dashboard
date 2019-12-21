import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'response-type';
import { GetNetworkError } from '../shared';
import { ConfigurationService } from '../../ng5-basic/services/configuration.service';

@Component({
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public url = '';
  public email = '';
  public response: IResponse<any> = null;
  public isRequesting = false;

  constructor(private http: HttpClient, private config: ConfigurationService) {}

  ngOnInit() {
    this.url = this.config.API('/api/forget-password');
  }

  requestPassword(e) {
    e.preventDefault();
    this.forgetPasswordHttp({ email: this.email });
  }

  public error(fieldName: string) {
    if (!this.response || !this.response.error || !this.response.error.errors) {
      return '';
    }
    const error = this.response.error.errors.find(
      x => x.location === fieldName
    );
    return error ? error.message : '';
  }
  public async forgetPasswordHttp(data: { email: string }) {
    try {
      const response = await this.RequestPasswordReset(data.email);
      this.response = response;
      this.isRequesting = false;
      this.onResetSuccess(response);
    } catch (response) {
      this.isRequesting = false;
      if (response.name === 'HttpErrorResponse') {
        this.response = GetNetworkError();
        return false;
      }
      this.response = response;
    }
  }
  public onResetSuccess(response = null) {}
  public async RequestPasswordReset(username: string): Promise<IResponse<any>> {
    const ref = this.http.post(this.url, { username }).toPromise();
    try {
      const response: IResponse<any> = await ref;
      return response;
    } catch (error) {
      if (error.name === 'HttpErrorResponse') {
        return GetNetworkError();
      }
      return error;
    }
  }
}
