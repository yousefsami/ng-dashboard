import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { SupportedLanguages } from '../../services/globalization.service';
import {
  NavbarConfig,
  NgBasicConfig,
  InteractiveButton
} from '../../definitions';
import { ConfigurationService } from '../../services/configuration.service';
import { TranslateService } from '../../services/translate.service';
import { NgxSidebarService } from '../../ngx-sidebar/ngx-sidebar.service';

@Component({
  selector: 'ng-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [TranslateService]
})
export class NavBarComponent implements OnInit {
  public interactiveButtons: InteractiveButton[] = [];
  public config: NavbarConfig = {
    notification: false,
    profile: false,
    avatar: 'DOC',
    brand: 'ng-dashboard',
    title: 'Documentations',
    search: {
      terms: []
    }
  };

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
        button => event.key === button.keyboardShortcut
      );
      if (matchedButton) {
        this.interactiveBtnClick(matchedButton);
      }
    }
  }
  constructor(
    @Inject('config') public gconfig: NgBasicConfig,
    private sidebar: NgxSidebarService,
    private translate: TranslateService,
    private configService: ConfigurationService
  ) {}

  ngOnInit() {
    if (this.gconfig && this.gconfig.navbar) {
      this.config = this.gconfig.navbar;
    }
    this.configService.NavbarInteractiveButtons.subscribe(buttons => {
      console.log('buttons', buttons);
      this.interactiveButtons = buttons;
    });
  }

  public interactiveBtnClick(btn: InteractiveButton) {
    console.log('btn click!', btn);
    if (btn.onPress) {
      btn.onPress(btn);
    }
  }

  SidebarVisibilityState() {
    this.sidebar.Toggle();
  }

  public CurrentLanguage() {
    return SupportedLanguages[this.translate.currentLang];
  }
}
