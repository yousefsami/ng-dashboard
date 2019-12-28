import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';

@Component({
  selector: 'ng-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public sideState = true;
  public keepOpen = false;
  public navigation: Array<any> = [];

  constructor(
    public config: ConfigurationService,
    public sidebar: NgxSidebarService
  ) {
    this.sidebar.ToggleSidebar.subscribe(e => {
      if (e === 'hidden' && !this.keepOpen) {
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
    this.navigation = this.config.getNavigationItems();
    const config = this.config.config;
    this.sideState = false;
    if (config.sidebar) {
      if (this.config.config.sidebar.visible) {
        this.sideState = this.config.config.sidebar.visible;
      }
    }
    if (window.innerWidth < 992) {
      this.sideState = false;
    }
  }
}
