import { Component, Output, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FieldError } from 'response-type';

@Component({
  selector: 'ngd-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.scss'],
})
export class BugReportComponent implements OnInit, OnDestroy {
  public error = FieldError;
  @Output() public data: BehaviorSubject<any> = new BehaviorSubject(null);
  public subscribe: Subscription = null;

  public form = new FormGroup({
    content: new FormControl(),
  });

  ngOnInit() {
    this.subscribe = this.form.valueChanges.subscribe((data) => {
      this.data.next({
        form: data,
        route: {
          href: window.location.href,
        },
      });
    });
  }

  ngOnDestroy() {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }
}
