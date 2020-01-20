import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';
import { WorkingStates } from '../../services/common';
import { IWorkingState } from '../../definitions';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  public isRequesting = false;
  public isSidebarVisible = true;
  public workers: Array<IWorkingState> = [];
  private sub: Subscription = null;

  constructor(public sidebar: NgxSidebarService) {
    this.sidebar.SidebarVisibilityState.subscribe(
      val => (this.isSidebarVisible = val)
    );
  }

  ngOnInit() {
    this.isSidebarVisible = this.sidebar.IsSidebarVisibleInitially();
    WorkingStates.subscribe(t => {
      this.workers = t;
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
