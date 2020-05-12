import {
  Component,
  ViewContainerRef,
  AfterViewInit,
  HostListener,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { ModalDialog, ToastDialog } from '../../definitions';
import { Subject } from 'rxjs';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'ngd-base-toast',
  templateUrl: './base-toast.component.html',
  styleUrls: ['./base-toast.component.scss'],
})
export class BaseToastComponent implements AfterViewInit {
  @Output() public resultChange: EventEmitter<any> = new EventEmitter();
  @Input() public activeModal = false;
  @Input() public appRef: any;
  @Input() public ref: any;
  @Input() public type: 'MODAL' | 'INLINE' = 'MODAL';
  @Input() public content: any;
  @Input() public modal: ToastDialog;
  @Input() public subject: Subject<any> = null;
  public contentRef: any;

  @ViewChild('content', { read: ViewContainerRef, static: false })
  viewContainerRef: ViewContainerRef;

  public vibrate = false;
  public buttons = [];

  @HostListener('window:keyup', ['$event']) public onKeyDown(
    event: KeyboardEvent
  ) {
    if (event.code === 'Escape' && this.type !== 'INLINE') {
      this.Close(event);
    }
  }

  constructor(
    private config: ConfigurationService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
    this.modalAnimation();

    setTimeout(() => {
      this.closeModal('');
    }, this.modal.timeout || 5000);

    if (
      this.modal &&
      this.modal.content &&
      typeof this.modal.content === 'function'
    ) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        this.modal.content
      );
      this.contentRef = this.viewContainerRef.createComponent(factory);
      this.contentRef.instance.pushResult = () => {
        this.closeModal('CONFIRMED');
      };

      if (this.modal.params) {
        this.contentRef.instance.params = this.modal.params;
      }

      this.contentRef.changeDetectorRef.detectChanges();
    }
  }

  public CloseButtonClick() {
    this.closeModal('CANCELED');
  }

  public get textContent() {
    return typeof this.modal.content === 'string' ? this.modal.content : '';
  }

  private modalAnimation() {
    setTimeout(() => {
      this.activeModal = true;
      this.buttons = this.ModalButtons(this.modal);
    }, 1);
  }

  private Close(e: any, type = 'CANCELED') {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.closeModal(type);
    }
  }

  private closeModal(type) {
    let data = {};
    if (this.contentRef && this.contentRef.instance.data) {
      data = this.contentRef.instance.data.value;
    }

    const result = { type, data };
    if (this.subject) {
      this.subject.next(result);
    }
    this.resultChange.emit(result);

    if (this.type === 'INLINE') {
      this.vibrate = true;
      setTimeout(() => {
        this.vibrate = false;
      }, 1000);
    }

    if (this.type === 'MODAL') {
      this.activeModal = false;
      setTimeout(() => {
        this.appRef.detachView(this.ref.hostView);
        this.ref.destroy();
      }, 400);
    }
  }

  public Cancel(e: any) {
    this.Close(e, 'CANCELED');
  }

  public Confirm(e: any) {
    this.Close(e, 'CONFIRMED');
  }

  public ModalButtons(dialog: ModalDialog) {
    if (!dialog || !dialog.type) {
      return [];
    }
    if (!dialog.type || dialog.type === 'CONFIRMATION') {
      return [
        {
          type: 'CONFIRM',
          label: this.config.translate('modal_confirm'),
        },
        {
          type: 'CANCEL',
          label: this.config.translate('modal_cancel'),
        },
      ];
    }
    if (!dialog.type || dialog.type === 'YESNO') {
      return [
        {
          type: 'CONFIRM',
          label: this.config.translate('modal_yes'),
        },
        {
          type: 'CANCEL',
          label: this.config.translate('modal_no'),
        },
      ];
    }

    return [];
  }
}
