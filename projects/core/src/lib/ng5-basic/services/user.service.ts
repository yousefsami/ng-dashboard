import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { IUser, IAccessKey } from '../definitions';
import { RouterService } from './router.service';
import { CookiesService } from 'ngx-universal-cookies';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  public CurrentUser: BehaviorSubject<IUser> = new BehaviorSubject(null);
  public AccessKeys: BehaviorSubject<IAccessKey[]> = new BehaviorSubject([]);

  private token: string;

  constructor(private cookie: CookiesService) {
    try {
      // this.CurrentUser.next(
      //   JSON.parse(localStorage.getItem('userInformation'))
      // );
      // this.token = JSON.parse(localStorage.getItem('tokenInformation'));
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

  /**
   * @description Checks within user roles, if he has all of the neededPermissions
   * and returns true/false
   */
  canActivateByPermissions(
    neededPermissions: Array<string>,
    teamId: number = null
  ): boolean {
    const user = this.UserSnapshot;

    const permissions = this.GetPermissions(teamId);

    if (permissions.indexOf('TEAM:*') > -1) {
      return true;
    }

    if (!neededPermissions || neededPermissions.length === 0) {
      return true;
    }

    if (!user || !user.roles || user.roles.length === 0) {
      return false;
    }

    for (const perm of neededPermissions) {
      if (permissions.indexOf(perm) === -1) {
        return false;
      }
    }

    return true;
  }

  public GetPermissions(teamId: number): Array<string> {
    if (
      !this.UserSnapshot ||
      !this.UserSnapshot.roles ||
      this.UserSnapshot.roles.length === 0
    ) {
      return [];
    }

    let permissions: Array<string> = [];

    for (const role of this.UserSnapshot.roles) {
      if (role.team === teamId) {
        permissions = [...permissions, ...(role.permissions || [])];
      }
    }

    return permissions;
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

  public InsertAccessKey(accessKey: IAccessKey) {
    this.AccessKeys.next([...this.AccessKeys.value, accessKey]);
  }

  public DeleteAccessKey(accessKey: IAccessKey) {
    this.AccessKeys.next(
      this.AccessKeys.value.filter((t) => t.id !== accessKey.id)
    );
  }

  public UpdateAccessKey(accessKey: IAccessKey) {
    this.AccessKeys.next(
      this.AccessKeys.value.map((t) => {
        if (t.id === accessKey.id) {
          return {
            ...accessKey,
          };
        }
        return t;
      })
    );
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
