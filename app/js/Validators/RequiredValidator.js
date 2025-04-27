import { errorMessages } from '../message.js';
import { BaseValidator } from './BaseValidator.js';

export class RequiredValidator extends BaseValidator {
  constructor(field) {
    super(field, errorMessages.required);
  }

  validate() {
    return this.field.value.trim() !== '';
  }
}
