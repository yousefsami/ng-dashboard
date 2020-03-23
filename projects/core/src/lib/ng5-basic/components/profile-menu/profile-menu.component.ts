import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../definitions';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'ng-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent {
  public display = '';
  constructor(public user: UserService, public ngdRouter: RouterService) {}

  public name(user: IUser) {
    if (!user) {
      return 'GU';
    }
    if (user.firstname && user.lastname) {
      return `${user.firstname.substr(0, 1)}${user.lastname.substr(0, 1)}`;
    }
    if (user.firstname) {
      return `${user.firstname.substr(0, 2)}`;
    }
    if (user.lastname) {
      return `${user.lastname.substr(0, 2)}`;
    }
    return user.email.substr(0, 2);
  }
}
