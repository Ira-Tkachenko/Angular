import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { EffectsModule } from '@ngrx/effects';

/*import { reducer as langReducer } from './reducers/language.reducer';
import { reducer as usersReducer } from './reducers/users.reducer';
import { reducer as profileReducer } from './reducers/profile.reduser';
import { UsersEffect } from './effects/users.effect';
import { ProfileEffect } from './effects/profile.effect';*/

//import { MatDialogModule, MatDialog, MatDialogRef  } from '@angular/material/dialog';
//import { MatDialogModule, MatDialogRef } from '@angular/material';
//import { MatNativeDateModule } from '@angular/material';
//import { DemoMaterialModule } from './material-module';


import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RestoreFormComponent } from './components/restore-form/restore-form.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

import { UsersService } from './services/users.service';
import { CurrentUserService } from './services/current-user.service';
import { UserForAdminService } from './services/user-for-admin.service';
import { UserListModule } from './user-list/user-list.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
//import { PopupWindowComponent } from './components/popup-window/popup-window.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    LoginPageComponent,
    RestoreFormComponent,
    UserPageComponent,
    UserInfoComponent,
    AdminPageComponent,
    EditFormComponent,
    AddFormComponent,
    DeleteUserComponent,
    //UserListComponent
    //PopupWindowComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    UserListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
   /*StoreModule.forRoot({
      lang: langReducer,
      users: usersReducer,
      profile: profileReducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([UsersEffect, ProfileEffect])*/
    //MatNativeDateModule,
    //MatDialogModule
    //DemoMaterialModule
  ],
  providers: [
    UsersService,
    CurrentUserService, 
    UserForAdminService,
    //PopupWindowComponent, MatDialogRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
