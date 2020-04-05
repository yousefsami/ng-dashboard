import { Component, OnInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'ngd-lottie',
  templateUrl: './lottie.component.html',
  styleUrls: ['./lottie.component.scss'],
})
export class SSRLottieComponent implements OnInit {
  @Input() public width = undefined;
  @Input() public height = undefined;
  @Input() public options = undefined;
  public isBrowser;

  public showAnimation = false;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.showAnimation = true;
    }
  }
}
