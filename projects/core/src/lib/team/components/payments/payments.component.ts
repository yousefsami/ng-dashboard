import { Component, OnInit } from '@angular/core';
import { IPayment } from '../../team.definitions';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';

@Component({
  selector: 'ng-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent extends NgdBaseComponent implements OnInit {
  public payments: Array<IPayment> = [];
  constructor(
    private requests: RequestsService,
    public config: ConfigurationService
  ) {
    super();
  }

  async ngOnInit() {
    const res = await this.StartRequest<IPayment>(() =>
      this.requests.GetPayments()
    );

    this.payments = res.items;
  }
}
