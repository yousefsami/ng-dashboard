import {
  Component,
  OnInit,
  Input,
  Renderer,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  HostListener
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConfigurationService } from '../services/configuration.service';
import { flatten } from 'lodash';
import { NgxSidebarService } from './ngx-sidebar.service';

@Component({
  /* tslint:disable */
  selector: 'ngx-sidebar',
  templateUrl: './ngx-sidebar.component.html',
  styleUrls: ['./ngx-sidebar.component.scss']
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
      if (event.key === 'm' || event.key === 'M') {
        this.sidebar.Toggle();
      }
      if (event.key === 'Escape' || event.key === 'Backspace') {
        this.sidebar.Hide();
      }
    }
  }

  @ViewChild('dynamic', {
    read: ViewContainerRef,
    static: false
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
  private componentRef: ComponentRef<any>;

  constructor(
    private renderer: Renderer,
    private router: Router,
    private config: ConfigurationService,
    private compiler: ComponentFactoryResolver,
    private sidebar: NgxSidebarService
  ) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url;
        this.IsRouteFocused(e.url);
      }
    });
  }
  destroyComponent() {
    this.componentRef.destroy();
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
    flatNav.map(nav => {
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
        $collapsed: !nav.$collapsed
      });
    } else {
      this.sidebar.Hide();
    }
  }
}
