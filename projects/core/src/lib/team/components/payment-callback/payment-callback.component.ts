import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IInteractiveNote } from '../../../ng5-basic/definitions';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { ConfigurationService } from '../../../ng5-basic/services/configuration.service';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';

const cancelled: IInteractiveNote = {
  title: 'Payment cancelled',
  type: 'WARNING',
  animation: 'warning',
  description: `You have cancelled the payment.
    Please remember your service won't be active until payment has successfully done`,
};

const successful: IInteractiveNote = {
  title: 'Payment successful',
  type: 'INFO',
  animation: 'success',
  description: 'Your payment has successfully done',
};

const unknown: IInteractiveNote = {
  title: 'Something went wrong',
  type: 'INFO',
  animation: 'warning',
  description:
    'Something unordinary happened in the payment. Do not worry, we will fix it soon and contact you. You can contact us as well.',
};

@Component({
  selector: 'ng-payment-callback',
  templateUrl: './payment-callback.component.html',
  styleUrls: ['./payment-callback.component.scss'],
})
export class PaymentCallbackComponent extends NgdBaseComponent
  implements OnInit {
  public note: IInteractiveNote = null;
  constructor(
    private requests: RequestsService,
    private route: ActivatedRoute,
    public config: ConfigurationService
  ) {
    super();
  }

  ngOnInit() {
    const params = this.route.snapshot.queryParams;

    if (params.status === 'confirmed') {
      this.note = successful;
      this.StartRequest(() =>
        this.requests.SetPaymentStatus(params.session_id, 'confirmed')
      );
      return;
    }
    if (params.status === 'cancelled') {
      this.note = cancelled;
      this.StartRequest(() =>
        this.requests.SetPaymentStatus(params.session_id, 'cancelled')
      );
      return;
    }
    this.note = unknown;
  }
}
