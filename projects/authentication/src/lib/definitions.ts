import { IResponse } from 'response-type';

export interface IAuthConfig {
  baseUrl: string;
  provideFacebook?: boolean;
  onSignupSuccess?: (response: IResponse<any>) => void;
  onLoginSuccess?: (response: IResponse<any>) => void;
  afterLoginRedirect?: string | false;
  afterSignupRedirect?: string | false;
  loginDialog?: string;
  signupDialog?: string;
  translations?: any;
}
