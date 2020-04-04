import { Route } from '@angular/router';

export function AuthLayoutChild(
  component: any,
  route: string,
  options: any = {}
): Route {
  return {
    path: route,
    component,
    ...options,
  };
}

export function CopyToClipboard(val: string) {
  const selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = val;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
  document.body.removeChild(selBox);
}
