import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IInvitationData } from '../../team.definitions';
import { CookiesService } from 'ngx-universal-cookies';
import { NgdBaseComponent } from '../../../ng5-basic/services/ngd-base.component';
import { RequestsService } from '../../../ng5-basic/services/requests.service';
import { RouterService } from '../../../ng5-basic/services/router.service';
import { getQuerystring } from '../../../ng5-basic/services/common';
import { UserFlowService } from '../../../ng5-basic/services/userflow.service';

@Component({
  selector: 'ng-join-by-invite',
  templateUrl: './join-by-invite.component.html',
  styleUrls: ['./join-by-invite.component.scss'],
})
export class JoinByInviteComponent extends NgdBaseComponent implements OnInit {
  public invitation: IInvitationData;

  constructor(
    private title: Title,
    private requests: RequestsService,
    private userflow: UserFlowService,
    private ngdRouter: RouterService,
    private router: Router,
    private route: ActivatedRoute,
    private cookie: CookiesService
  ) {
    super();
  }

  public async AcceptInvite() {
    const invite = this.route.snapshot.params.inviteId;

    if (!invite) {
      return;
    }
    const res = await this.StartSingleRequest<any>(() =>
      this.requests.LoginByInviteKey(invite)
    );

    if (!res.item) {
      return;
    }

    const { item } = res;
    if (item.token) {
      this.cookie.put('token', item.token);
      this.userflow.WriteGeneralInformation(item);

      let to = getQuerystring('to');
      if (to) {
        to = decodeURIComponent(to);
        this.router.navigateByUrl(to);
      } else {
        this.ngdRouter.navigateTo('/dashboard');
      }
    }
  }

  private async GetInviteInfo(key: string) {
    const res = await this.StartSingleRequest<IInvitationData>(() =>
      this.requests.GetInvitationAnonymouse(key)
    );

    if (res.item) {
      this.invitation = res.item;
    }
  }

  ngOnInit() {
    this.title.setTitle('Join your team in taxopit');
    this.GetInviteInfo(this.route.snapshot.params.inviteId);
  }
}
