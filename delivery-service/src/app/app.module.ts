import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { HistoryComponent } from './history/history.component';
import { CourierComponent } from './courier/courier.component';
import { SenderComponent } from './sender/sender.component';

import { UserService } from './user/user.service';
import { AuthService } from './user/auth/auth.service';
import { GuardService } from './user/guard/guard.service';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MapsComponent,
    HistoryComponent,
    CourierComponent,
    SenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkQ2qaepxFLi7zbCG4_1P13QmxzN3n-KM'
    })
  ],
  providers: [
    UserService,
    AuthService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
