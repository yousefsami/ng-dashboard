import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent {
  @Input() public user = null;
  public display = '';
  constructor() {}

  public name() {
    const user = this.user;
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
