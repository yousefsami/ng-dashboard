import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import {
  LayoutComponent,
  LoginFormComponent,
  SignupFormComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent
} from 'projects/core/src/public_api';

const routes: Routes = [
  {
    component: LayoutComponent,
    path: ':lang',
    children: [
      {
        path: '',
        component: GuideComponent
      },
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: 'signup',
        component: SignupFormComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'signup',
    component: SignupFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
