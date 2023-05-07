import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './shared/component/account/login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './shared/component/account/signup/signup.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './shared/component/profile/profile.component';
import { LeaveCardComponent } from './shared/component/leave-card/leave-card.component';
import { LeaveApplicationComponent } from './shared/component/leave-application/leave-application.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    DashboardComponent,
    ProfileComponent,
    LeaveCardComponent,
    LeaveApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
