const form = document.querySelector('.form-container');
const formValid = document.querySelector('.form-submitted');

const email = document.querySelector('#email');
const emailError = document.querySelector('.error-email');

const country = document.querySelector('#country');
const countryError = document.querySelector('.error-country');

const zipCode = document.querySelector('#zip-code');
const zipError = document.querySelector('.error-zip');

const password = document.querySelector('#password');
const passwordError = document.querySelector('.error-password');

const passwordConfirmation = document.getElementById('password-confirmation');
const confirmError = document.querySelector('.error-password-confirm');

email.addEventListener('input', () => {
  email.validity.valid ? (emailError.textContent = '') : showEmailError();
});

country.addEventListener('input', () => {
  country.validity.valid ? (countryError.textContent = '') : showCountryError();
});

zipCode.addEventListener('input', () => {
  zipCode.validity.valid ? (zipError.textContent = '') : showZipError();
});

password.addEventListener('input', () => {
  password.validity.valid ? (passwordError.textContent = '') : showPasswordError();
});

passwordConfirmation.addEventListener('input', () => {
  confirmError.textContent = '';
  checkPasswordVailidity();
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

function showZipError() {
  if (zipCode.validity.valueMissing) {
    zipError.textContent = 'You need to enter a zip code.';
  } else if (zipCode.validity.patternMismatch) {
    zipError.textContent = 'Zip code should consist of numbers only';
  } else if (zipCode.validity.tooShort) {
    zipError.textContent = `Zip code should be at least ${zipCode.minLength} characters; you entered ${zipCode.value.length}.`;
  }
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = 'You need to enter a password.';
  } else if (password.validity.patternMismatch) {
    passwordError.textContent =
      'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.';
  }
}

function checkPasswordVailidity() {
  if (passwordConfirmation.validity.valueMissing) {
    confirmError.innerHTML = 'You need to confirm your password.';
  } else if (passwordConfirmation.value != password.value) {
    confirmError.textContent = 'Passwords do not match.';
  }
}

function checkFormValidity() {
  showEmailError();
  showCountryError();
  showZipError();
  showPasswordError();
  checkPasswordVailidity();
}

form.addEventListener('submit', (e) => {
  checkFormValidity();
  e.preventDefault();

  const spanValues = [...document.querySelectorAll('span')]
    .map((value) => value.innerText)
    .filter((value) => value);

  if (spanValues.length === 0) {
    formValid.textContent = 'Form Submitted!';
    setTimeout(() => (formValid.textContent = ''), 2000);
  }
});
