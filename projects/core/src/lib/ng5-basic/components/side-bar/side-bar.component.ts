import { Component, OnInit, Input } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';
import { Subscription } from 'rxjs';

/**
 * In order to track state of each menu item (is it opened, how many times clicked, etc)
 * we need to set a unique id to each item. It's hard to ask user to add key for each element
 * we do it here automatically
 */
function navigationWithUniqueKey(items = []) {
  return items.map((menu) => {
    if (menu.children) {
      menu.children = navigationWithUniqueKey(menu.children);
    }
    if (!menu.$key) {
      menu.$key = `virtual-key-${menu.link}-${menu.title}`;
    }
    return menu;
  });
}

function updateMenuInNavigation(items, item) {
  return items.map((menu) => {
    if (menu.children) {
      menu.children = updateMenuInNavigation(menu.children, item);
    }
    if (item.$key === menu.$key) {
      return {
        ...menu,
        $collapsed: item.$collapsed,
      };
    }
    return menu;
  });
}

@Component({
  selector: 'ng-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() public customNav = null;
  private subscription: Subscription = null;

  public animated = false;
  public isSidebarVisible = true;
  public keepOpen = false;
  public nav = [];

  public set navigation(value) {
    this.nav = navigationWithUniqueKey(value);
  }

  public get DockedMenu() {
    return this.config.DockedMenu.value;
  }

  private firstTimeState = true;

  constructor(
    public config: ConfigurationService,
    public sidebar: NgxSidebarService
  ) {}

  ngOnInit() {
    this.navigation = this.customNav
      ? this.customNav
      : this.config.getNavigationItems();

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
    // this.isSidebarVisible = this.sidebar.IsSidebarVisibleInitially();

    // We cache only custom navbar.
    if (!this.customNav) {
      this.sidebar.menuItemChange.subscribe((menu: any) => {
        if (!menu) {
          return;
        }

        const nav = updateMenuInNavigation(this.nav, menu);
        localStorage.setItem(`sidebar_items`, JSON.stringify(nav));
        this.navigation = nav;
      });
    }
  }
}
