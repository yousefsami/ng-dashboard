import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-toolbar',
  templateUrl: './simple-toolbar.component.html',
  styleUrls: ['./simple-toolbar.component.scss']
})
export class SimpleToolbarComponent implements OnInit {
  @Input() public count = 0;
  constructor() {}

  ngOnInit() {}
}
