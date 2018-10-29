import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { NameValidator } from '../../validators/name.directive';
import { PasswordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  public formDisabled = false;

  constructor(private fb: FormBuilder, private nameValidator: NameValidator) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', {
        asyncValidators: [this.nameValidator.validate.bind(this.nameValidator)],
        updateOn: 'blur'
      }],
      password: ['', [Validators.required, PasswordValidator]]
    });
  }

  onSubmit() {
    console.warn(this.loginForm.value);
  }

}
