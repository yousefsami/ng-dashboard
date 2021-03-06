import {
  Component,
  OnInit,
  Inject,
  HostListener,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import {
  NavbarConfig,
  NgBasicConfig,
  InteractiveButton,
} from '../../definitions';
import { ConfigurationService } from '../../services/configuration.service';
import { TranslateService } from '../../services/translate.service';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ng-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [TranslateService],
})
export class NavBarComponent implements OnInit, OnDestroy, AfterViewInit {
  public MobileSearchBar = false;
  public leftContent: Subscription;

  public interactiveButtons: InteractiveButton[] = [];
  public config: NavbarConfig = {
    notification: false,
    profile: false,
    avatar: 'DOC',
    brand: 'ng-dashboard',
    title: 'Documentations',
    search: {
      terms: [],
    },
  };

  @ViewChild('leftNavbarArea', { read: ViewContainerRef, static: false })
  viewContainerRef: ViewContainerRef;

  @HostListener('window:keyup', ['$event']) public onKeyDown(
    event: KeyboardEvent
  ) {
    const $event = document.all ? window.event : event;
    if (
      !/^(?:input|textarea|select|button)$/i.test(
        ($event.target as any).tagName
      )
    ) {
      const matchedButton = this.interactiveButtons.find(
        (button) => event.key === button.keyboardShortcut
      );
      if (matchedButton) {
        this.interactiveBtnClick(matchedButton);
      }

      if (event.key === 'm' || event.key === 'M') {
        if (this.sidebar.IsVisible) {
          return this.sidebar.ForceHide();
        }
        return this.sidebar.Show();
      }
    }
  }
  constructor(
    @Inject('config') public gconfig: NgBasicConfig,
    public sidebar: NgxSidebarService,
    public user: UserService,
    private configService: ConfigurationService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  public get Terms() {
    return this.configService.SearchTerms.value;
  }

  public ToggleSearchBar() {
    this.MobileSearchBar = !this.MobileSearchBar;
  }

  ngOnDestroy() {
    if (this.leftContent) {
      this.leftContent.unsubscribe();
    }
  }

  ngOnInit() {
    if (this.gconfig && this.gconfig.navbar) {
      this.config = this.gconfig.navbar;
    }

    this.configService.NavbarInteractiveButtons.subscribe((buttons) => {
      this.interactiveButtons = buttons;
    });
  }

  ngAfterViewInit() {
    this.leftContent = this.configService.NavigationLeftContent.subscribe(
      (content) => {
        if (!content || typeof content !== 'function') {
          console.warn(
            'You should provide an angular component for NavigationLeftContent'
          );
          return;
        }

        const factory = this.componentFactoryResolver.resolveComponentFactory(
          content
        );

        if (!this.viewContainerRef) {
          return;
        }

        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
      }
    );
  }

  public interactiveBtnClick(btn: InteractiveButton) {
    if (btn.onPress) {
      btn.onPress(btn);
    }
  }

  public MultiActionKey() {
    if (this.MobileSearchBar) {
      this.MobileSearchBar = !this.MobileSearchBar;
      return;
    }
    this.SidebarVisibilityState();
  }

  SidebarVisibilityState() {
    this.sidebar.Toggle();
  }
}
