import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBaseComponent } from '../FormBaseComponent';

const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormSelectComponent),
  multi: true,
};

@Component({
  selector: 'ngd-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
  providers: [DEFAULT_VALUE_ACCESSOR],
})
export class FormSelectComponent extends FormBaseComponent {
  @Input() public items = [];

  public itemValue(itemId) {
    const item = this.items.find((t) => t.value === itemId);

    if (item) {
      return item.label;
    }
    return null;
  }
}
