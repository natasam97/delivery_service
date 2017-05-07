import { NgModule } from '@angular/core';

import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { LogoutComponent } from '../components/logout/logout.component';
import { HistoryComponent } from '../components/history/history.component';

import { Routes, RouterModule } from '@angular/router';
import { GuardService } from '../user/guard/guard.service';
import { SenderFormComponent } from '../components/sender-form/sender-form.component';
import { CourierFormComponent } from '../components/courier-form/courier-form.component';

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
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sender',
    component: SenderFormComponent
  },
  {
    path: 'courier',
    component: CourierFormComponent
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
