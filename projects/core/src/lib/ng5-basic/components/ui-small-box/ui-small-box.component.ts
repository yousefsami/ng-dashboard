import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ng-ui-small-box',
  templateUrl: './ui-small-box.component.html',
  styleUrls: ['./ui-small-box.component.scss']
})
export class UiSmallBoxComponent {
  @HostBinding('class') public klass = 'col-md-3 col-6';
  @Input() public title: string;
  @Input() public description: string;
  @Input() public value: string;
}
