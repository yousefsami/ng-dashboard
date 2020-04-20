import { Component, OnInit } from '@angular/core';
import { IPayment } from '../../team.definitions';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import {
  IInteractiveNote,
  IResponsiveTableAction,
  IResponsiveTableRow,
} from '../../../ng5-basic/definitions';
import { RouterService } from '../../../ng5-basic/services/router.service';
import { CurrencyFormat, DateFormat } from '../../../ng5-basic/services/common';

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
  public rows: IResponsiveTableRow[] = [];
  public actions: IResponsiveTableAction[] = [];

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

    if (!res.items || res.items.length === 0) {
      this.note = NoPayments;
    } else {
      this.note = null;
    }
    this.rows = this.RolesToRows(res.items);
    this.payments = res.items;
  }

  public RolesToRows(payments: IPayment[]): IResponsiveTableRow[] {
    return payments.map((payment) => {
      return {
        title: CurrencyFormat(payment.amount, payment.currency),
        entity: payment,
        cells: [
          {
            label: this.config.translate('payment_date'),
            value: DateFormat(payment.createdAt),
          },
          {
            label: this.config.translate('payment_status'),
            value: payment.status,
          },
        ],
      };
    });
  }
}
