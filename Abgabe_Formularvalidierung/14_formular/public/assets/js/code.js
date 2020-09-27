const sendButton = document.querySelector('.btn-submit');
sendButton.addEventListener('click', validateForm);

let form = [];

let data = {
  firstName: document.querySelector('#firstName').value,
  lastName: document.querySelector('#lastName').value,
  email: document.querySelector('#email').value,
  phone: document.querySelector('#phoneNumber').value,
  message: document.querySelector('#message').value
}

let validationErrors = {}

// get storage content if available
// if no storage is available create empty storage

function validateForm(e) {
  e.preventDefault();

  validateFirstName();
  validateLastName();
  validateEmail();
  validatePhone();
  displayErrors();

}

document.querySelector('#message').addEventListener('input', e => {
  if (!document.querySelector('.counterBox')) {
    const counterBox = document.createElement('div');
    counterBox.classList.add('counterBox');
    counterBox.innerText = e.target.textLength;
    e.target.after(counterBox);
  } else {
    document.querySelector('.counterBox').innerText = e.target.textLength;

    if (e.target.textLength > 32) {
      document.querySelector('.counterBox').style.color = 'green';
    } else {
      document.querySelector('.counterBox').style.color = 'red';
    }
  }
})

// Responsible for showing error messages
function displayErrors() {
  const errors = validationErrors;

  if (Object.keys(errors).length > 0) {

    for (let i = 0; i < Object.entries(errors).length; i++) {
      const error = document.createElement('span');
      error.classList.add('error-message');

      switch (Object.entries(errors)[i][0]) {
        case "firstName":
          error.attributes += ' for="firstName"';
          error.innerText = errors.firstName;
          document.querySelector('#firstName').after(error);
          break;
        case "lastName":
          error.attributes += ' for="lastName"';
          error.innerText = errors.lastName;
          document.querySelector('#lastName').after(error);
          break;
        case "phone":
          error.attributes += ' for="phoneNumber"';
          error.innerText = errors.phone;
          document.querySelector('#phoneNumber').after(error);
          break;
        case "email":
          error.attributes += ' for="email"';
          error.innerText = errors.email;
          document.querySelector('#email').after(error);
          break;
        default:
          console.log(errors[i])
      }
    }

  }

}

function validateFirstName() {
  if (!data.firstName) {
    console.error('no First Name,' + data.firstName);
    // Create error for first name
    validationErrors.firstName = 'No first name provided';
  } else {
    console.info('First Name provided');
  }
}

function validateLastName() {
  if (!data.lastName) {
    console.error('no First Name,' + data.lastName);
    // Create error for first name
    validationErrors.lastName = 'No last name provided';
  } else {
    console.info('Last Name provided');
  }
}

function validateEmail() {
  if (!data.email) {
    console.error('No email provided' + data.email);
    validationErrors.email = 'No email provided';
  } else {
    // Email provided
    // Test if valid email
    let emailRegExp = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    if (!emailRegExp.test(data.email)) {
      // its not a valid email
      console.error('Email provided is not valid' + data.email);
      validationErrors.email = 'email is not valid, did you forget the @?';
    } else {
      // its a valid Email
      console.info('Email is valid');
    }

  }
}

function validatePhone() {
  if (!data.phone) {
    console.error('no phone number,' + data.phone);
    // Create error for first name
    validationErrors.phone = 'No phone number provided';
  } else {
    console.info('Phone number provided');
  }
}

function updateStorage() {
  localStorage.setItem('form', JSON.stringify(form));
}

function populateStorage() {
  // delete content in form

}