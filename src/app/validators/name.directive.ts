import { Directive, forwardRef, Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { NameService } from './name.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NameValidator implements AsyncValidator {
  constructor(private nameService: NameService) {}

  validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.nameService.isValidName(ctrl.value).pipe(
      map(result => (result ? { validName: true } : null)),
      catchError(() => null)
    );
  }
}

@Directive({
  selector: '[appName]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => NameValidator),
      multi: true
    }
  ]
})
export class NameDirective {
  constructor(private validator: NameValidator) {}

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }
}