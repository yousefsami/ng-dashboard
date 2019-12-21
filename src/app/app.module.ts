import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuideComponent } from './guide/guide.component';
import { NgDashboardModule } from 'projects/core/src/public_api';
import { NgAuthenticationModule } from 'projects/authentication/src/public_api';

@NgModule({
  declarations: [AppComponent, GuideComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forChild(),
    NgDashboardModule.forRoot({
      navigation: [
        {
          title: 'Login',
          link: '/login'
        }
      ]
    }),
    NgAuthenticationModule.forRoot({ baseUrl: '' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
