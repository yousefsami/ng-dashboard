import {
  Component,
  OnInit,
  HostBinding,
  forwardRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CurrencyFormat } from '../../services/common';
import { FieldError } from 'response-type';

const CurrencyInputEuro = {
  align: 'left',
  allowNegative: false,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: '€ ',
  suffix: '',
  thousands: ' ',
  nullable: true,
};

const CurrencyInputPLN = {
  align: 'left',
  allowNegative: false,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: 'PLN ',
  suffix: '',
  thousands: ' ',
  nullable: true,
};
const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormCurrencyComponent),
  multi: true,
};
@Component({
  selector: 'ngd-form-currency',
  templateUrl: './form-currency.component.html',
  styleUrls: ['./form-currency.component.scss'],
  providers: [DEFAULT_VALUE_ACCESSOR],
})
export class FormCurrencyComponent implements OnInit, ControlValueAccessor {
  @HostBinding('class') @Input() public class = 'form-group col-sm-6';
  @Output() public valueChange: EventEmitter<{
    amount: number;
    currency: string;
  }> = new EventEmitter(null);
  @Input() public response = null;
  @Input() public label = null;
  @Input() public edit = true;

  public error = FieldError;
  public $currency = 'PLN';
  public get currency() {
    return this.$currency;
  }
  public set currency(value) {
    this.$currency = value;
    this.resetCurr();
  }
  private $amount = null;
  public set amount(value) {
    this.$amount = value;
    this.onInput();
  }
  public get amount() {
    return this.$amount;
  }

  public CurrencyFormat = CurrencyFormat;
  public currencyOptions = CurrencyInputPLN;

  constructor() {}

  ngOnInit() {}

  onInput() {
    this.onChange({ amount: this.amount, currency: this.currency });
  }

  resetCurr() {
    if (this.currency === 'EURO') {
      this.currencyOptions = CurrencyInputEuro;
    }
    if (this.currency === 'PLN') {
      this.currencyOptions = CurrencyInputPLN;
    }
  }

  onChange = (delta: any) => {};

  writeValue(value: any): void {
    if (!value) {
      return;
    }
    this.currency = value.currency;
    this.amount = value.amount;
    this.resetCurr();
  }

  registerOnChange(fn: (v: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {}
}
