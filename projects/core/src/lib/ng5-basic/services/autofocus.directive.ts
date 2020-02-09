import { Directive, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[ngdAutoFocus]'
})
export class AutofocusDirective implements AfterContentInit {
  constructor(private el: ElementRef) {}

  ngAfterContentInit(): void {
    const input: HTMLInputElement = this.el.nativeElement as HTMLInputElement;
    if (input.focus) {
      input.focus();
    }
    if (input.select) {
      input.select();
    }
  }
}
