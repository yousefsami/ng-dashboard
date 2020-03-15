import {
  Component,
  ViewContainerRef,
  OnInit,
  AfterViewInit,
  HostListener,
  Input,
  ComponentFactoryResolver,
  ViewChild
} from '@angular/core';
import { ModalDialog } from '../../definitions';
import { Subject, BehaviorSubject } from 'rxjs';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'ngd-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent implements AfterViewInit {
  @Input() public activeModal = false;
  @Input() public appRef: any;
  @Input() public ref: any;
  @Input() public content: any;
  @Input() public modal: ModalDialog;
  @Input() public subject: Subject<any> = null;
  public contentRef: any;

  @ViewChild('content', { read: ViewContainerRef, static: false })
  viewContainerRef: ViewContainerRef;

  public buttons = [];

  @HostListener('window:keyup', ['$event']) public onKeyDown(
    event: KeyboardEvent
  ) {
    if (event.code === 'Escape') {
      this.Close(event);
    }
  }

  constructor(
    private config: ConfigurationService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
    this.modalAnimation();

    if (this.modal.content && typeof this.modal.content === 'function') {
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        this.modal.content
      );
      this.contentRef = this.viewContainerRef.createComponent(factory);
      this.contentRef.changeDetectorRef.detectChanges();
    }
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
      let data = {};
      if (this.contentRef && this.contentRef.instance.data) {
        data = this.contentRef.instance.data.value;
      }
      this.subject.next({ type, data });
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
    if (!dialog) {
      return [];
    }
    if (!dialog.type || dialog.type === 'CONFIRMATION') {
      return [
        {
          type: 'CONFIRM',
          label: this.config.translate('modal_confirm')
        },
        {
          type: 'CANCEL',
          label: this.config.translate('modal_cancel')
        }
      ];
    }
    if (!dialog.type || dialog.type === 'YESNO') {
      return [
        {
          type: 'CONFIRM',
          label: this.config.translate('modal_yes')
        },
        {
          type: 'CANCEL',
          label: this.config.translate('modal_no')
        }
      ];
    }
  }
}
