import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AgeValidator } from '../../validators/age.validator';
import { DateSlashValidator } from '../../validators/dateSlash.validator';
import { DateSpaceValidator } from '../../validators/dateSpace.validator';
import { DateDashValidator } from '../../validators/dateDash.validator';
import { NameValidator } from '../../validators/name.directive';
import { PasswordValidator } from '../../validators/password.validator';

import { User } from '../../services/user';
import { UsersService } from '../../services/users.service';
import { CurrentUserService } from '../../services/current-user.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['../form.component.scss']
})
export class AddFormComponent implements OnInit {
  user: User; 
  addForm: FormGroup;

  constructor(private fb: FormBuilder,
              private nameValidator: NameValidator,
              public userService: UsersService,
              private currentUser: CurrentUserService,
              public translate: TranslateService
  ) {}

  ngOnInit() {  
    this.addForm = this.fb.group({
      name: ['', {validators: [Validators.required],
        asyncValidators: [this.nameValidator.validate.bind(this.nameValidator)]
      }],
      age: ['', AgeValidator],
      password: ['', [Validators.required, PasswordValidator]],
      birthday: ['', DateSlashValidator],
      dateOfLogin: ['', DateSpaceValidator],
      dateOfNotification: ['', DateDashValidator],
      information: [''],
      role: ['']
    });
  }
  
  addUser(name: string, age: string, password: string, birthday: string, dateOfLogin: string, dateOfNotification: string, information: string, role: string) { 
    const newUser = {
        name: name,
        age: age,
        password: password,
        dateOfBirth: birthday,
        dateOfFirstLogin: dateOfLogin,
        dateOfNextNotification: dateOfNotification,
        information: information,
        role: role
    }

    this.userService.addUser(newUser)
      .subscribe((data: User) => {
        this.translate.get('The user successfully added.').subscribe((res: string) => {
          alert(res);
        });
      });
  }

}
