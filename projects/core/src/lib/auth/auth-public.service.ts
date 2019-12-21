import { Injectable, EventEmitter } from '@angular/core';

export enum AuthEvent {
  TRY_LOGIN = 'TRY_LOGIN',
  LOGIN_FAILED = 'LOGIN_FAILED',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  REVOKE = 'REVOKE',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
}
@Injectable({
  providedIn: 'root'
})
export class AuthPublicService {
  public events: EventEmitter<{ type: AuthEvent; payload?: any }>;
  public translations: EventEmitter<any>;

  constructor() {
    this.events = new EventEmitter();
    this.translations = new EventEmitter();
  }
}
