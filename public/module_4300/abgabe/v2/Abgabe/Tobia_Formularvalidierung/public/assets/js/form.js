const form = {
  storageKey: 'formData',
  data: {},
  sendButton: document.querySelector('.btn-submit'),
  validationErrors: [],
  validationOk: false,
  validateForm(e) {
    e.preventDefault();
    this.validationOk = false;
    document.querySelectorAll('.error-message').forEach(error => {
      error.remove();
    });
    if (this.successMessage) {
      this.successMessage.remove();
    }
    this.validationErrors = []
    this.saveFormData();
    this.updateSessionData();

    this.validateFirstName();
    this.validateLastName();
    this.validateEmail();
    this.validatePhone();
    this.displayErrors();

    if (this.validationOk === true) {
      this.resetAll()
      this.successMessage = document.createElement('span');
      this.successMessage.innerText = 'Vielen Dank für dein Feedback!';
      this.successMessage.classList.add('text-success');
      document.querySelector('h1').after(this.successMessage);
    }
  },
  displayErrors() {
    let errors = this.validationErrors;

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

  },
  validateFirstName() {
    if (!this.data.firstName) {
      console.error('no First Name,' + this.data.firstName);
      // Create error for first name
      this.validationErrors.firstName = 'No first name provided';
      this.validationOk = false;
    } else {
      console.info('First Name provided');
      this.validationOk = true;
    }
  },
  validateLastName() {
    if (!this.data.lastName) {
      console.error('no First Name,' + this.data.lastName);
      // Create error for first name
      this.validationErrors.lastName = 'No last name provided';
      this.validationOk = false;
    } else {
      console.info('Last Name provided');
      this.validationOk = true;
    }
  },
  validateEmail() {
    if (!this.data.email) {
      console.error('No email provided' + this.data.email);
      this.validationErrors.email = 'No email provided';
      this.validationOk = false;
    } else {
      // Email provided
      // Test if valid email
      let emailRegExp = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
      if (!emailRegExp.test(this.data.email)) {
        // its not a valid email
        console.error('Email provided is not valid: ' + this.data.email);
        this.validationErrors.email = 'email is not valid, did you forget the @?';
        this.validationOk = false;
      } else {
        // its a valid Email
        console.info('Email is valid');
        this.validationOk = true;
      }

    }
  },
  validatePhone() {
    if (!this.data.phone) {
      this.validationErrors.phone = 'No phone number provided';
      console.error('no phone number: ' + this.data.phone);
      this.validationOk = false;
    } else {
      console.info('Phone number provided');
      this.validationOk = true;
    }
  },
  updateSessionData() {
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.data));
  },
  getSessionData() {
    this.data = JSON.parse(sessionStorage.getItem(this.storageKey));
    this.populateForm();
  },
  populateForm(reset = false) {
    // set the form content from session storage if reset is on false
    const textInputList = ['firstName', 'lastName', 'email', 'phoneNumber', 'message']
    textInputList.forEach(selector => {
      if (reset) {
        document.querySelector(`#${selector}`).value = '';
      } else if (eval(`this.data.${selector}`) === undefined) {
        document.querySelector(`#${selector}`).value = '';
      } else {
        document.querySelector(`#${selector}`).value = eval(`this.data.${selector}`);
      }
    });
  },
  saveFormData() {
    this.data = {
      firstName: document.querySelector('#firstName').value,
      lastName: document.querySelector('#lastName').value,
      email: document.querySelector('#email').value,
      phone: document.querySelector('#phoneNumber').value,
      message: document.querySelector('#message').value
    }
  },
  init() {
    if (sessionStorage.getItem(this.storageKey)) {
      this.getSessionData();
    } else {
      this.updateSessionData();
    }

    this.sendButton.addEventListener('click', e => {
      this.validateForm(e);
    });
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
    });
    console.log(this)
  },
  resetAll() {
    this.validationErrors = [];
    sessionStorage.clear();
    this.populateForm(true)
    this.saveFormData();
  }
}

form.init();
