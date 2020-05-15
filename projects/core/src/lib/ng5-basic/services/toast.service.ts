import {
  Injectable,
  Injector,
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
} from '@angular/core';
import { ToastDialog } from '../definitions';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { BaseToastComponent } from '../components/base-toast/base-toast.component';

export const ActiveToastsCount = new BehaviorSubject(0);

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private activeModals = [];
  private modalQueue: Array<ToastDialog> = [];

  constructor(
    protected resolver: ComponentFactoryResolver,
    protected appRef: ApplicationRef,
    protected injector: Injector
  ) {}

  open(
    modal: ToastDialog
  ): Observable<{ type: 'CONFIRMED' | 'CANCELED'; data: any }> {
    if (this.activeModals.length === 0) {
      return this.insertDialog(modal);
    }

    this.modalQueue = [...this.modalQueue, modal];
  }

  insertDialog(
    modal: ToastDialog
  ): Observable<{ type: 'CONFIRMED' | 'CANCELED'; data: any }> {
    if (!modal) {
      console.warn('Modal is not defined. add argument');
      return null;
    }
    const componentRef = this.resolver.resolveComponentFactory(
      BaseToastComponent
    );

    const tsc = componentRef.create(this.injector);
    this.activeModals = [...this.activeModals, tsc];
    tsc.instance.dialogId = `${Math.random()}`;
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
      this.activeModals = this.activeModals.filter(
        (item) => item.instance.dialogId !== tsc.instance.dialogId
      );

      if (this.activeModals.length === 0 && this.modalQueue.length > 0) {
        this.open(this.modalQueue[0]);
        this.modalQueue = this.modalQueue.filter((t, i) => i > 0);
      }

      ActiveToastsCount.next(ActiveToastsCount.value - 1);
      $interalSub.unsubscribe();
    });
    return result;
  }
}
