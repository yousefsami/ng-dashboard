import { Component, OnInit } from '@angular/core';
import { error, GetNetworkError } from '../shared';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'response-type';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

export interface IResetForm {
  password1: string;
  password2: string;
  key: string;
}
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
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.url = this.config.Config.baseUrl + '/api/user/reset-password';

    this.route.params.subscribe((data: {key: string}) => {
      this.key = this.form.key = data.key;
    });
  }
  public SubmitForm () {
    this.execute(this.form);
  }
  private execute (data: IResetForm) {
    this.http.post(this.url, data).subscribe(
      (response) => {
        this.response = response;
        if (this.response.data && this.response.data.items[0]) {
          this.router.navigateByUrl('/login');
        }
        this.isRequesting = false;
      },
      (response) => {
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
