import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { InviteFormComponent } from './components/invite-form/invite-form.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentCallbackComponent } from './components/payment-callback/payment-callback.component';
import { PackageListComponent } from './components/package-list/package-list.component';
import { PackageSingleComponent } from './components/package-single/package-single.component';
import { RoleListComponent } from '../ng5-basic/components/role-list/role-list.component';
import { RoleFormComponent } from '../ng5-basic/components/role-form/role-form.component';
import { AccessKeyFormComponent } from './components/access-key-form/access-key-form.component';
import { AccessKeysComponent } from './components/access-keys/access-keys.component';

export const TeamRoutesAsUser: Routes = [
  {
    path: 'new-access-key',
    component: AccessKeyFormComponent,
  },
  {
    path: 'access-key/:id',
    component: AccessKeyFormComponent,
  },
  {
    path: 'access-keys',
    component: AccessKeysComponent,
  },
  {
    path: 'invite-new-user',
    component: InviteFormComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },

  {
    path: 'new-team',
    component: TeamFormComponent,
  },

  {
    path: 'team/:id',
    component: TeamFormComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },
];

export const TeamRoutesAsTeam: Routes = [
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'payment-callback',
    component: PaymentCallbackComponent,
  },
  {
    path: 'user-invitation/:id',
    component: InviteFormComponent,
  },

  {
    path: 'packages',
    component: PackageListComponent,
  },
  {
    path: 'packages/:id',
    component: PackageSingleComponent,
  },
  {
    path: 'roles',
    component: RoleListComponent,
  },
  {
    path: 'new-role',
    component: RoleFormComponent,
  },
  {
    path: 'role/:id',
    component: RoleFormComponent,
  },
];

export const TeamRoutes: Routes = [...TeamRoutesAsTeam, ...TeamRoutesAsUser];
