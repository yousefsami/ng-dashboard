import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { InviteFormComponent } from './components/invite-form/invite-form.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { InvitationsComponent } from './components/invitations/invitations.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentCallbackComponent } from './components/payment-callback/payment-callback.component';
import { PackageListComponent } from './components/package-list/package-list.component';
import { PackageSingleComponent } from './components/package-single/package-single.component';

export const TeamRoutes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'payment-callback',
    component: PaymentCallbackComponent,
  },
  {
    path: 'new-team',
    component: TeamFormComponent,
  },
  {
    path: 'user-invitation/:id',
    component: InviteFormComponent,
  },
  {
    path: 'invite-new-user/:teamId',
    component: InviteFormComponent,
  },
  {
    path: 'invitations/:teamId',
    component: InvitationsComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'packages',
    component: PackageListComponent,
  },
  {
    path: 'packages/:id',
    component: PackageSingleComponent,
  },
];
