import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list.component';
import { UserChosenComponent } from './user-chosen/user-chosen.component';
import { UserDropdownListComponent } from './user-dropdown-list/user-dropdown-list.component';
import { UserDropdownItemComponent } from './user-dropdown-item/user-dropdown-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
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
