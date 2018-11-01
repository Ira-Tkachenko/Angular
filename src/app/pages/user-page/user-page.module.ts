import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationFormComponent } from '../../components/registration-form/registration-form.component';
import { UserInfoComponent } from '../../components/user-info/user-info.component';
import { UserPageComponent } from '../../pages/user-page/user-page.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationFormComponent,
    UserInfoComponent
  ],
  declarations: [
    UserPageComponent
  ]
})
export class UserPageModule {
}
