export const errorMessages = {
  required: '❗ Це поле обов’язкове',
  emailInvalid: '❌ Неправильний email',
  emailMissingAt: "📧 Email повинен містити '@'",
  emailMissingDot: "📧 Email повинен містити '.' після '@'",
  emailShortDomain: '📧 Домен повинен мати мінімум 2 символи',
  passwordShort: '🔒 Пароль має бути не менше 8 символів!',
  passwordMismatch: '🔑 Паролі не співпадають!',
  ageInvalid: '🎂 Ваш вік не досяг повноліття',
};

export function showMessage(element, messages, type) {
  element.innerHTML = messages.join('<br>');
  element.className = `result ${type}`;
}
