import css from "./script.css";

const emailEl = document.getElementById('email');
const emailMessageEl = document.getElementById('emailMessage');
const countryEl = document.getElementById('country');
const countryMessageEl = document.getElementById('countryMessage');
const zipEl = document.getElementById('zip');
const zipMessageEl = document.getElementById('zipMessage');
const passEl = document.getElementById('password');
const passMessageEl = document.getElementById('passwordMessage');
const confirmPassEl = document.getElementById('confirmPass');
const confirmPassMessageEl = document.getElementById('confirmPassMessage');
const submitBtnEl = document.getElementById('submitButton');

function validateEmail() {
    const emailText = emailEl.value;
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(emailText);
}

function validatePassword() {
    const passText = passEl.value;
    return (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passText));

}
function validZip() {
    const zipText = zipEl.value;
    return (/^\d{5}(?:[-\s]\d{4})?$/.test(zipText));
}

function validatePasswordConfirmation() {
    const passText = passEl.value;
    const confirmationPassText = confirmPassEl.value;
    return (passText == confirmationPassText);
}

emailEl.addEventListener('focusout', () => {
    if (!validateEmail()) {
        emailEl.style.backgroundColor = 'pink';
    }
});
emailEl.addEventListener('focusin', () => {
    emailEl.style.backgroundColor = 'white';
    emailMessageEl.textContent = '';
});

countryEl.addEventListener('focusout', () => {
    let countryText = countryEl.value;
    if (countryText == '') {
        countryEl.style.backgroundColor = 'pink';
    }
})
countryEl.addEventListener('focusin', () => {
    countryEl.style.backgroundColor = 'white';
    countryMessageEl.textContent = '';
});

zipEl.addEventListener('focusout', () => {
    if (!validZip()) {
        zipEl.style.backgroundColor = 'pink';
    }
})
zipEl.addEventListener('focusin', () => {
    zipEl.style.backgroundColor = 'white';
    zipMessageEl.textContent = '';

});


passEl.addEventListener('focusout', () => {
    if (!validatePassword()) {
        passEl.style.backgroundColor = 'pink';
    }
});
passEl.addEventListener('focusin', () => {
    passEl.style.backgroundColor = 'white';
    passMessageEl.textContent = '';
});

confirmPassEl.addEventListener('focusout', () => {
    if (!validatePasswordConfirmation) {
        confirmPassEl.style.backgroundColor = 'pink';
    }
})

confirmPassEl.addEventListener('focusin', () => {
    confirmPassEl.style.backgroundColor = 'white';
    confirmPassMessageEl.textContent = '';
})

submitBtnEl.addEventListener('click', () => {
    const submitMessage = document.getElementById('submittedMessage');
    let isValid = true;
    let countryText = countryEl.value;
    if (!validateEmail()) {
        emailEl.style.backgroundColor = 'pink';
        emailMessageEl.textContent = 'Please enter a correct email.';
        isValid = false;
    }
    if (countryText == '') {
        countryEl.style.backgroundColor = 'pink';
        countryMessageEl.textContent = 'Please enter a country';
        isValid = false;
    }
    if (!validZip()) {
        zipEl.style.backgroundColor = 'pink';
        zipMessageEl.textContent = 'Please enter a valid Zip Code.';
        isValid = false;
    }
    if (!validatePassword()) {
        passEl.style.backgroundColor = 'pink';
        passMessageEl.textContent = 'Please enter a vaild password.';
        isValid = false;
    }
    if (!validatePasswordConfirmation) {
        confirmPassEl.style.backgroundColor = 'pink';
        confirmPassMessageEl.textContent = 'Does not match password entered.';
        isValid = false;
    }

    if (isValid) {
        submitMessage.textContent = "*High Five*";
    } else {
        submitMessage.textContent = "Please fix marked";
    }

})