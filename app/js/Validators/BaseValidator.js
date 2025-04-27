export class BaseValidator {
  constructor(field, errorMessage) {
    this.field = field;
    this.errorMessage = errorMessage;
  }

  showError() {
    if (!this.field) return;

    let errorSpan = this.field.nextElementSibling;
    if (!errorSpan || !errorSpan.classList.contains('error-message')) {
      errorSpan = document.createElement('span');
      errorSpan.classList.add('error-message');
      this.field.after(errorSpan);
    }

    errorSpan.textContent = this.errorMessage;
    this.field.classList.add('error');
  }

  clearError() {
    if (!this.field) return;

    this.field.classList.remove('error');
    const errorSpan = this.field.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-message')) {
      errorSpan.textContent = '';
    }
  }
}
