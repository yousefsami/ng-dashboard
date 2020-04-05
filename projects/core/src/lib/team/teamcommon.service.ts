import { Injectable } from '@angular/core';
import { IProduct, IPackage } from './team.definitions';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../ng5-basic/services/configuration.service';

@Injectable({
  providedIn: 'root',
})
export class TeamsCommonService {
  constructor(private http: HttpClient, private config: ConfigurationService) {}

  private API(affix) {
    return this.config.config.api + '/api' + (affix ? '/' + affix : '');
  }

  public async ActivateServicePackage(pack: IProduct<IPackage>) {
    return await this.http
      .post(this.API('initial-payment'), {
        gateway: 'stripe',
        products: [
          {
            quantity: 1,
            productId: pack.id,
          },
        ],
      })
      .toPromise();
  }

  public async DeactivateServicePackage(pack: IProduct<IPackage>) {
    return await this.http
      .post(this.API(`deactivate-product/${pack.id}`), {})
      .toPromise();
  }
}
