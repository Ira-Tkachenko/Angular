import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { NameValidator } from '../../validators/name.directive';
import { PasswordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-restore-form',
  templateUrl: './restore-form.component.html',
  styleUrls: ['../form.component.scss']
})
export class RestoreFormComponent implements OnInit {
  restoreForm: FormGroup;

  constructor(private fb: FormBuilder, private nameValidator: NameValidator) { }

  ngOnInit() {
    this.restoreForm = this.fb.group({
      name: ['', {validators: [Validators.required],
        asyncValidators: [this.nameValidator.validate.bind(this.nameValidator)],
        updateOn: 'blur'
      }],
      newPassword: ['', [Validators.required, PasswordValidator]],
      repeatedPassword: ['', [Validators.required, PasswordValidator]]
    });
  }

  onSubmit() {
    console.warn(this.restoreForm.value);
  }

}
