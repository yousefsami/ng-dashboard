import { Component, OnInit } from '@angular/core';
import {
  ConfigurationService,
  ModalService,
  ToastService,
  NgdBaseComponent,
  ToastDialog,
} from 'projects/core/src/public_api';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastsComponent extends NgdBaseComponent implements OnInit {
  public sampleModal: ToastDialog = {
    content: 'Your data has been removed (just kidding)',
    type: 'NOTIFY',
    status: 'SUCCESS',
    timeout: 1000000,
  };

  constructor(
    public config: ConfigurationService,
    public modal: ModalService,
    public toast: ToastService
  ) {
    super();
  }

  ngOnInit() {}

  public showDialog() {
    this.toast.open(this.sampleModal).subscribe((result) => {
      console.log(result);
    });
  }
}
