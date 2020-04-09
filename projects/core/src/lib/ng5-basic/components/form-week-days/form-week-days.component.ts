import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBaseComponent } from '../FormBaseComponent';

const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormWeekDaysComponent),
  multi: true,
};
function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
@Component({
  selector: 'ngd-form-week-days',
  templateUrl: './form-week-days.component.html',
  styleUrls: ['./form-week-days.component.scss'],
  providers: [DEFAULT_VALUE_ACCESSOR],
})
export class FormWeekDaysComponent extends FormBaseComponent {
  @Input() public items = [];

  public saturday = false;
  public sunday = false;
  public monday = false;
  public tuesday = false;
  public wednesday = false;
  public thursday = false;
  public friday = false;

  public itemValue(itemId) {
    const item = this.items.find((t) => t.value === itemId);

    if (item) {
      return item.label;
    }
    return null;
  }

  public get SelectedLabel() {
    const items = [];
    const val = this.Val;
    const keys = Object.keys(val);
    for (const key of keys) {
      if (val[key]) {
        items.push(capitalizeFirstLetter(key));
      }
    }
    return items.join(', ');
  }

  public get Val() {
    return {
      saturday: this.saturday,
      sunday: this.sunday,
      monday: this.monday,
      tuesday: this.tuesday,
      wednesday: this.wednesday,
      thursday: this.thursday,
      friday: this.friday,
    };
  }

  onCheck(value, field) {
    const val = this.Val;
    val[field] = value;
    this.onChange(val);
  }
  writeValue(value: any): void {
    if (!value) {
      return;
    }

    this.saturday = value.saturday;
    this.sunday = value.sunday;
    this.monday = value.monday;
    this.tuesday = value.tuesday;
    this.wednesday = value.wednesday;
    this.thursday = value.thursday;
    this.friday = value.friday;
  }
}
