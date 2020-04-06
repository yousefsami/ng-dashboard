import { Injectable } from '@angular/core';
import {
  ILocation,
  IUser,
  ISettingsUpdateResponse,
  IContact,
  IGeneralUserResponse,
} from '../definitions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from 'response-type';
import { GetNetworkError } from './common';
import { ConfigurationService } from './configuration.service';

@Injectable()
export class RequestsService {
  constructor(private http: HttpClient, private config: ConfigurationService) {}

  public async DeleteUser(): Promise<IResponse<any>> {
    return await this.http.delete(this.config.API('/api/user')).toPromise();
  }

  public UploadToCloud(file: File) {
    const formData = new FormData();
    formData.append('filename', file.name);
    formData.append('file', file, file.name);

    const headers = new HttpHeaders({ enctype: 'multipart/form-data' });

    return this.http.post(
      this.config.API('/api/ngmedia/upload-direct'),
      formData,
      {
        headers,
        reportProgress: true,
        observe: 'events',
      }
    );
  }

  public async GetContactDetails(): Promise<IResponse<IContact>> {
    const url = this.config.API('/api/contact-details');
    const ref = this.http.get(url).toPromise();
    try {
      const response: IResponse<IContact> = await ref;
      return response;
    } catch (error) {
      if (error.name === 'HttpErrorResponse') {
        return GetNetworkError();
      }
      return error;
    }
  }

  public async UpdateUserProfile(
    user: IUser
  ): Promise<IResponse<ISettingsUpdateResponse>> {
    const ref = this.http
      .post(this.config.API('/api/user/settings'), user)
      .toPromise();
    try {
      const response: IResponse<ISettingsUpdateResponse> = await ref;
      return response;
    } catch (error) {
      if (error.name === 'HttpErrorResponse') {
        return GetNetworkError();
      }
      return error;
    }
  }

  public async GetUserGeneralData(
    token = null
  ): Promise<IResponse<IGeneralUserResponse>> {
    const headers = new HttpHeaders({
      'x-token': token,
    });
    if (token) {
      return await this.http
        .get(this.config.API('/api/user'), { headers })
        .toPromise();
    }
    return await this.http.get(this.config.API('/api/user')).toPromise();
  }

  public async UpdateContactDetails(
    contacts: Array<IContact>
  ): Promise<IResponse<any>> {
    const ref = this.http
      .post(this.config.API('/api/contact-details'), { contacts })
      .toPromise();
    try {
      const response: IResponse<any> = await ref;
      return response;
    } catch (error) {
      if (error.name === 'HttpErrorResponse') {
        return GetNetworkError();
      }
      return error;
    }
  }

  public async GetInvitations(): Promise<IResponse<any>> {
    return await this.http
      .get(this.config.API('/api/user/invitations'))
      .toPromise();
  }

  public async GetServicePackage(id: number) {
    return await this.http
      .get(this.config.API('/api/product/' + id + '?type=service_package'))
      .toPromise();
  }

  public async GetServicePackages() {
    return await this.http
      .get(this.config.API('/api/products?type=service_package'))
      .toPromise();
  }

  public async SetPaymentStatus(
    externalKey: string,
    status: 'confirmed' | 'cancelled'
  ): Promise<IResponse<any>> {
    return await this.http
      .post(this.config.API('/api/payment-status'), {
        external_key: externalKey,
        status,
      })
      .toPromise();
  }

  public async PostInvitation(data): Promise<IResponse<any>> {
    return await this.http
      .post(this.config.API('/api/user/invitation'), data)
      .toPromise();
  }

  public async GetInvitation(id: number): Promise<IResponse<any>> {
    return await this.http
      .get(this.config.API('/api/user/invitation/' + id))
      .toPromise();
  }

  public async GetInvitationAnonymouse(key: string): Promise<IResponse<any>> {
    return await this.http
      .get(this.config.API('/api/user/get-invitation/' + key))
      .toPromise();
  }

  public async RequestPasswordReset(
    username: string
  ): Promise<IResponse<ILocation>> {
    const ref = this.http
      .post(this.config.API('/api/forget-password'), { username })
      .toPromise();
    try {
      const response: IResponse<ILocation> = await ref;
      return response;
    } catch (error) {
      if (error.name === 'HttpErrorResponse') {
        return GetNetworkError();
      }
      return error;
    }
  }

  public async PostProfile(profile: any): Promise<IResponse<any>> {
    return await this.http
      .post(this.config.API('/api/user/settings'), {
        ...profile,
        picture: null,
      })
      .toPromise();
  }

  public async GetPayments(): Promise<IResponse<any>> {
    return await this.http.get(this.config.API('/api/payments')).toPromise();
  }

  public async DeleteTeam(id): Promise<IResponse<any>> {
    return await this.http
      .delete(this.config.API('/api/user/team/' + id))
      .toPromise();
  }

  public async PostTeam(data): Promise<IResponse<any>> {
    return await this.http
      .post(this.config.API('/api/user/team'), data)
      .toPromise();
  }
}
