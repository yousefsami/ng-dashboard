import {
  Component,
  OnInit,
  Input,
  Renderer,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver
} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ConfigurationService } from '../services/configuration.service';
import { flatten } from 'lodash';

@Component({
  /* tslint:disable */
  selector: 'ngx-sidebar',
  templateUrl: './ngx-sidebar.component.html',
  styleUrls: ['./ngx-sidebar.component.scss']
})
export class NgxSidebarComponent implements OnInit {
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
    private route: ActivatedRoute,
    private router: Router,
    private config: ConfigurationService,
    private compiler: ComponentFactoryResolver
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
      this.state = !event.currentTarget.classList.contains('opened')
        ? true
        : false;
      this.renderer.setElementClass(event.currentTarget, 'opened', this.state);
      this.state = !this.state;
    } else {
      this.config.closeSidebar();
    }
  }
}
