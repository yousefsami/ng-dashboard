import { Action } from '../definitions';
import { UpdateOrPrepend } from '../services/common';

export function activitiesReducer (state = [], action: Action) {
  switch (action.type) {
    case 'RESET':
      return [];
    case 'UPDATE_ACTIVITY':
      return UpdateOrPrepend(action.payload , state, 'id');
  }
  return state;
}
