import { Component, OnInit } from '@angular/core';
import {
  ConfigurationService,
  ModalService,
  ModalDialog,
  NgdBaseComponent,
} from 'projects/core/src/public_api';
import { DayPickerComponent } from 'projects/core/src/lib/ng5-basic/components/day-picker/day-picker.component';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent extends NgdBaseComponent implements OnInit {
  public sampleModal: ModalDialog = {
    title: 'Deleting',
    content: 'Delete???? Really?',
  };

  public dayPickerModal: ModalDialog = {
    content: DayPickerComponent,
    title: 'Select the day',
    description: 'Select the days that you want to transactions repeat.',
    params: { day: 5 },
  };

  public dayPickerModalMonth: ModalDialog = {
    content: DayPickerComponent,
    title: 'Select the day and month',
    description: 'Select the days that you want to transactions repeat.',
    params: { day: 5, month: 12, selectMonth: true },
  };

  public dayPickerModalHighlight: ModalDialog = {
    content: DayPickerComponent,
    title: 'Select the day',
    description: 'Select the days that you want to transactions repeat.',
    params: { day: 5, class: 'preset-highlight-end-of-month' },
  };

  public sampleModalYes: ModalDialog = {
    title: 'Deleting',
    content: 'Are you sure deleting?',
    type: 'YESNO',
  };

  constructor(public config: ConfigurationService, public modal: ModalService) {
    super();
  }

  ngOnInit() {
    this.config.NotificationEvent.subscribe((event) => {
      console.log('Notification event: ', event);
    });

    this.SetInteractiveButtons([
      {
        icon: 'icon-info',
        id: 'interactive-icon-info',
        title: 'info',
        tooltip: 'Also it can have tool tip',
        key: 'info_btn',
        onPress: () => {
          alert(
            'Wow! You are now using interactive buttons! see app.module.ts for more info'
          );
        },
        keyboardShortcut: 'Enter',
      },
    ]);
  }

  public showDialog() {
    this.modal.open(this.sampleModal).subscribe((result) => {
      console.log(result);
    });
  }

  public showDayPicker(day = 1) {
    this.modal
      .open({ ...this.dayPickerModal, params: { day } })
      .subscribe((result) => {
        console.log(result);
      });
  }

  public showDialogYes() {
    this.modal.open(this.sampleModalYes).subscribe((result) => {
      console.log(result);
    });
  }
}
