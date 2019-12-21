import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuideComponent } from './guide/guide.component';
import { NgDashboardModule } from 'projects/core/src/public_api';

@NgModule({
  declarations: [AppComponent, GuideComponent],
  imports: [BrowserModule, AppRoutingModule, NgDashboardModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
