// Form Validation Event Listener
document.querySelector('#name').addEventListener('blur', validateName);
document.querySelector('#zipcode').addEventListener('blur', validateZipCode);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone_number').addEventListener('blur', validatePhoneNumber);

function validateName() {
    const name = document.querySelector('#name');
    const re = /^[a-zA-Z]{2,50}$/; // Validate name length
    // Check the length of the char
    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZipCode() {
    const zipcode = document.querySelector('#zipcode');
    const re = /^[0-9]{5}(-[0-9]{4})?$/; // validate zipcode = 12345-(1234) Optional

    if (!re.test(zipcode.value)) {
        zipcode.classList.add('is-invalid');
    } else {
        zipcode.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.querySelector('#email');
    const emailFeedback = document.querySelector('#email-feedback');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; // Validate email = email@email.test.test

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
        emailFeedback.innerText = 'Email must be valid';
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhoneNumber() {
    const phone_number = document.querySelector('#phone_number');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if (!re.test(phone_number.value)) {
        phone_number.classList.add('is-invalid');
    } else {
        phone_number.classList.remove('is-invalid');
    }
}