import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { NameValidator } from '../../validators/name.directive';
import { PasswordValidator } from '../../validators/password.validator';

import { User } from '../../services/user';
import { UsersService } from '../../services/users.service';
import { CurrentUserService } from '../../services/current-user.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { LoginUser } from '../../redux/user.action';
import { UserLoginState } from '../../redux/user.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  receivedUser: User;
  private isLoading: boolean;

  constructor(private fb: FormBuilder, 
              private nameValidator: NameValidator, 
              public userService: UsersService,
              private currentUser: CurrentUserService,
              private router: Router,
              public translate: TranslateService,
              private store: Store<UserLoginState>
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', {validators: [Validators.required],
        asyncValidators: [this.nameValidator.validate.bind(this.nameValidator)]
      }],
      password: ['', [Validators.required, PasswordValidator]]
    });
  }

  login(userName: string, userPassword: string) {
    this.isLoading = true;
    const userLogin: User = {
      name: userName,
      password: userPassword
    };

    //this.userService.loginUser(userName, userPassword)
    this.userService.login(userLogin)
      .subscribe((data: User) => {
        if (data) {
          this.currentUser.setData(data);
          this.router.navigate(['/user']);
        } else {
          this.translate.get('User not found. Check name and password.').subscribe((res: string) => {
            alert(res);
          });
          this.isLoading = false;
        }
      });

    /*this.store.dispatch(new LoginUser(userLogin));
     this.store.subscribe( user => {
      if (user) {
        this.currentUser.setData(user);
        this.router.navigate(['/user']);
      } else {
        alert('User not found. Check name and password.')
      }
    });*/

  }
}
