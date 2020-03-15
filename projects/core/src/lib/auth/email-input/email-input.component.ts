import { Component, Input } from '@angular/core';
import { error } from '../../ng5-basic/services/common';
import { IResponse } from 'response-type';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngd-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent {
  public error = error;
  @Input() public response: IResponse<any>;
  @Input() public input: FormControl;
  @Input() public formGroup: FormGroup;
}
