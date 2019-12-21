import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public isRequesting = false;
  public sideState = true;

  constructor(public sidebar: ConfigurationService) {
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
