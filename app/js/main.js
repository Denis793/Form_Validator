import { range } from './range.js';
import { Validator } from './Validator.js';
import { RequiredValidator } from './Validators/RequiredValidator.js';
import { EmailValidator } from './Validators/EmailValidator.js';
import { PasswordValidator } from './Validators/PasswordValidator.js';
import { AgeValidator } from './Validators/AgeValidator.js';
import { showMessage } from './message.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const resultElement = document.getElementById('result');

  const validator = new Validator([
    new RequiredValidator(form.querySelector('#firstName')),
    new RequiredValidator(form.querySelector('#lastName')),
    new RequiredValidator(form.querySelector('#email')),
    new EmailValidator(form.querySelector('#email')),
    new RequiredValidator(form.querySelector('#password')),
    new RequiredValidator(form.querySelector('#confirmPassword')),
    new PasswordValidator(form.querySelector('#password'), form.querySelector('#confirmPassword')),
    new AgeValidator(form.querySelector('#age')),
  ]);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validator.validateForm()) {
      showMessage(resultElement, ['✅ Форма успішно відправлена!'], 'success');
      form.reset();
    } else {
      showMessage(resultElement, ['❌ Виправте помилки у формі!'], 'error');
    }
  });
});

range();
