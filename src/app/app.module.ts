import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuideComponent } from './guide/guide.component';
import {
  NgDashboardModule,
  ConfigurationService,
  UserService,
  NgDashboardPl,
  ModalService,
  RouterService,
  TeamsService,
  InteractiveButtons,
} from 'projects/core/src/public_api';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleToolbarComponent } from './simple-toolbar/simple-toolbar.component';
import { BugReportComponent } from 'projects/core/src/lib/ng5-basic/components/bug-report/bug-report.component';

@NgModule({
  declarations: [AppComponent, GuideComponent, SimpleToolbarComponent],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgDashboardModule.forRoot({
      navbar: {
        search: {},
        notification: true,
        profile: true,
      },
      api: 'https://taxopit.com',
      auth: {
        afterSignupRedirect: '/',
      },
    }),
  ],
  exports: [],
  entryComponents: [SimpleToolbarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  public BugReport() {
    this.modal
      .open({
        content: BugReportComponent,
        title: this.config.translate('bug_report_title'),
        type: 'CONFIRMATION',
      })
      .subscribe((result) => {
        console.log(result);
      });
  }

  constructor(
    private config: ConfigurationService,
    private user: UserService,
    private teamsService: TeamsService,
    private modal: ModalService,
    private ngdRouter: RouterService
  ) {
    this.user.SetUser({
      firstname: 'Ali',
      lastname: 'Torabi',
      email: 'ali.torabi@pixelplux.com',
    });
    this.config.config.navbar = {
      profile: false,
      notification: true,
    };

    this.config.SetGlobalInteractiveButtons([
      InteractiveButtons.BugReport(() => {}),
      InteractiveButtons.Refresh(() => {}),
    ]);
    this.config.ProvideTranslationForLangauge('pl', NgDashboardPl);
    this.config.SetLanguage('pl');
    this.config.SearchTerms.next([
      {
        title: 'Say hello',
        description: 'Select me, and there will be a hello in console',
        onSelect: () => {
          console.log('Hello!');
        },
        id: '2',
        key: '2',
        keywords: 'Hello, Hi, Hello, Test',
      },
      {
        description: 'Guide about using this dashboard',
        title: 'Guide',
        key: '1',
        id: '1',
        keywords: 'Guide, Guideline, help',
      },
    ]);
    this.config.Teams.next([
      {
        members: [],
        name: 'Personal team',
      },
      {
        members: [],
        name: `Ali's team`,
      },
    ]);
    this.config.TeamsConfig.next({
      manageTeams: true,
      manageTeamsText: 'ManageTeams',
      onClick: () => {
        this.ngdRouter.navigateTo('/teams');
      },
    });

    this.config.DockedMenu.next([
      {
        icon: 'icon-logout',
        title: 'Sign-out',
        onClick: () => {
          this.ngdRouter.navigateTo('/login');
        },
      },
    ]);

    this.config.NavigationItems.next([
      {
        title: 'Auth',
        children: [
          {
            title: 'Item 1',
            link: '/link1',
            activeMatches: ['/link1/1'],
          },
          {
            title: 'Login',
            link: '/login',
          },
          {
            title: 'Login',
            link: '/login',
          },
          {
            title: 'Signup',
            link: '/signup',
          },
          {
            title: 'Reset password',
            link: '/reset-password',
          },
          {
            title: 'Forgot password',
            link: '/forgot-password',
          },
        ],
      },
      {
        title: 'Second menu',
        children: [
          {
            title: 'Item 1',
          },
          {
            title: 'Item 2',
            link: '/link2',
          },
          {
            title: 'Item 3',
          },
          {
            title: 'Item 4',
          },
        ],
      },
    ]);
  }
}
