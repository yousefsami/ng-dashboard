import { Component, OnInit } from '@angular/core';
import { UserFlowService } from 'projects/core/src/public_api';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'ng-dashboard';
  constructor(private userflow: UserFlowService) {}

  ngOnInit() {
    this.userflow.CollectInformationFromToken();
    this.userflow.SubscribeToAuthentication();
  }
}
