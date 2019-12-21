import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-window-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() public level = '';
  public isLow = false;
  public isHigh = false;
  constructor() {}

  ngOnInit() {}
}
