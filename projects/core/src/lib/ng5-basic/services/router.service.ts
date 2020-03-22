import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(private router: Router) {}

  public navigateTo(path: string) {
    const to = path;
    this.router.navigateByUrl(to);
  }

  public routerLink(path: string = ''): string {
    return path;
  }
}
