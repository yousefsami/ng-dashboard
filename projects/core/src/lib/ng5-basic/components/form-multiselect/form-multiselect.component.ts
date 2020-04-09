import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBaseComponent } from '../FormBaseComponent';

const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormMultiSelectComponent),
  multi: true,
};

@Component({
  selector: 'ng-form-multiselect',
  templateUrl: './form-multiselect.component.html',
  styleUrls: ['./form-multiselect.component.scss'],
  providers: [DEFAULT_VALUE_ACCESSOR],
})
export class FormMultiSelectComponent extends FormBaseComponent {
  @Input() public items: Array<{ id: any; name: any }> = [];

  // Trigger from formbase to send the value back.
  onSelect() {
    this.onChange(this.value);
  }

  public ItemChange(item) {
    console.log(item);
    if (this.value.includes(item.id)) {
      this.value = this.value.filter((t) => t !== t.id);
    } else {
      this.value = [...this.value, item.id];
    }
  }
}
