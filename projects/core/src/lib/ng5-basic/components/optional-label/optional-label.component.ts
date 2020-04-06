import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngd-optional-label',
  templateUrl: './optional-label.component.html',
  styleUrls: ['./optional-label.component.scss'],
})
export class OptionalLabelComponent {
  @Input() public optional = true;
}
