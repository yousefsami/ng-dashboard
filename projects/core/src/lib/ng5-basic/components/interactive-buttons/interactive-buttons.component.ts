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
  selector: 'ng-interactive-buttons',
  templateUrl: './interactive-buttons.component.html',
  styleUrls: ['./interactive-buttons.component.scss'],
  providers: [TranslateService]
})
export class InteractiveButtonsComponent implements OnInit {
  public interactiveButtons: InteractiveButton[] = [];

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
    public sidebar: NgxSidebarService,
    private configService: ConfigurationService
  ) {}

  ngOnInit() {
    this.configService.NavbarInteractiveButtons.subscribe(buttons => {
      this.interactiveButtons = buttons;
    });
  }

  public interactiveBtnClick(btn: InteractiveButton) {
    if (btn.onPress) {
      btn.onPress(btn);
    }
  }
}
