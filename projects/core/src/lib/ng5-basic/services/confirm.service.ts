import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector
} from '@angular/core';
import { ModalService } from './modal.service';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService extends ModalService {
  constructor(
    protected resolver: ComponentFactoryResolver,
    protected appRef: ApplicationRef,
    protected injector: Injector,
    protected config: ConfigurationService
  ) {
    super(resolver, appRef, injector);
  }
  /**
   * Opens a dialog, and if it will be confirmed, it will call the callback
   * @param content string or angular component
   * @param callback function which will be called if dialog is confirmed
   * @param params translation params
   */
  public simpleConfirm(content, callback: () => void, params: any = {}) {
    this.open({
      content: this.config.translate(content, params)
    }).subscribe(async ({ type }) => {
      if (type !== 'CONFIRMED') {
        return;
      }
      callback();
    });
  }
}
