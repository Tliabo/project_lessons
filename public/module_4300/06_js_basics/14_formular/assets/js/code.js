const sendButton = document.querySelector('#btn-send');

sendButton.addEventListener('click', validateForm);


function validateForm(e) {
  e.preventDefault();

  let data = {}
  let validationErrors = {}

  data.firstName = document.querySelector('#firstName').value;
  data.lastName = document.querySelector('#lastName').value;
  data.email = document.querySelector('#email').value;
  data.message = document.querySelector('#message').value;


  // validationErrors.lastName = .textContent;
  // validationErrors.email = document.querySelector('.info-message[for="email"]').textContent;
  // validationErrors.message = document.querySelector('.info-message[for="message"]').textContent;

  // first name validation

  if (!data.firstName) {
    console.error('no First Name,' + data.firstName);
    // Create error for first name
    validationErrors.firstName = 'No first name provided';
  } else {
    console.info('First Name provided');
  }

  // last name validation
  if (!data.lastName) {
    console.error('no First Name,' + data.lastName);
    // Create error for first name
    validationErrors.lastName = 'No first name provided';
  } else {
    console.info('Last Name provided');
  }

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

  if (Object.keys(validationErrors).length > 0) {
    // there are errors
    displayErrors(validationErrors);
  } else {
    // there are no errors
  }

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
function displayErrors(errors) {

  if (errors.firstName) {
    const firstNameError = document.createElement('span');
    firstNameError.classList.add('info-message');
    firstNameError.attributes += ' for="firstName"';
    firstNameError.innerText = errors.firstName;
    document.querySelector('#firstName').after(firstNameError);
  }
  if (errors.lastName) {
    const lastNameError = document.createElement('span');
    lastNameError.classList.add('info-message');
    lastNameError.attributes += ' for="lastName"';
    lastNameError.innerText = errors.lastName;
    document.querySelector('#lastName').after(lastNameError);
  }
  if (errors.email) {
    const emailError = document.createElement('span');
    emailError.classList.add('info-message');
    emailError.attributes += 'for="email"';
    emailError.innerText = errors.email;
    document.querySelector('#email').after(emailError);
  }
}

