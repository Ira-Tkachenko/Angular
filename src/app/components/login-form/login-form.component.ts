import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { NameValidator } from '../../validators/name.directive';
import { PasswordValidator } from '../../validators/password.validator';

import { UsersService } from '../../services/users.service';
import { User } from '../../services/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../form.component.scss']
})
export class LoginFormComponent implements OnInit {
  users: User[];
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
             private nameValidator: NameValidator, 
             private usersServise: UsersService
   ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', {validators: [Validators.required],
        asyncValidators: [this.nameValidator.validate.bind(this.nameValidator)],
        updateOn: 'blur'
      }],
      password: ['', [Validators.required, PasswordValidator]]
    });
    this.getUsers();
    console.log(this.search('Irina'));
  }

  getUsers(): void {
    this.usersServise.getUsers()
      .subscribe(users => this.users = users);
  }

  onSubmit() {
    console.warn(this.loginForm.value);
  }

  search(searchTerm: string) {
    if (searchTerm) {
      return this.usersServise.searchUsers(searchTerm)
        .subscribe(users => this.users = users);
    }
  }

}
