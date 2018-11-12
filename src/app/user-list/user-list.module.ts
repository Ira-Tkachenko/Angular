import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list.component';
import { UserChosenComponent } from './user-chosen/user-chosen.component';
import { UserDropdownListComponent } from './user-dropdown-list/user-dropdown-list.component';
import { UserDropdownItemComponent } from './user-dropdown-item/user-dropdown-item.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  declarations: [
  	UserListComponent, 
  	UserChosenComponent, 
  	UserDropdownListComponent, 
  	UserDropdownItemComponent
  ],
  providers: [
  ],
  exports: [UserListComponent]
})
export class UserListModule { }
