import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeFadeAnimation } from '../../../animations/animations';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';

@Component({
  templateUrl: './layout-fade.component.html',
  styleUrls: ['./layout-fade.component.scss'],
  animations: [routeFadeAnimation]
})
export class LayoutFadeComponent implements OnInit {
  public isRequesting = false;
  public isSidebarVisible = true;

  constructor(public sidebar: NgxSidebarService) {
    this.sidebar.SidebarVisibilityState.subscribe(
      val => (this.isSidebarVisible = val)
    );
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  ngOnInit() {
    this.isSidebarVisible = this.sidebar.IsSidebarVisibleInitially();
  }

  sideOff() {
    if (this.isSidebarVisible) {
      this.sidebar.closeSidebar();
    }
  }
}
