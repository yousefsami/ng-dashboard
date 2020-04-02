import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';

/**
 * In order to track state of each menu item (is it opened, how many times clicked, etc)
 * we need to set a unique id to each item. It's hard to ask user to add key for each element
 * we do it here automatically
 */
function navigationWithUniqueKey(items = []) {
  return items.map(menu => {
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
  return items.map(menu => {
    if (menu.children) {
      menu.children = updateMenuInNavigation(menu.children, item);
    }
    if (item.$key === menu.$key) {
      return {
        ...menu,
        $collapsed: item.$collapsed
      };
    }
    return menu;
  });
}

@Component({
  selector: 'ng-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public isSidebarVisible = true;
  public keepOpen = false;
  public nav = [];

  public set navigation(value) {
    this.nav = navigationWithUniqueKey(value);
  }

  public get DockedMenu() {
    return this.config.DockedMenu.value;
  }

  constructor(
    public config: ConfigurationService,
    public sidebar: NgxSidebarService
  ) {
    this.sidebar.SidebarVisibilityState.subscribe(val => {
      this.isSidebarVisible = val;
    });
  }

  ngOnInit() {
    this.navigation = this.config.getNavigationItems();

    this.isSidebarVisible = this.sidebar.IsSidebarVisibleInitially();
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
