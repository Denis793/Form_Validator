export class Validator {
  constructor(validators) {
    this.validators = validators;
  }

  validateForm() {
    let isValid = true;

    this.validators.forEach((validator) => {
      if (typeof validator.showError !== 'function') {
        return;
      }

      if (!validator.validate()) {
        validator.showError();
        isValid = false;
      } else {
        validator.clearError();
      }
    });

    return isValid;
  }
}
