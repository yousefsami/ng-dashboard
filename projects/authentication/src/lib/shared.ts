import { IResponse } from 'response-type';

export interface IUserForm {
  email: string;
  password: string;
}

/**
 * Configurates the way that user module works.
 */
export interface NgxUserConfig {
  signupUrl: string;
  signinUrl: string;
  forgetPasswordUrl: string;
}

export interface LoginResponse {
  token: string;
  user: any;
}

export function GetNetworkError (): IResponse<any> {
  return {
    error: {
      code: 0,
      message: 'It seems you are not connected to internet. Please check your connection and try again'
    }
  };
}
export function error (response: IResponse<any>, fieldName: string) {
  if ( ! response || ! response.error || !response.error.errors) {
    return '';
  }
  const $error = response.error.errors.find(x => x.location === fieldName);
  return $error ? $error.message : '';
}
