import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgBasicConfig } from './ng5-basic/definitions';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserCookiesModule } from 'ngx-universal-cookies/browser';

import { TranslateModule } from '@ngx-translate/core';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PermissionsService } from './ng5-basic/services/permissions.service';
import { RequestsService } from './ng5-basic/services/requests.service';
import { ActionsService } from './ng5-basic/services/actions.service';
import { HttpClientModule } from '@angular/common/http';
import { LottieModule } from 'ngx-lottie';

import { MockService } from './ng5-basic/services/mocks.service';
import { LayoutComponent } from './ng5-basic/components/layout/layout.component';
import { NavBarComponent } from './ng5-basic/components/nav-bar/nav-bar.component';
import { SideBarComponent } from './ng5-basic/components/side-bar/side-bar.component';
import { ProfileMenuComponent } from './ng5-basic/components/profile-menu/profile-menu.component';
import { NotificationListComponent } from './ng5-basic/components/notification-list/notification-list.component';
import { NgxTooltipModule } from './ngx-tooltip/ngx-tooltip.module';
import { UiIconBoxComponent } from './ng5-basic/components/ui-icon-box/ui-icon-box.component';
import { UiPanelBoxComponent } from './ng5-basic/components/ui-panel-box/ui-panel-box.component';
import { UiSmallBoxComponent } from './ng5-basic/components/ui-small-box/ui-small-box.component';
import { PageContainerComponent } from './ng5-basic/components/page-container/page-container.component';
import { ErrorMessageComponent } from './ng5-basic/components/error-message/error-message.component';
import { GlobalizationService } from './ng5-basic/services/globalization.service';
import { ng5ReducerGenerator } from './ng5-basic/ng5-basic.reducers';
import { NgxSidebarComponent } from './ng5-basic/ngx-sidebar/ngx-sidebar.component';
import { ConfigurationService } from './ng5-basic/services/configuration.service';
import { StoreModule } from '@ngrx/store';
import { SpinnerComponent } from './ng5-basic/components/spinner/spinner.component';
import { TranslateService } from './ng5-basic/services/translate.service';

import { LoginFormComponent } from './auth/login-form/login-form.component';
import { FacebookService } from './auth/facebook.service';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { TPipe } from './t.pipe';
import { UserService } from './ng5-basic/services/user.service';
import { NgxSidebarService } from './ng5-basic/ngx-sidebar/ngx-sidebar.service';
import { TeamSelectorComponent } from './ng5-basic/components/team-selector/team-selector.component';
import { TeamsService } from './ng5-basic/services/teams.service';
import { InteractiveButtonsComponent } from './ng5-basic/components/interactive-buttons/interactive-buttons.component';
import { AutofocusDirective } from './ng5-basic/services/autofocus.directive';
import { ConfirmComponent } from './ng5-basic/components/confirm/confirm.component';
import { ToolbarComponent } from './ng5-basic/components/toolbar/toolbar.component';
import { BaseModalComponent } from './ng5-basic/components/base-modal/base-modal.component';

import { ConfirmService } from './ng5-basic/services/confirm.service';
import { ModalService } from './ng5-basic/services/modal.service';
import { NavbarLeftContentComponent } from './ng5-basic/components/navbar-left-content/navbar-left-content.component';
import { BugReportComponent } from './ng5-basic/components/bug-report/bug-report.component';
import { EmailInputComponent } from './auth/email-input/email-input.component';
import { PasswordInputComponent } from './auth/password-input/password-input.component';
import { RouterService } from './ng5-basic/services/router.service';
import { TokenInterceptor } from './ng5-basic/services/token.interceptor';
import {
  AccessWithTokenGuard,
  NoAccessTokenGuard,
} from './ng5-basic/services/access-token-guard';
import { PublicLangaugeAuth } from './ng5-basic/services/public-lang.guard';
import { TeamGuardAuth } from './ng5-basic/services/team.guard';
import { WorkerStatesComponent } from './ng5-basic/components/worker-states/worker-states.component';
import { ProfileComponent } from './team/components/profile/profile.component';
import { InvitationsComponent } from './team/components/invitations/invitations.component';
import { PaymentCallbackComponent } from './team/components/payment-callback/payment-callback.component';
import { PaymentsComponent } from './team/components/payments/payments.component';
import { InviteFormComponent } from './team/components/invite-form/invite-form.component';
import { ProfileAvatarComponent } from './team/components/profile-avatar/profile-avatar.component';
import { TeamsComponent } from './team/components/teams/teams.component';
import { TeamFormComponent } from './team/components/team-form/team-form.component';
import { PackageSingleComponent } from './team/components/package-single/package-single.component';
import { PackageListComponent } from './team/components/package-list/package-list.component';
import { UserFlowService } from './ng5-basic/services/userflow.service';
import { ProfileService } from './team/profile.service';
import { TeamsCommonService } from './team/teamcommon.service';
import { SSRLottieComponent } from './ng5-basic/components/lottie/lottie.component';
import { InteractiveNoteComponent } from './ng5-basic/components/interactive-note/interactive-note.component';
import { NgMediaCoreModule } from 'ng-media';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    LayoutComponent,
    ConfirmComponent,
    ToolbarComponent,
    EmailInputComponent,
    PasswordInputComponent,
    SideBarComponent,
    BaseModalComponent,
    BugReportComponent,
    NavBarComponent,
    WorkerStatesComponent,
    InteractiveButtonsComponent,
    AutofocusDirective,
    ProfileMenuComponent,
    NotificationListComponent,
    UiIconBoxComponent,
    TeamSelectorComponent,
    UiPanelBoxComponent,
    SpinnerComponent,
    NgxSidebarComponent,
    UiSmallBoxComponent,
    PageContainerComponent,
    ErrorMessageComponent,
    NavbarLeftContentComponent,
    LoginFormComponent,
    ErrorMessageComponent,
    SignupFormComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    TPipe,
    ProfileComponent,
    InvitationsComponent,
    PaymentCallbackComponent,
    PaymentsComponent,
    InviteFormComponent,
    ProfileAvatarComponent,
    TeamsComponent,
    TeamFormComponent,
    PackageSingleComponent,
    PackageListComponent,
    SSRLottieComponent,
    InteractiveNoteComponent,
  ],
  exports: [
    InteractiveNoteComponent,
    ConfirmComponent,
    LayoutComponent,
    SideBarComponent,
    NavBarComponent,
    WorkerStatesComponent,
    BaseModalComponent,
    ProfileMenuComponent,
    InteractiveButtonsComponent,
    EmailInputComponent,
    NotificationListComponent,
    BaseModalComponent,
    UiIconBoxComponent,
    UiPanelBoxComponent,
    SpinnerComponent,
    NgxSidebarComponent,
    UiSmallBoxComponent,
    PageContainerComponent,
    ConfirmComponent,
    NavbarLeftContentComponent,
    ErrorMessageComponent,
    ToolbarComponent,
    LoginFormComponent,
    TeamSelectorComponent,
    ErrorMessageComponent,
    BugReportComponent,
    AutofocusDirective,
    SignupFormComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    TPipe,
    ProfileComponent,
    SSRLottieComponent,
    InvitationsComponent,
    PaymentCallbackComponent,
    PaymentsComponent,
    InviteFormComponent,
    ProfileAvatarComponent,
    TeamsComponent,
    TeamFormComponent,
    PackageSingleComponent,
    PackageListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    TranslateModule.forRoot({}),
    HttpClientModule,
    BrowserCookiesModule.forRoot(),
    NoopAnimationsModule,
    LottieModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    NgMediaCoreModule,
    FormsModule,
    NgxTooltipModule,
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    RouterModule.forRoot([]),
    ng5ReducerGenerator(),
  ],
  providers: [
    PermissionsService,
    TranslateService,
    RouterService,
    RequestsService,
    MockService,
    TeamGuardAuth,
    PublicLangaugeAuth,
    ConfirmService,
    ModalService,
    TokenInterceptor,
    AccessWithTokenGuard,
    NoAccessTokenGuard,
    ActionsService,
    ConfigurationService,
    NgxSidebarService,
    FacebookService,
    UserService,
    TeamsService,
    GlobalizationService,
    ProfileService,
    TeamsCommonService,
    UserFlowService,
  ],
  entryComponents: [
    ConfirmComponent,
    BaseModalComponent,
    ProfileAvatarComponent,
    BugReportComponent,
    NavbarLeftContentComponent,
  ],
})
export class NgDashboardModule {
  static forRoot(config: NgBasicConfig = {}): ModuleWithProviders {
    return {
      ngModule: NgDashboardModule,
      providers: [
        MockService,
        ConfigurationService,
        { provide: 'config', useValue: config },
      ],
    };
  }
}
