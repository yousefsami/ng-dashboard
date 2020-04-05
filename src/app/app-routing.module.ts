import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import {
  LayoutComponent,
  LoginFormComponent,
  SignupFormComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
} from 'projects/core/src/public_api';
import { ProfileComponent } from 'projects/core/src/lib/team/components/profile/profile.component';
import { PackageListComponent } from 'projects/core/src/lib/team/components/package-list/package-list.component';

const routes: Routes = [
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
      {
        path: 'packages',
        component: PackageListComponent,
      },
    ],
  },

  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'signup',
    component: SignupFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
