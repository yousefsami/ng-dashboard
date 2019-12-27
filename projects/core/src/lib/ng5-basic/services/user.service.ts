import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { IUser } from '../definitions';
import { PermissionsService } from './permissions.service';
@Injectable()
export class UserService {
  private user: IUser;
  private token: string;
  constructor(private permissions: PermissionsService) {
    try {
      this.user = JSON.parse(localStorage.getItem('userInformation'));
      this.token = JSON.parse(localStorage.getItem('tokenInformation'));
    } catch (err) {}
  }
  get User(): IUser {
    return this.user;
  }

  logout() {
    this.user = null;
  }

  canActivate(permissions: Array<string>) {
    const user = this.User;
    if (!user.role) {
      user.role = {
        permissions: [],
        id: null,
        title: 'normal'
      };
    }
    if (permissions && permissions.length) {
      for (const key of permissions) {
        const perm = user.role.permissions.find(x => x && x.key === key);
        if (!perm) {
          return false;
        }
      }
    }
    return true;
  }

  public GetToken() {
    return this.token || '';
  }
  public SetUser(user: IUser) {
    this.user = user;
    localStorage.setItem('userInformation', JSON.stringify(user));
  }
  public SetToken(token: string) {
    this.token = token;
    localStorage.setItem('tokenInformation', JSON.stringify(token));
  }
  public Revoke() {
    this.SetToken(null);
    this.SetUser(null);
  }
}

@Injectable()
export class UserLoggedInGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}
  canActivate(): boolean {
    if (!this.user.GetToken()) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
