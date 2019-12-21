import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ng-ui-icon-box',
  templateUrl: './ui-icon-box.component.html',
  styleUrls: ['./ui-icon-box.component.scss']
})
export class UiIconBoxComponent {
  @HostBinding('class') public klass = 'col-md-3 col-6';
  @Input() public title: string;
  @Input() public icon: string;
  @Input() public url: string;
}
