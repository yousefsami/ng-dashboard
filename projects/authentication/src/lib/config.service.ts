import { Injectable, Inject } from '@angular/core';
import { IAuthConfig } from './definitions';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(@Inject('authConfig') public authConfig: IAuthConfig) {}

  public get Config(): IAuthConfig {
    return this.authConfig;
  }
}
