import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';
import { WorkingStates } from '../../services/common';
import { IWorkingState } from '../../definitions';
import { Subscription } from 'rxjs';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public isSidebarVisible = true;
  public toolbarData = null;

  constructor(
    public sidebar: NgxSidebarService,
    private config: ConfigurationService
  ) {
    this.sidebar.SidebarVisibilityState.subscribe(
      (val) => (this.isSidebarVisible = val)
    );
  }

  ngOnInit() {
    this.isSidebarVisible = this.sidebar.IsSidebarVisibleInitially();

    this.config.ToolbarComponent.subscribe((t) => {
      setTimeout(() => {
        this.toolbarData = t;
      }, 100);
    });
  }

  sideOff() {
    if (this.isSidebarVisible) {
      this.sidebar.Hide('OUTSIDE_CLICK');
    }
  }

  public touchmove(e) {
    e.stopPropagation();
  }
  public touchstart(e) {
    e.stopPropagation();
  }
  public touchend(e) {
    e.stopPropagation();
  }
}
