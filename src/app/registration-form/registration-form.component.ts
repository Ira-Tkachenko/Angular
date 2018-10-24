import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AgeValidator } from '../validators/age.validator';
import { DateSlashValidator } from '../validators/dateSlash.validator';
import { DateSpaceValidator } from '../validators/dateSpace.validator';
import { DateDashValidator } from '../validators/dateDash.validator';
import { NameValidator } from '../validators/name.directive';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public show:boolean = false;

  registrationForm: FormGroup;
  submitName = '';
  submitAge = '';
  submitBirthday = '';
  submitDateOfLogin = '';
  submitDateOfNotification = '';

  constructor(private fb: FormBuilder, private nameValidator: NameValidator) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', {
        asyncValidators: [this.nameValidator.validate.bind(this.nameValidator)],
        updateOn: 'blur'
      }],
      age: ['', AgeValidator],
      birthday: ['', DateSlashValidator],
      dateOfLogin: ['', DateSpaceValidator],
      dateOfNotification: ['', DateDashValidator]
    });
  }

  onSubmit() {
    console.warn(this.registrationForm.value);
    //alert(JSON.stringify(this.registrationForm.value));
  }
  
  update(name: string, age: string, birthday: string, dateOfLogin: string, dateOfNotification: string) { 
    this.show = true;

    this.submitName = name;
    this.submitAge = age; 
    this.submitBirthday = birthday;
    this.submitDateOfLogin = dateOfLogin; 
    this.submitDateOfNotification = dateOfNotification;
  }
  
}
