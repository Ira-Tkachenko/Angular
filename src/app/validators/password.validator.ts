import { AbstractControl } from '@angular/forms';

export interface ValidPassword {
	validPassword: boolean;
}

export function PasswordValidator(control: AbstractControl): ValidPassword | null {
  if (control.pristine) {
    return null;
  }
  if ((control.value !== undefined && control.value !== '' && control.value !== null) &&
  	(control.value.length < 4 || control.value.indexOf(' ') !== -1)) {
    return { validPassword: true };
  }
  return null;
}