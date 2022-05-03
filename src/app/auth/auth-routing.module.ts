import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: 'sign-in', // child route path
        component: SignInComponent, // child route component that the router renders
      }, 
      {
        path: 'reset-password', // child route path
        component: ResetPasswordComponent, // child route component that the router renders
      }, 
      {
        path: 'sign-up', // child route path
        component: SignUpComponent, // child route component that the router renders
      },  
      { path: '',   redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
