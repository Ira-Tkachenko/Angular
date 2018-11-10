import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from '../../user-list/user-list.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LoginPageComponent } from '../../pages/login-page/login-page.component';

@NgModule({
  imports: [
  	CommonModule,
    UserListComponent,
    LoginFormComponent
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class LoginPageModule {
}
