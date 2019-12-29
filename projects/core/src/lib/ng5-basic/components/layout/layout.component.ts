import { Component, OnInit } from '@angular/core';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public isRequesting = false;
  public isSidebarVisible = true;

  constructor(public sidebar: NgxSidebarService) {
    this.sidebar.SidebarVisibilityState.subscribe(
      val => (this.isSidebarVisible = val)
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
