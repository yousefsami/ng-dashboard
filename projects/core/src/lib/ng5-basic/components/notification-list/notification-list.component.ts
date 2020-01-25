import { Component, OnInit, HostListener } from '@angular/core';
import { INotification, Ng5ModuleState } from '../../definitions';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'ng-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  public notificationStatus = false;
  public searchStatus = false;
  public notifications: Array<INotification> = [];
  public notificationsBackup: Array<INotification> = [];

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.notificationStatus) {
      const path =
        event.path ||
        (event.composedPath && event.composedPath()) ||
        this.composedPath(event.target);
      const isTarget = path.filter(
        x => x.id === 'notification-list' || x.id === 'notification-button'
      );
      if (isTarget.length === 0) {
        this.ToggleNotification();
      }
    }
  }
  constructor(private config: ConfigurationService) {}

  ngOnInit() {
    this.config.Notifications.subscribe(notifications => {
      this.notifications = notifications;
      this.notificationsBackup = notifications;
    });
    this.config.NotificationState.subscribe(state => {
      this.notificationStatus = state === 'OPEN' ? true : false;
    });
  }

  ToggleNotification() {
    this.notificationStatus = this.notificationStatus ? false : true;
    if (!this.notificationStatus) {
      this.MarkNotificationsAsRead();
    }
  }

  MarkNotificationsAsRead() {
    let items = this.config.Notifications.value;
    const justSeenItems = [];
    items = items.map(notification => {
      if (notification.$seen !== true) {
        justSeenItems.push(notification);
      }
      return {
        ...notification,
        $seen: true
      };
    });
    this.config.Notifications.next(items);
    this.config.NotificationEvent.next({
      type: 'MARKED_AS_SEEN',
      payload: justSeenItems
    });
  }

  public get NotificationCountNumber(): string {
    const count = this.UserUnseenNotifications.length;
    if (count === 0) {
      return '';
    }
    if (count < 3) {
      return count.toString();
    }
    return `+3`;
  }

  public get UserUnseenNotifications() {
    return this.notifications.filter(t => !t.$seen);
  }

  ToggleSearch() {
    this.searchStatus = this.searchStatus ? false : true;
  }

  filterNotifications(value) {
    const filtered = this.notificationsBackup.filter(
      x => x.message.indexOf(value) > -1 || x.title.indexOf(value) > -1
    );
    this.notifications = filtered.length ? filtered : this.notificationsBackup;
  }

  composedPath(el) {
    const path = [];
    while (el) {
      path.push(el);
      if (el.tagName === 'HTML') {
        path.push(document);
        path.push(window);
        return path;
      }
      el = el.parentElement;
    }
  }
}
