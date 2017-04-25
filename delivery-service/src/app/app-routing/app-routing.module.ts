import { NgModule } from '@angular/core';

import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { GuardService } from '../user/guard/guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [GuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuardService]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutedComponents = [HomeComponent, RegisterComponent, LoginComponent];
