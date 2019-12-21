import { Route } from '@angular/router';

export function AuthLayoutChild(component: any, route: string, options: any = {}): Route {
  return {
    path: route,
    component: component,
    ... options,
  };
}
