import { Component, OnInit } from '@angular/core';
import { IPayment } from '../../team.definitions';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { IInteractiveNote } from '../../../ng5-basic/definitions';

const NoPayments: IInteractiveNote = {
  title: 'no_payments',
  description: 'no_payments_made_yet',
};

@Component({
  selector: 'ng-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent extends NgdBaseComponent implements OnInit {
  public payments: Array<IPayment> = [];
  public note: IInteractiveNote = null;

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

    if (!res.item || !res.items || res.items.length === 0) {
      this.note = NoPayments;
    } else {
      this.note = null;
    }

    this.payments = res.items;
  }
}
