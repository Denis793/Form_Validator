import { errorMessages } from '../message.js';
import { BaseValidator } from './BaseValidator.js';

export class PasswordValidator extends BaseValidator {
  constructor(passwordField, confirmPasswordField = null) {
    super(passwordField, '');
    this.confirmPasswordField = confirmPasswordField;
  }

  validate() {
    const password = this.field.value.trim();
    const confirmPassword = this.confirmPasswordField ? this.confirmPasswordField.value.trim() : '';

    if (password === '') {
      this.errorMessage = errorMessages.required;
      return false;
    }

    if (password.length < 8) {
      this.errorMessage = errorMessages.passwordShort;
      return false;
    }

    if (this.confirmPasswordField) {
      const errors = [
        { condition: confirmPassword === '', message: errorMessages.required },
        { condition: confirmPassword.length < 8, message: errorMessages.passwordShort },
        { condition: password !== confirmPassword, message: errorMessages.passwordMismatch },
      ];

      for (const error of errors) {
        if (error.condition) {
          this.errorMessage = error.message;
          this.showErrorForField(this.confirmPasswordField, this.errorMessage);
          return false;
        }
      }
    }

    this.errorMessage = '';
    return true;
  }

  showError() {
    super.showError();
    if (this.confirmPasswordField) {
      this.showErrorForField(this.confirmPasswordField, this.errorMessage);
    }
  }

  clearError() {
    super.clearError();
    if (this.confirmPasswordField) {
      this.clearErrorForField(this.confirmPasswordField);
    }
  }

  showErrorForField(field, message) {
    if (!field) return;

    let errorSpan = field.nextElementSibling;
    if (!errorSpan || !errorSpan.classList.contains('error-message')) {
      errorSpan = document.createElement('span');
      errorSpan.classList.add('error-message');
      field.after(errorSpan);
    }

    errorSpan.textContent = message;
    field.classList.add('error');
  }

  clearErrorForField(field) {
    if (!field) return;

    field.classList.remove('error');
    const errorSpan = field.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-message')) {
      errorSpan.textContent = '';
    }
  }
}
