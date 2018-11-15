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
import { UserForAdminService } from '../../services/user-for-admin.service';
import { UsersService } from '../../services/users.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['../form.component.scss']
})
export class EditFormComponent implements OnInit {
	user: User; 
  updateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private nameValidator: NameValidator,
              private userForAdminService: UserForAdminService,
              public userService: UsersService,
              public translate: TranslateService
  ) {}

  ngOnInit() {
  	if (this.userForAdminService.getData()) {
  		this.user = this.userForAdminService.getData(); 
  	} else {
      this.translate.get('Please choose the user on the first tab.').subscribe((res: string) => {
          alert(res);
        });
  		this.user = {};
  	}
    

    this.updateForm = this.fb.group({
      name: [this.user.name, {validators: [Validators.required],
        asyncValidators: [this.nameValidator.validate.bind(this.nameValidator)]
      }],
      age: ['', AgeValidator],
      password: ['', PasswordValidator],
      birthday: ['', DateSlashValidator],
      dateOfLogin: ['', DateSpaceValidator],
      dateOfNotification: ['', DateDashValidator],
      information: [''],
      role: ['']
    });
  }
  
  update(name: string, age: string, password: string, birthday: string, dateOfLogin: string, dateOfNotification: string, information: string, role: string) { 
    const updateUser = {
        id: this.user.id,
        name: name,
        age: age,
        password: password,
        dateOfBirth: birthday,
        dateOfFirstLogin: dateOfLogin,
        dateOfNextNotification: dateOfNotification,
        information: information,
        role: role
    }

    this.userService.putUser(this.user.id, updateUser)
      .subscribe((data: User) => {
        this.userForAdminService.setData(data);
        this.translate.get('The information was successfully updated.').subscribe((res: string) => {
          alert(res);
        });
      });
  }

}
