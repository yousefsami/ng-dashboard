import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { IUser } from '../definitions';
import { RouterService } from './router.service';
import { CookiesService } from 'ngx-universal-cookies';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  public CurrentUser: BehaviorSubject<IUser> = new BehaviorSubject(null);

  private token: string;

  constructor(private cookie: CookiesService) {
    try {
      this.CurrentUser.next(
        JSON.parse(localStorage.getItem('userInformation'))
      );
      this.token = JSON.parse(localStorage.getItem('tokenInformation'));
      if (this.cookie.get('token')) {
        this.token = this.cookie.get('token');
      }
    } catch (err) {}
  }

  get UserSnapshot(): IUser {
    return this.CurrentUser.value;
  }

  logout() {
    this.CurrentUser.next(null);
  }

  canActivate(permissions: Array<string>) {
    const user = this.UserSnapshot;
    if (!user.role) {
      user.role = {
        permissions: [],
        id: null,
        title: 'normal',
      };
    }
    if (permissions && permissions.length) {
      for (const key of permissions) {
        const perm = user.role.permissions.find((x) => x && x.key === key);
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
    this.CurrentUser.next(user);
    localStorage.setItem('userInformation', JSON.stringify(user));
  }

  public SetToken(token: string) {
    this.token = token;
    this.cookie.put('token', token);
    localStorage.setItem('tokenInformation', JSON.stringify(token));
  }
  public Revoke() {
    this.SetToken(null);
    this.SetUser(null);
  }
}

@Injectable()
export class UserLoggedInGuard implements CanActivate {
  constructor(private user: UserService, private ngdRouter: RouterService) {}
  canActivate(): boolean {
    if (!this.user.GetToken()) {
      this.ngdRouter.navigateTo('/login');
      return false;
    }
    return true;
  }
}
