import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { NameValidator } from '../../validators/name.directive';
import { PasswordValidator } from '../../validators/password.validator';

import { User } from '../../services/user';
import { CurrentUserService } from '../../services/current-user.service';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-restore-form',
  templateUrl: './restore-form.component.html',
  styleUrls: ['../form.component.scss']
})
export class RestoreFormComponent implements OnInit {
  restoreForm: FormGroup;
  user: User; 

  constructor(private fb: FormBuilder,
              private nameValidator: NameValidator,
              private currentUser: CurrentUserService,
              public userService: UsersService,
              private router: Router,
              public translate: TranslateService
  ) { }

  ngOnInit() {
    this.restoreForm = this.fb.group({
      name: ['', {validators: [Validators.required],
        asyncValidators: [this.nameValidator.validate.bind(this.nameValidator)]
      }],
      newPassword: ['', [Validators.required, PasswordValidator]],
      repeatedPassword: ['', [Validators.required, PasswordValidator]]
    });
  }

  login(userName: string, userPassword: string) {
    const updateUser = {
      password: userPassword,
    }

    this.userService.restoreUser(userName, updateUser)
      .subscribe((data: User) => {
        this.currentUser.setData(data);
        this.router.navigate(['/user']);
      }, () => {
          this.translate.get('User by name not found.').subscribe((res: string) => {
            alert(res);
          });
        }
      );
  }

}
