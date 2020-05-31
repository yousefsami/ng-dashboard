import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RouterService } from './router.service';
import { UserService } from './user.service';

@Injectable()
export class AccessWithTokenGuard implements CanActivate {
  constructor(private user: UserService, private ngdRouter: RouterService) {}

  canActivate(): boolean {
    if (this.user.GetToken()) {
      return true;
    }

    this.ngdRouter.navigateTo('/login');
    return false;
  }
}

@Injectable()
export class NoAccessTokenGuard implements CanActivate {
  constructor(private user: UserService, private ngdRouter: RouterService) {}

  async canActivate(): Promise<boolean> {
    if (this.user.GetToken()) {
      this.ngdRouter.navigateTo('/dashboard');
      return false;
    }

    return true;
  }
}
