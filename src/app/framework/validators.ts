import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AsyncValidatorFn, ValidationErrors, Validator, ValidatorFn, FormControl, AbstractControl } from '@angular/forms';

export class InputValidators {
	public static equal(controlName: string, isPrimary: boolean) {
		return (control: AbstractControl) => {
			let isValid = null;

			if (control.parent) {
				const relatedControl = control.parent.controls[controlName];
				const valuesEqual = control.value === relatedControl.value;
				const message = { 'password': { 'message': 'Passwords must be equal' } };

				// If values are equal, don't validate any more.
				if (control.value === relatedControl.value) {
					// control.markAsPristine();
					relatedControl.setErrors(null);
				} else if (isPrimary) {
					// If this is the primary, make sure we set error on the related control.
					relatedControl.setErrors(message);
				} else {
					isValid = message;
				}
			}

			return isValid;
		};
	}
}
