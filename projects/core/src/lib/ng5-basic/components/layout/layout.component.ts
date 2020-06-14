import { Component, OnInit, Input } from '@angular/core';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'ngd-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Input() public customNav = null;
  public animated = false;
  public isSidebarVisible = true;
  public toolbarData = null;
  private firstTimeState = true;

  constructor(
    public sidebar: NgxSidebarService,
    private config: ConfigurationService
  ) {
    this.sidebar.SidebarVisibilityState.subscribe((val) => {
      this.isSidebarVisible = val;

      // Used for preventing animation to happen for first state.
      // It's useful for preventing visual bad effect when SSR rerenders the app
      if (this.firstTimeState) {
        this.firstTimeState = false;
      } else {
        this.animated = true;
      }
    });
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
