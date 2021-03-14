const form = document.querySelector('.form-container');

const email = document.querySelector('#email');
const emailError = document.querySelector('.error-email');

const country = document.querySelector('#country');
const countryError = document.querySelector('.error-country');

const zipCode = document.querySelector('#zip-code');
const zipError = document.querySelector('.error-zip');

const password = document.querySelector('#password');
const passwordError = document.querySelector('.error-password');

const passwordConfirmation = document.querySelector('#password-confirmation');
const passwordConfirmError = document.querySelector('.error-passsword-confirm');

email.addEventListener('input', () => {
  email.validity.valid ? (emailError.textContent = '') : showEmailError();
});

country.addEventListener('input', () => {
  country.validity.valid ? (countryError.textContent = '') : showCountryError();
});



function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = 'You need to enter a country name.';
  } else if (country.validity.patternMismatch) {
    countryError.textContent =
      "Country's name should begin with a capital letter and can consist of letters only";
  } else if (country.validity.tooShort) {
    countryError.textContent = `Country's name should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
  }
}

// form.addEventListener('submit', (e) => {
//   if (!email.validity.valid) {
//     showEmailError();
//     e.preventDefault();
//   }
// });
