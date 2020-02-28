import { Component, OnInit } from '@angular/core';
import {
  ConfigurationService,
  WorkingStates,
  NgDashboardPl,
  NgDashboardEn,
  ConfirmService,
  INotification,
  ModalDialog,
  PageContainerAction
} from 'projects/core/src/public_api';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  public sampleModal: ModalDialog = {
    title: 'Deleting',
    content: 'Delete???? Really?'
  };
  public pageContainerActions: Array<PageContainerAction> = [
    {
      type: 'BUTTON',
      title: 'sampleButton',
      onClick: () => {
        alert('hi');
      }
    },
    {
      type: 'ICON',
      title: 'icon button',
      onClick: () => {
        alert('hi 2');
      }
    },
    {
      type: 'ICON',
      title: 'notifications',
      icon: 'icon-notifications_none',
      onClick: () => {
        alert('hi 3');
      }
    }
  ];
  public sampleModalYes: ModalDialog = {
    title: 'Deleting',
    content: 'Are you sure deleting?',
    type: 'YESNO'
  };
  constructor(
    private config: ConfigurationService,
    public modal: ConfirmService
  ) {}

  ngOnInit() {
    this.config.NotificationEvent.subscribe(event => {
      console.log('Notification event: ', event);
    });
  }

  public clearTeams() {
    this.config.Teams.next([]);
  }

  public addTeams() {
    this.config.Teams.next([
      {
        members: [],
        name: 'Personal team'
      },
      {
        members: [],
        name: `Ali's team`,
        $selected: true
      }
    ]);
    this.config.TeamsConfig.next({
      manageTeams: true,
      manageTeamsText: 'ManageTeams',
      onClick: () => {
        alert('You clicked this. Use angular router to go to teams page');
      }
    });
  }

  public showLoader() {
    WorkingStates.next([
      {
        active: true
      },
      {
        active: true
      }
    ]);
  }

  public hideLoader() {
    WorkingStates.next([]);
  }

  public SingleNotification() {
    const notification: INotification = {
      id: '213123',
      date: new Date(),
      importance: 'IMPORTANT',
      type: 'success',
      message: 'Kitcheb temprature is higher than normal temp',
      title: 'Ali has done something'
    };
    this.config.Notify(notification);
  }

  public AddNotifications() {
    const notifications: Array<INotification> = [
      {
        id: '213123',
        date: new Date(),
        icon: 'icon-comment',
        type: 'success',
        importance: 'NORMAL',
        message: 'Kitcheb temprature is higher than normal temp',
        title: 'Ali has done something'
      },
      {
        date: new Date(),
        icon: 'icon-call_missed',
        importance: 'NORMAL',
        type: 'success',
        message: 'New user has been joined us'
      },
      {
        date: new Date(),
        icon: 'icon-error',
        type: 'success',
        importance: 'NORMAL',
        message: 'All Lights on for 2 days, Called to +98901234567 and answerd'
      },
      {
        date: new Date(),
        icon: 'icon-remove_circle',
        type: 'success',
        importance: 'IMPORTANT',
        message: 'Edited Device: Temrature has edited successfuly'
      }
    ];
    this.config.Notify(notifications);
  }

  public changeLang(lang) {
    if (lang === 'pl') {
      this.config.SetLanguage(lang, NgDashboardPl);
    }
    if (lang === 'en') {
      this.config.SetLanguage(lang, NgDashboardEn);
    }
  }

  public showDialog() {
    this.modal.open(this.sampleModal).subscribe(result => {
      console.log(result);
    });
  }

  public showDialogYes() {
    this.modal.open(this.sampleModalYes).subscribe(result => {
      console.log(result);
    });
  }

  public showMessage() {
    this.config.ShowToast({
      message:
        'This is warning, you see, when the text is longer it will stay longer time to give user time to read',
      type: 'WARNING'
    });
    this.config.ShowToast({
      message: 'This is success',
      type: 'SUCCESS'
    });
    this.config.ShowToast({
      message: 'This is info',
      type: 'INFO'
    });
    this.config.ShowToast({
      message: 'Error',
      type: 'ERROR'
    });
  }
}
