import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBaseComponent } from '../FormBaseComponent';

export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormTextComponent),
  multi: true,
};

@Component({
  selector: 'ngd-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.scss'],
  providers: [DEFAULT_VALUE_ACCESSOR],
})
export class FormTextComponent extends FormBaseComponent {}
