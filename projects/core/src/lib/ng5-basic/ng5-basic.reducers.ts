
import { activitiesReducer } from './reducers/activity.reducer';
import { notificationsReducer } from './reducers/notifications.reducer';
import { StoreModule } from '@ngrx/store';

export function ng5ReducerGenerator () {
  return StoreModule.forFeature('ng5', {
    activities: activitiesReducer,
    notifications: notificationsReducer,
  });
}
