import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgBasicConfig } from './ng5-basic/definitions';

import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PermissionsService } from './ng5-basic/services/permissions.service';
import { RequestsService } from './ng5-basic/services/requests.service';
import { ActionsService } from './ng5-basic/services/actions.service';
import { HttpClientModule } from '@angular/common/http';

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
import { ProgressLineComponent } from './ng5-basic/components/progress-line/progress-line.component';
import { PageContainerComponent } from './ng5-basic/components/page-container/page-container.component';
import { ErrorMessageComponent } from './ng5-basic/components/error-message/error-message.component';
import { GlobalizationService } from './ng5-basic/services/globalization.service';
import { ng5ReducerGenerator } from './ng5-basic/ng5-basic.reducers';
import { NgxSidebarComponent } from './ng5-basic/ngx-sidebar/ngx-sidebar.component';
import { ConfigurationService } from './ng5-basic/services/configuration.service';
import { StoreModule } from '@ngrx/store';
import { SpinnerComponent } from './ng5-basic/components/spinner/spinner.component';
import { LayoutFadeComponent } from './ng5-basic/components/layout-fade/layout-fade.component';
import { AmazingSearchModule } from 'amazing-search';
import { TranslateService } from './ng5-basic/services/translate.service';

import { LoginFormComponent } from './auth/login-form/login-form.component';
import { FacebookService } from './auth/facebook.service';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { TPipe } from './t.pipe';
import { ToastaModule } from 'ngx-toasta';
import { UserService } from './ng5-basic/services/user.service';
import { NgxSidebarService } from './ng5-basic/ngx-sidebar/ngx-sidebar.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamSelectorComponent } from './ng5-basic/components/team-selector/team-selector.component';
import { TeamsService } from './ng5-basic/services/teams.service';
import { InteractiveButtonsComponent } from './ng5-basic/components/interactive-buttons/interactive-buttons.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutFadeComponent,
    SideBarComponent,
    NavBarComponent,
    InteractiveButtonsComponent,
    ProfileMenuComponent,
    NotificationListComponent,
    UiIconBoxComponent,
    ProgressLineComponent,
    TeamSelectorComponent,
    UiPanelBoxComponent,
    SpinnerComponent,
    NgxSidebarComponent,
    UiSmallBoxComponent,
    PageContainerComponent,
    ErrorMessageComponent,
    LoginFormComponent,
    ProgressLineComponent,
    ErrorMessageComponent,
    SignupFormComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    TPipe
  ],
  exports: [
    LayoutComponent,
    SideBarComponent,
    NavBarComponent,
    ProfileMenuComponent,
    InteractiveButtonsComponent,
    LayoutFadeComponent,
    NotificationListComponent,
    UiIconBoxComponent,
    ProgressLineComponent,
    UiPanelBoxComponent,
    SpinnerComponent,
    UiSmallBoxComponent,
    PageContainerComponent,
    ErrorMessageComponent,
    LoginFormComponent,
    TeamSelectorComponent,
    ProgressLineComponent,
    ErrorMessageComponent,
    SignupFormComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    TPipe
  ],
  imports: [
    AmazingSearchModule,
    TranslateModule.forRoot({}),
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    BrowserModule,
    ToastaModule,
    FormsModule,
    NgxTooltipModule,
    StoreModule.forRoot({}),
    RouterModule.forRoot([]),
    ng5ReducerGenerator()
  ],
  providers: [
    PermissionsService,
    TranslateService,
    RequestsService,
    MockService,
    ActionsService,
    ConfigurationService,
    NgxSidebarService,
    FacebookService,
    UserService,
    TeamsService,
    GlobalizationService
  ]
})
export class NgDashboardModule {
  static forRoot(config: NgBasicConfig = {}): ModuleWithProviders {
    return {
      ngModule: NgDashboardModule,
      providers: [
        MockService,
        ConfigurationService,
        { provide: 'config', useValue: config }
      ]
    };
  }
}
