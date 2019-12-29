import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';

@Component({
  selector: 'ng-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public isSidebarVisible = true;
  public keepOpen = false;
  public navigation: Array<any> = [];

  constructor(
    public config: ConfigurationService,
    public sidebar: NgxSidebarService
  ) {
    this.sidebar.SidebarVisibilityState.subscribe(
      val => (this.isSidebarVisible = val)
    );
  }

  ngOnInit() {
    this.navigation = this.config.getNavigationItems();
    this.isSidebarVisible = this.sidebar.IsSidebarVisibleInitially();
  }
}
