import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import {
  LayoutComponent,
  LoginFormComponent,
  SignupFormComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  TeamRoutesAsUser,
  TeamRoutesAsTeam,
  AccessWithTokenGuard,
  TeamGuardAuth,
} from 'projects/core/src/public_api';
import { ProfileComponent } from 'projects/core/src/lib/team/components/profile/profile.component';
import { DeveloperComponent } from 'projects/core/src/lib/ng5-basic/components/developer/developer.component';
import { JoinByInviteComponent } from 'projects/core/src/lib/team/components/join-by-invite/join-by-invite.component';

const routes: Routes = [
  { path: 'join/:inviteId', component: JoinByInviteComponent },
  {
    component: LayoutComponent,
    path: 'developer',
    children: [
      {
        path: '',
        component: DeveloperComponent,
      },
    ],
  },
  {
    component: LayoutComponent,
    path: '',
    children: [...TeamRoutesAsUser],
  },
  {
    path: ':teamId',
    canActivate: [TeamGuardAuth, AccessWithTokenGuard],
    component: LayoutComponent,
    children: [...TeamRoutesAsTeam],
  },
  {
    component: LayoutComponent,
    path: ':lang',
    children: [
      {
        path: '',
        component: GuideComponent,
      },
      {
        path: 'login',
        component: LoginFormComponent,
      },
      {
        path: 'signup',
        component: SignupFormComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/en',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
