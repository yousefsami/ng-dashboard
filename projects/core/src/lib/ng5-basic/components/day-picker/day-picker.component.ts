import {
  Component,
  Output,
  OnInit,
  OnDestroy,
  ViewChildren,
  QueryList,
  AfterContentInit,
  ElementRef,
  Input,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { error, IsMobile } from '../../services/common';
import { BehaviorSubject, Subscription, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { DayPickerOption } from '../../definitions';

let months = [
  {
    label: 'January',
    shortLabel: 'Jan',
    id: 1,
  },
  {
    label: 'February',
    shortLabel: 'Feb',
    id: 2,
  },
  {
    label: 'March',
    shortLabel: 'Mar',
    id: 3,
  },
  {
    label: 'April',
    shortLabel: 'Apr',
    id: 4,
  },
  {
    label: 'May',
    shortLabel: 'Ma',
    id: 5,
  },
  {
    label: 'June',
    shortLabel: 'Jun',
    id: 6,
  },
  {
    label: 'July',
    shortLabel: 'Jul',
    id: 7,
  },
  {
    label: 'August',
    shortLabel: 'Aug',
    id: 8,
  },
  {
    label: 'September',
    shortLabel: 'Sep',
    id: 9,
  },
  {
    label: 'October',
    shortLabel: 'Oct',
    id: 10,
  },
  {
    label: 'November',
    shortLabel: 'Nov',
    id: 11,
  },
  {
    label: 'December',
    shortLabel: 'Dec',
    id: 12,
  },
];

@Component({
  selector: 'ngd-day-picker',
  templateUrl: './day-picker.component.html',
  styleUrls: ['./day-picker.component.scss'],
})
export class DayPickerComponent implements OnInit, OnDestroy, AfterContentInit {
  @ViewChildren('dayButton') buttons: QueryList<ElementRef>;
  @Input() public params: DayPickerOption = {
    day: 1,
    month: 1,
    selectMonth: false,
  };

  public error = error;
  public days = Array.from(new Array(31)).map((t, index) => index + 1);
  public months = months;

  @Output() public data: BehaviorSubject<any> = new BehaviorSubject(null);
  public subscribe: Subscription = null;

  public form = new FormGroup({
    day: new FormControl(1),
    month: new FormControl(1),
  });

  ngOnInit() {
    this.subscribe = this.form.valueChanges.subscribe((data) => {
      this.data.next(data);
    });
  }

  public pushResult() {
    // This function will be replaced by basemodal
  }

  ngAfterContentInit() {
    of(null)
      .pipe(
        delay(0),
        tap(() => {
          if (this.params.day) {
            this.form.patchValue({
              day: this.params.day,
              month: this.params.month,
            });
          }
        }),
        tap(() =>
          this.buttons.toArray()[this.form.value.day - 1].nativeElement.focus()
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }

  public dayButtonDBLClick(day: number) {
    this.form.patchValue({ day });
    this.pushResult();
  }

  public dayButtonClick(day: number, event) {
    const isByKeyboardEnter = event.detail === 0;

    if (day === this.form.value.day && isByKeyboardEnter) {
      this.pushResult();
    }

    this.form.patchValue({ day });
  }

  public monthButtonClick(month: number, event) {
    const isByKeyboardEnter = event.detail === 0;

    if (month === this.form.value.month && isByKeyboardEnter) {
      this.pushResult();
    }

    this.form.patchValue({ month });
  }

  public monthButtonDBLClick(month: number) {
    this.form.patchValue({ month });
    this.pushResult();
  }
}
