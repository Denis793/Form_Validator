import { errorMessages } from '../message.js';
import { BaseValidator } from './BaseValidator.js';

export class EmailValidator extends BaseValidator {
  constructor(field) {
    super(field, errorMessages.emailInvalid);
  }

  validate() {
    const email = this.field.value.trim();

    if (!email.includes('@')) {
      this.errorMessage = errorMessages.emailMissingAt;
      return false;
    }

    const parts = email.split('@');
    if (parts.length !== 2 || !parts[1].includes('.')) {
      this.errorMessage = errorMessages.emailMissingDot;
      return false;
    }

    const domainParts = parts[1].split('.');
    const lastPart = domainParts[domainParts.length - 1];

    if (lastPart.length < 2) {
      this.errorMessage = errorMessages.emailShortDomain;
      return false;
    }

    return true;
  }
}
