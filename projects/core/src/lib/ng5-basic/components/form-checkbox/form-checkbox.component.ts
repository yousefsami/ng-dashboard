import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBaseComponent } from '../FormBaseComponent';

const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormCheckboxComponent),
  multi: true,
};

@Component({
  selector: 'ngd-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
  providers: [DEFAULT_VALUE_ACCESSOR],
})
export class FormCheckboxComponent extends FormBaseComponent {}
