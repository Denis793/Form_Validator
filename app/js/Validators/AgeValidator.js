import { errorMessages } from '../message.js';
import { BaseValidator } from './BaseValidator.js';

export class AgeValidator extends BaseValidator {
  constructor(field) {
    super(field, errorMessages.ageInvalid);
  }

  validate() {
    const age = Number(this.field.value.trim());

    if (isNaN(age) || age < 18 || age > 100) {
      this.errorMessage = errorMessages.ageInvalid;
      return false;
    }

    return true;
  }
}
