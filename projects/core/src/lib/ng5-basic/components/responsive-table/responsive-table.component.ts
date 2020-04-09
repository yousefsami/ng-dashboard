import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { getQuerystring } from '../../services/common';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'ng-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss'],
})
export class ResponsiveTableComponent {
  @Input() public rows = [];
  @Input() public rowRouterLink = null;
  @Input() public actions = [];

  constructor(public router: Router, public ngdRouter: RouterService) {}

  public IsFocusedRow(id: number) {
    if (!id) {
      return false;
    }
    return getQuerystring('focus') === id.toString();
  }

  public ActionKeyup(event: KeyboardEvent, action, row) {
    if (action && action.keyCode && event.keyCode === action.keyCode) {
      action.onClick(row.entity, this.router, this.ngdRouter);
    }
  }
}
