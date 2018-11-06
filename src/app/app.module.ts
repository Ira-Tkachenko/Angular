import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RestoreFormComponent } from './components/restore-form/restore-form.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

import { UsersService } from './services/users.service';
import { CurrentUserService } from './services/current-user.service';
import { PopupWindowComponent } from './components/popup-window/popup-window.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    LoginPageComponent,
    RestoreFormComponent,
    UserPageComponent,
    UserInfoComponent,
    PopupWindowComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    CurrentUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
