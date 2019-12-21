import { Component, OnInit, Inject } from '@angular/core';
import { SupportedLanguages } from '../../services/globalization.service';
import { NavbarConfig, NgBasicConfig } from '../../definitions';
import { ConfigurationService } from '../../services/configuration.service';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'ng-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [TranslateService]
})
export class NavBarComponent implements OnInit {
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
  constructor(
    @Inject('config') public gconfig: NgBasicConfig,
    private configuration: ConfigurationService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    if (this.gconfig && this.gconfig.navbar) {
      this.config = this.gconfig.navbar;
    }
  }

  ToggleSidebar() {
    this.configuration.ToggleSidebar.emit();
  }
  public CurrentLanguage() {
    return SupportedLanguages[this.translate.currentLang];
  }
}
