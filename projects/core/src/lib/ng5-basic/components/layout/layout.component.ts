import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';
import { WorkingStates } from '../../services/common';
import { IWorkingState } from '../../definitions';
import { Subscription } from 'rxjs';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  public isRequesting = false;
  public isSidebarVisible = true;
  public toolbarData = null;
  public workers: Array<IWorkingState> = [];
  private sub: Subscription = null;

  constructor(
    public sidebar: NgxSidebarService,
    private config: ConfigurationService
  ) {
    this.sidebar.SidebarVisibilityState.subscribe(
      val => (this.isSidebarVisible = val)
    );
  }

  ngOnInit() {
    this.isSidebarVisible = this.sidebar.IsSidebarVisibleInitially();
    this.sub = WorkingStates.subscribe(t => {
      this.workers = t;
    });
    this.config.ToolbarComponent.subscribe(t => {
      if (!t) {
        return;
      }
      setTimeout(() => {
        this.toolbarData = t;
      }, 100);
    });
  }

  ngOnDestroy() {
    if (this.sub.unsubscribe) {
      this.sub.unsubscribe();
    }
  }

  sideOff() {
    if (this.isSidebarVisible) {
      this.sidebar.Hide('OUTSIDE_CLICK');
    }
  }
}
