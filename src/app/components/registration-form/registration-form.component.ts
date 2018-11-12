import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AgeValidator } from '../../validators/age.validator';
import { DateSlashValidator } from '../../validators/dateSlash.validator';
import { DateSpaceValidator } from '../../validators/dateSpace.validator';
import { DateDashValidator } from '../../validators/dateDash.validator';
import { NameValidator } from '../../validators/name.directive';

import { User } from '../../services/user';
import { CurrentUserService } from '../../services/current-user.service';
import { UsersService } from '../../services/users.service';
//import * as moment from 'moment';

//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
//import { PopupWindowComponent } from '../popup-window/popup-window.component';

//!!!update form for current user!!!
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['../form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  //public show:boolean = false;
  user: User; 
  error: any;
  registrationForm: FormGroup;
  submitName = '';
  submitAge = '';
  submitBirthday = '';
  submitDateOfLogin = '';
  submitDateOfNotification = '';
  submitInformation = '';

  constructor(private fb: FormBuilder,
              private nameValidator: NameValidator,
              private currentUser: CurrentUserService,
              public userService: UsersService,
              //public dialog: MatDialog,
              //public popupWindow: PopupWindowComponent
  ) {}

  ngOnInit() {
    this.user = this.currentUser.getData(); 

    this.registrationForm = this.fb.group({
      name: [this.user.name, {validators: [Validators.required],
        asyncValidators: [this.nameValidator.validate.bind(this.nameValidator)]
      }],
      age: ['', AgeValidator],
      birthday: ['', DateSlashValidator],
      dateOfLogin: ['', DateSpaceValidator],
      dateOfNotification: ['', DateDashValidator],
      information: ['']
    });
  }
  
  update(name: string, age: string, birthday: string, dateOfLogin: string, dateOfNotification: string, information: string) { 
    /*this.show = true;
    this.submitName = name;
    this.submitAge = age; 
    this.submitBirthday = birthday;
    this.submitDateOfLogin = dateOfLogin; 
    this.submitDateOfNotification = dateOfNotification;
    this.submitInformation = information;*/

    const updateUser = {
        id: this.user.id,
        name: name,
        age: age,
        password: this.user.password,
        dateOfBirth: birthday,
        dateOfFirstLogin: dateOfLogin,
        dateOfNextNotification: dateOfNotification,
        information: information,
        role: this.user.role
    }

    this.userService.putUser(this.user.id, updateUser)
      .subscribe((data: User) => {
        this.currentUser.setData(data);
        alert('The information was successfully updated.');
      });

    //this.openPopupWindow();  
  }

  /*openPopupWindow(): void {
    const dialogRef = this.dialog.open(PopupWindowComponent, {
      width: '250px',
      data: {name: this.user.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }*/
  
}
