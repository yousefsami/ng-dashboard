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
  public sideState = true;

  constructor(public sidebar: NgxSidebarService) {
    this.sidebar.ToggleSidebar.subscribe(e => {
      if (e === 'hidden') {
        this.sideState = false;
        return;
      } else if (e === 'show') {
        this.sideState = true;
        return;
      }
      this.sideState = this.sideState ? false : true;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  ngOnInit() {
    if (window.innerWidth < 992) {
      this.sideState = false;
    }
    const config = this.sidebar.config;
    if (config.sidebar && config.sidebar.visible === false) {
      this.sideState = false;
    }
  }

  sideOff() {
    if (this.sideState) {
      this.sidebar.closeSidebar();
    }
  }
}
