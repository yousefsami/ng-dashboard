import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'ng-ui-panel-box',
  templateUrl: './ui-panel-box.component.html',
  styleUrls: ['./ui-panel-box.component.scss']
})
export class UiPanelBoxComponent implements OnInit {
  @Input() public title: string;
  @Input() public class: string;
  @HostBinding('class') public hostClass = 'col-md-6 col-sm-6';
  @Input() public description: string;

  ngOnInit() {
    if (this.class) {
      this.hostClass = this.class;
    }
  }
}
