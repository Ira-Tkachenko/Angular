import { AbstractControl } from '@angular/forms';

export interface DateSlash {
	validDateSlash: boolean;
}

export function DateSlashValidator(control: AbstractControl): DateSlash | null {
  if (control.pristine) {
    return null;
	}
	if (control.value !== undefined && control.value !== '' && control.value !== null) {
		let year = null;
    let month = null;
    let day = null;
    if (control.value.indexOf('/') > -1 && control.value.indexOf('.') == -1) {
      const res = control.value.split('/');           
      if (res.length == 3) {
        year = res[0];
        month = res[1]
        day = res[2];
      }                           
    }
    if (isNaN(month) || isNaN(day) || isNaN(year)) {
      return { validDateSlash: true };
    } 
    if (year < 1000 || year > 9999) {
      return { validDateSlash: true };
    }
    if (month < 1 || month > 12) { 
      return { validDateSlash: true };
    }
    if (day < 1 || day > 31) {
      return { validDateSlash: true };
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
      return { validDateSlash: true };
    }
    if (month == 2) { // check for february 29th
      const isLeapYear = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
      if (day > 29 || (day == 29 && !isLeapYear)) {
        return { validDateSlash: true };
      }
    }
	}
  return null;
}