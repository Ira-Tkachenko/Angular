import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const ALTER_EGOS = ['Eric'];

function ValidateName(name: string): true | false {
	name = name.trim();
	if (name !== undefined && name !== '' && name != null && CheckLetters(name)) {
		let firstname = null;
    let surname = null;
    if (name.indexOf(' ') == -1) {
      firstname = name;
      const firstnameValid = firstname[0].toUpperCase() + firstname.toLowerCase().slice(1);      
      if (firstname == firstnameValid) {
      	return false;
      }
    } else {
    	const res = name.split(' ');       
      if (res.length == 2  && name.length != 1) {       
        surname = res[1];
        const surnameValid = surname[0].toUpperCase() + surname.toLowerCase().slice(1);
	      if (surname == surnameValid) {
	      	return false;
	      }
      }  
    }                              
  }
  return true;
}

function CheckLetters(name) {
	for (let i = 0; i < name.length; i++) {
  	if ((name[i] < 'a' || name[i] > 'z') && (name[i] < 'A' || name[i] > 'Z') && name[i] != ' ') {
  		return false;
  	}
  }
  return true;
}

@Injectable({ providedIn: 'root' })
export class NameService {
  isValidName(name: string): Observable<boolean> {
    const result = ValidateName(name);

    return of(result).pipe(delay(3000));
  }
}