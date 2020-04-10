import {
  Component,
  OnInit,
  Input,
  Renderer,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  HostListener,
} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { flatten } from 'lodash';
import { NgxSidebarService } from './ngx-sidebar.service';
import { RouterService } from '../services/router.service';
import { INavigation } from '../definitions';
import { UserService } from '../services/user.service';
import { TeamsService } from '../services/teams.service';

@Component({
  /* tslint:disable */
  selector: 'ngx-sidebar',
  templateUrl: './ngx-sidebar.component.html',
  styleUrls: ['./ngx-sidebar.component.scss'],
})
export class NgxSidebarComponent implements OnInit {
  @HostListener('window:keyup', ['$event']) public onKeyDown(
    event: KeyboardEvent
  ) {
    const $event = document.all ? window.event : event;
    if (
      !/^(?:input|textarea|select|button)$/i.test(
        ($event.target as any).tagName
      )
    ) {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        this.sidebar.Hide();
      }
    }
  }

  @ViewChild('dynamic', {
    read: ViewContainerRef,
    static: false,
  })
  target: ViewContainerRef;
  @Input() navigation: Array<any>;
  @Input() containerClass = 'main-ul';
  @Input() child: string;
  @Input() value: string;
  public state = true;
  public currentRoute = null;
  public isRouteFocused = false;
  public nav = null;
  public currrent;
  private componentRef: ComponentRef<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private compiler: ComponentFactoryResolver,
    private sidebar: NgxSidebarService,
    private user: UserService,
    private team: TeamsService,
    public ngdRouter: RouterService
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url;
        this.IsRouteFocused(e.url);
      }
    });
  }
  destroyComponent() {
    this.componentRef.destroy();
  }

  public itemLink(nav: INavigation) {
    if (nav.type === 'PUBLIC') {
      return this.ngdRouter.publicLink(nav.link);
    }

    if (nav.type === 'INTER_TEAM') {
      return this.ngdRouter.routerLink(nav.link);
    }

    return nav.link;
  }

  renderComponents(childComponent) {
    if (!childComponent) {
      return;
    }
    let componentFactory = this.compiler.resolveComponentFactory(
      childComponent
    );
    this.componentRef = this.target.createComponent(componentFactory);
    this.renderComponent();
  }
  ngOnChanges(changes: Object) {
    this.renderComponent();
  }
  public GoBack() {
    history.back();
    this.destroyComponent();
  }
  ngOnInit() {
    this.currentRoute = this.router.url;
    this.IsRouteFocused(this.currentRoute);
  }

  public get CurrentRoute() {
    const route =
      this.currentRoute.indexOf('?') >= 0
        ? this.currentRoute.substr(0, this.currentRoute.indexOf('?'))
        : this.currentRoute;

    return route;
  }

  public MenuActiveByActiveMatches(nav) {
    if (nav.activeMatches && nav.activeMatches.length) {
      for (const xa of nav.activeMatches) {
        const matches = new RegExp(xa).test(this.CurrentRoute);
        if (matches) {
          return true;
        }
      }
    }
  }

  /**
   * Checks if the user has the permission to see this item in the menu
   */
  public menuVisibleForPermissions(nav: INavigation) {
    // If no permission defined, it should be visible to everyone.

    if (nav && nav.children) {
      const anyChildHasPermit = nav.children.filter((child) =>
        this.menuVisibleForPermissions(child)
      );

      if (anyChildHasPermit.length === 0) {
        return false;
      }
    }

    if (!nav.permissions || nav.permissions.length === 0) {
      return true;
    }

    return this.user.canActivateByPermissions(
      nav.permissions,
      this.team.CurrentSelectedTeam
    );
  }

  public menuActive(nav) {
    const route = this.CurrentRoute;

    if (this.MenuActiveByActiveMatches(nav)) {
      return true;
    }

    if (nav.children) {
      for (const item of nav.children) {
        if (item.activeMatches) {
          for (const xa of item.activeMatches) {
            const matches = new RegExp(xa).test(route);
            if (matches) {
              return true;
            }
          }
        }
      }
    }

    if (this.ngdRouter.routerLink(nav.link) === route && !nav.children) {
      return true;
    }

    if (nav.children) {
      for (const item of nav.children) {
        if (this.ngdRouter.routerLink(item.link) === route) {
          return true;
        }
      }
    }
    return false;
  }

  renderComponent() {
    if (this.componentRef) this.componentRef.instance.value = this.value;
  }
  public onLinkClick(item) {
    this.IsRouteFocused(item.link);
  }
  public IsRouteFocused(url) {
    let $nav = null;
    let focused = false;
    const flatNav = flatten(this.navigation);
    flatNav.map((nav) => {
      if (nav.link === url && nav.focused) {
        focused = true;
        $nav = nav;
      }
    });
    this.isRouteFocused = focused;
    if (this.isRouteFocused) {
      this.nav = $nav;
    } else {
      this.nav = null;
    }
  }
  menuToggle(event: any, nav: any) {
    if (nav.hasOwnProperty('children')) {
      this.sidebar.menuItemChange.next({
        ...nav,
        $collapsed: !nav.$collapsed,
      });
    } else {
      this.sidebar.Hide('MENU_ITEM_CLICK');
    }
  }
}
