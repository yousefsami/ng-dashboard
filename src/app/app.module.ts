import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuideComponent } from './guide/guide.component';
import {
  NgDashboardModule,
  ConfigurationService,
  NgDashboardEn
} from 'projects/core/src/public_api';

@NgModule({
  declarations: [AppComponent, GuideComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    NgDashboardModule.forRoot({
      api: 'http://localhost:1337',
      navigation: [
        {
          title: 'Login',
          link: '/login'
        }
      ],
      auth: {
        afterSignupRedirect: '/'
      }
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private config: ConfigurationService) {
    this.config.translationsDictionary = NgDashboardEn;
    this.config.language.next('en');
  }
}
