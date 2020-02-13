import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuideComponent } from './guide/guide.component';
import {
  NgDashboardModule,
  ConfigurationService,
  NgDashboardEn,
  UserService,
  NgDashboardPl
} from 'projects/core/src/public_api';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, GuideComponent],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgDashboardModule.forRoot({
      navbar: {
        search: {},
        notification: true,
        profile: true
      },
      api: 'http://localhost:1337',
      auth: {
        afterSignupRedirect: '/'
      }
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private config: ConfigurationService,
    private user: UserService,
    private router: Router
  ) {
    this.user.SetUser({
      firstname: 'Ali',
      lastname: 'Torabi',
      email: 'ali.torabi@pixelplux.com'
    });
    this.config.config.navbar = {
      profile: false,
      notification: true
    };
    this.config.SetInteractiveButtons([
      {
        icon: 'icon-info',
        title: 'info',
        tooltip: 'Also it can have tool tip',
        key: 'info_btn',
        onPress: () => {
          alert(
            'Wow! You are now using interactive buttons! see app.module.ts for more info'
          );
        },
        keyboardShortcut: 'Enter'
      }
    ]);
    this.config.SetLanguage('pl', NgDashboardPl);
    this.config.SearchTerms.next([
      {
        title: 'Say hello',
        description: 'Select me, and there will be a hello in console',
        onSelect: () => {
          console.log('Hello!');
        },
        id: '2',
        key: '2',
        keywords: 'Hello, Hi, Hello, Test'
      },
      {
        description: 'Guide about using this dashboard',
        title: 'Guide',
        key: '1',
        id: '1',
        keywords: 'Guide, Guideline, help'
      }
    ]);
    this.config.Teams.next([
      {
        members: [],
        name: 'Personal team'
      },
      {
        members: [],
        name: `Ali's team`
      }
    ]);
    this.config.TeamsConfig.next({
      manageTeams: true,
      manageTeamsText: 'ManageTeams',
      onClick: () => {
        this.router.navigateByUrl('/teams');
      }
    });

    this.config.DockedMenu.next([
      {
        icon: 'icon-logout',
        title: 'Sign-out',
        onClick: () => {
          this.router.navigateByUrl('/login');
        }
      }
    ]);

    this.config.NavigationItems.next([
      {
        title: 'Auth',
        children: [
          {
            title: 'Login',
            link: '/login'
          },
          {
            title: 'Item 1',
            link: '/link1',
            activeMatches: ['/link1/1']
          },
          {
            title: 'Item 3',
            link: '/link1'
          },
          {
            title: 'Item 4'
          }
        ]
      },
      {
        title: 'Second menu',
        children: [
          {
            title: 'Item 1'
          },
          {
            title: 'Item 2',
            link: '/link2'
          },
          {
            title: 'Item 3'
          },
          {
            title: 'Item 4'
          }
        ]
      }
    ]);
  }
}
