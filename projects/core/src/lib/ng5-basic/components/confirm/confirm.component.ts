import { Component, OnInit, HostListener } from '@angular/core';
import { ModalDialog } from '../../definitions';
import { Subject } from 'rxjs';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  public activeModal = false;
  public appRef: any;
  public ref: any;
  public modal: ModalDialog;
  public subject: Subject<any> = null;

  public buttons = [];

  @HostListener('window:keyup', ['$event']) public onKeyDown(
    event: KeyboardEvent
  ) {
    if (event.code === 'Escape') {
      this.Close(event);
      this.subject.next('CANCELED');
    }
  }

  constructor(private config: ConfigurationService) {}

  ngOnInit() {
    this.modalAnimation();
  }

  private modalAnimation() {
    setTimeout(() => {
      this.activeModal = true;
      this.buttons = this.ModalButtons(this.modal);
    }, 1);
  }

  private Close(e: any) {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.activeModal = false;
      setTimeout(() => {
        this.appRef.detachView(this.ref.hostView);
        this.ref.destroy();
      }, 400);
    }
  }

  public Cancel(e: any) {
    this.subject.next('CANCELED');
    this.Close(e);
  }

  public Confirm(e: any) {
    this.subject.next('CONFIRMED');
    this.Close(e);
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
