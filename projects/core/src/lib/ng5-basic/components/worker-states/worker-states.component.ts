import { Component, OnInit, OnDestroy } from '@angular/core';
import { IWorkingState } from '../../definitions';
import { Subscription } from 'rxjs';
import { WorkingStates } from '../../services/common';

@Component({
  selector: 'ngd-worker-states',
  templateUrl: './worker-states.component.html',
  styleUrls: ['./worker-states.component.scss'],
})
export class WorkerStatesComponent implements OnInit, OnDestroy {
  private sub: Subscription = null;
  public workers: Array<IWorkingState> = [];

  constructor() {}

  ngOnDestroy() {
    if (this.sub.unsubscribe) {
      this.sub.unsubscribe();
    }
  }

  ngOnInit() {
    this.sub = WorkingStates.subscribe((t) => {
      this.workers = t;
    });
  }
}
