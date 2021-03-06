import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MapsComponent } from './components/maps/maps.component';
import { HistoryComponent } from './components/history/history.component';
import { CourierComponent } from './components/courier/courier.component';
import { SenderComponent } from './components/sender/sender.component';

import { UserService } from './user/user.service';
import { AuthService } from './user/auth/auth.service';
import { GuardService } from './user/guard/guard.service';

import { AgmCoreModule } from '@agm/core';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule, RoutedComponents } from './app-routing/app-routing.module';
import { LogoutComponent } from './components/logout/logout.component';
import { SenderFormComponent } from './components/sender-form/sender-form.component';
import { CourierFormComponent } from './components/courier-form/courier-form.component';
import { CourierService } from "./services/courier.service";
import { SenderService } from "./services/sender.service";
import { GoogleService } from "./services/google.service";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MapsComponent,
    HistoryComponent,
    CourierComponent,
    SenderComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RoutedComponents,
    LogoutComponent,
    SenderFormComponent,
    CourierFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkQ2qaepxFLi7zbCG4_1P13QmxzN3n-KM'
    })
  ],
  providers: [
    UserService,
    AuthService,
    GuardService,
    SenderService,
    CourierService,
    GoogleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
