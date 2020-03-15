import { Component, OnInit, Input } from '@angular/core';
import { IWorkingState } from '../../definitions';

@Component({
  selector: 'ng-window-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() public worker: IWorkingState;

  constructor() {}

  ngOnInit() {}
}
