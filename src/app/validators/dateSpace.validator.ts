import { AbstractControl } from '@angular/forms';

export interface DateSpace {
  validDateSpace: boolean;
}

export function DateSpaceValidator(control: AbstractControl): DateSpace | null {
  if (control.pristine) {
    return null;
	}
	if (control.value !== undefined && control.value !== '' && control.value != null) {
		let year = null;
    let month = null;
    let day = null;
    if (control.value.indexOf(' ') > -1 && control.value.indexOf('.') == -1) {
      const res = control.value.split(' ');           
      if (res.length == 3) {
        day = res[0];
        month = res[1][0].toUpperCase() + res[1].toLowerCase().slice(1);
        year = res[2];
      }                           
    }
    if (isNaN(day) || isNaN(year)) {
      return { validDateSpace: true };
    } 

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    month = months.findIndex(item => item == month) + 1;

    if (year < 1000 || year > 9999) {
      return { validDateSpace: true };
    }
    if (month < 1 || month > 12) { 
      return { validDateSpace: true };
    }
    if (day < 1 || day > 31) {
      return { validDateSpace: true };
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
      return { validDateSpace: true };
    }
    if (month == 2) { // check for february 29th
      const isLeapYear = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
      if (day > 29 || (day == 29 && !isLeapYear)) {
        return { validDateSpace: true };
      }
    }
	}
  return null;
}