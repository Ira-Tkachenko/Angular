import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RestoreFormComponent } from './components/restore-form/restore-form.component';
//import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
//import { UserInfoComponent } from './components/user-info/user-info.component';

const appRoutes: Routes = [
		{ path: '', redirectTo: '/login', pathMatch: 'full' },
		{ path: 'login', component: LoginPageComponent},
		{ path: 'restore', component: RestoreFormComponent},
		{ path: 'user', component: UserPageComponent},
		//{ path: 'info', component: UserInfoComponent},
		//{ path: 'update', component: RegistrationFormComponent},
		{ path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
