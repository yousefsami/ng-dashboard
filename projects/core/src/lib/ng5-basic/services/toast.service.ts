import {
  Injectable,
  Injector,
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
} from '@angular/core';
import { ModalDialog } from '../definitions';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { BaseModalComponent } from '../components/base-modal/base-modal.component';
import { BaseToastComponent } from '../components/base-toast/base-toast.component';

export const ActiveToastsCount = new BehaviorSubject(0);

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    protected resolver: ComponentFactoryResolver,
    protected appRef: ApplicationRef,
    protected injector: Injector
  ) {}

  open(
    modal: ModalDialog
  ): Observable<{ type: 'CONFIRMED' | 'CANCELED'; data: any }> {
    if (!modal) {
      console.warn('Modal is not defined. add argument');
      return null;
    }
    const componentRef = this.resolver.resolveComponentFactory(
      BaseToastComponent
    );
    const tsc = componentRef.create(this.injector);
    tsc.instance.ref = tsc;
    tsc.instance.appRef = this.appRef;
    tsc.instance.subject = new Subject<any>();
    tsc.instance.modal = modal;
    this.appRef.attachView(tsc.hostView);
    const domElem = (tsc.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    ActiveToastsCount.next(ActiveToastsCount.value + 1);
    const result = tsc.instance.subject.asObservable();
    const $interalSub = result.subscribe((x) => {
      ActiveToastsCount.next(ActiveToastsCount.value - 1);
      $interalSub.unsubscribe();
    });
    return result;
  }
}
