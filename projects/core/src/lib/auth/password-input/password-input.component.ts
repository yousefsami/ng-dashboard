import { Component, Input } from '@angular/core';
import { IResponse, FieldError } from 'response-type';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngd-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  public error = FieldError;
  @Input() public response: IResponse<any>;
  @Input() public input: FormControl;
  @Input() public formGroup: FormGroup;

  public passwordVisibility = false;

  togglePassword() {
    this.passwordVisibility = this.passwordVisibility ? false : true;
  }
}
