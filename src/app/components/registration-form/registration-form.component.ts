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
import { TranslateService } from '@ngx-translate/core';
//import * as moment from 'moment';

//!!!update form for current user!!!
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['../form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  user: User; 
  error: any;
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
              private nameValidator: NameValidator,
              private currentUser: CurrentUserService,
              private userService: UsersService,
              private translate: TranslateService,
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
        this.translate.get('The information was successfully updated.').subscribe((res: string) => {
          alert(res);
        });
      });
  }
}
