import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgAuthenticationComponent } from './ng-authentication.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProgressLineComponent } from './progress-line/progress-line.component';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FormsModule } from '@angular/forms';
import { FacebookService } from './facebook.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';
import { IAuthConfig } from './definitions';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthPublicService } from './auth-public.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([]),
    TranslateModule.forRoot()
  ],
  declarations: [
    NgAuthenticationComponent,
    LoginFormComponent,
    ProgressLineComponent,
    ErrorMessageComponent,
    SignupFormComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  exports: [
    NgAuthenticationComponent,
    LoginFormComponent,
    ProgressLineComponent,
    ErrorMessageComponent,
    SignupFormComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  providers: [FacebookService, ConfigService]
})
export class NgAuthenticationModule {
  static forRoot(config: IAuthConfig): ModuleWithProviders {
    return {
      ngModule: NgAuthenticationModule,
      providers: [ConfigService, { provide: 'authConfig', useValue: config }]
    };
  }
  constructor(
    private auth: AuthPublicService,
    @Inject('authConfig') public authConfig: IAuthConfig
  ) {
    this.auth.translations.subscribe(e => {});
  }
}
