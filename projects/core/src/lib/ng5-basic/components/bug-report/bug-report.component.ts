import { Component, Output, OnInit, OnDestroy } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';
import { FormGroup, FormControl } from '@angular/forms';
import { error } from '../../services/common';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngd-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.scss']
})
export class BugReportComponent implements OnInit, OnDestroy {
  public error = error;
  @Output() public data: BehaviorSubject<any> = new BehaviorSubject(null);
  public subscribe: Subscription = null;

  public form = new FormGroup({
    content: new FormControl()
  });

  ngOnInit() {
    this.subscribe = this.form.valueChanges.subscribe(data => {
      this.data.next({
        form: data,
        route: {
          href: window.location.href
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }
}
