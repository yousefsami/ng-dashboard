import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import {
  LayoutComponent,
  LoginFormComponent,
  SignupFormComponent
} from 'projects/core/src/public_api';
import { ToastaModule } from 'ngx-toasta';

const routes: Routes = [
  {
    component: LayoutComponent,
    path: '',
    children: [
      {
        path: '',
        component: GuideComponent
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
  imports: [RouterModule.forRoot(routes), ToastaModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {}
