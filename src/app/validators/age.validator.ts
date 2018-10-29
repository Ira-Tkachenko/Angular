import { AbstractControl } from '@angular/forms';

export interface ValidAge {
	validAge: boolean;
}

export function AgeValidator(control: AbstractControl): ValidAge | null {
  if (control.pristine) {
    return null;
  }
  if ((control.value !== undefined && control.value !== '' && control.value !== null) &&
    (control.value < 18 || control.value > 65 || isNaN(control.value) || (control.value.indexOf('.') != -1) )) {
    return { validAge: true };
  }
  return null;
}