import { AbstractControl } from '@angular/forms';

export interface DateDash {
  validDateDash: boolean;
}

export function DateDashValidator(control: AbstractControl): DateDash | null {
  if (control.pristine) {
    return null;
	}
	if (control.value !== undefined && control.value !== '' && control.value != null) {
		let year = null;
    let month = null;
    let day = null;
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    if (control.value.indexOf('-') > -1 && control.value.indexOf('.') == -1) {
      const res = control.value.split('-');           
      if (res.length == 3) {
        day = res[0];
        month = res[1].toUpperCase();
        year = res[2];
      }                           
    }
    if (isNaN(day) || isNaN(year)) {
      return { validDateDash: true };
    } 

    month = months.findIndex(item => item == month) + 1;
    
    if ((year < 1 && year != '00') || year > 99) {
      return { validDateDash: true };
    }
    if (month < 1 || month > 12) { 
      return { validDateDash: true };
    }
    if (day < 1 || day > 31) {
      return { validDateDash: true };
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
      return { validDateDash: true };
    }
    if (month == 2) { // check for february 29th
      const isLeapYear = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
      if (day > 29 || (day == 29 && !isLeapYear)) {
        return { validDateDash: true };
      }
    }
	}
  return null;
}