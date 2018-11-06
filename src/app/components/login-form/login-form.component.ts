import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { NameValidator } from '../../validators/name.directive';
import { PasswordValidator } from '../../validators/password.validator';

import { User } from '../../services/user';
import { UsersService } from '../../services/users.service';
import { CurrentUserService } from '../../services/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  receivedUser: User;

  constructor(private fb: FormBuilder, 
             private nameValidator: NameValidator, 
             public userService: UsersService,
             private currentUser: CurrentUserService,
             private router: Router
  ) { }

  //users = this.userService.getUsers();

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['Irina', {validators: [Validators.required],
        asyncValidators: [this.nameValidator.validate.bind(this.nameValidator)]
      }],
      password: ['12345', [Validators.required, PasswordValidator]]
    });
  }

  login(userName: string, userPassword: string) {
    this.userService.loginUser(userName, userPassword)
      .subscribe((data: User) => {
        if (data) {
          this.currentUser.setData(data);
          this.router.navigate(['/user']);
        } else {
          alert('User not found. Check name and password.')
        }
      });
  }

  /*getUsers(): void {
    this.usersServise.getUsers()
      .subscribe(users => this.users = users);
  }*/
}
