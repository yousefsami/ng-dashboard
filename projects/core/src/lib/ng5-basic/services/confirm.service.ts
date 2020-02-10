import {
  Injectable,
  Injector,
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef
} from '@angular/core';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { ModalDialog } from '../definitions';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  open(modal: ModalDialog): Observable<'CONFIRMED' | 'CANCELED'> {
    if (!modal) {
      console.warn('Modal is not defined. add argument');
      return null;
    }
    const componentRef = this.resolver.resolveComponentFactory(
      ConfirmComponent
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

    return tsc.instance.subject.asObservable();
  }
}
