

document.addEventListener("DOMContentLoaded", function() {
    const firstNameInput = document.getElementById('First');
    const lastNameInput = document.querySelectorAll('input[type="text"]')[1];
    const emailInput = document.querySelector('.email');
    const radioButtons = document.querySelectorAll('input[name="type"]');
    const messageInput = document.getElementById('message');
    const consentCheckbox = document.getElementById('tick');
    const submitButton = document.getElementById('Submit');
    const alertfirst = document.getElementById('first-name');
    const alertlast = document.getElementById('last-name');
    const emailAlert = document.getElementById('email-alert');
    const messageAlert = document.getElementById('message-alert');
    const contactAlert = document.getElementById('contact-alert');
    const queryAlert = document.getElementById('query-alert');
    const successAlert = document.querySelector(".true");
    const bgRadio = document.querySelector(".type");

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    function isString(value) {
        return typeof value === 'string' && value.trim().length > 0;
    }

    // Submit button click event listener
    submitButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        let valid = true;

        // Validate First Name
        if (!firstNameInput.value || !isString(firstNameInput.value)) {
            firstNameInput.style.borderColor = "hsl(0, 66%, 54%)";
            alertfirst.style.display = "flex";
            valid = false;
        }else{
            firstNameInput.style.borderColor = "";
            alertfirst.style.display = "";
        }

        // Validate Last Name
        if (!lastNameInput.value || !isString(lastNameInput.value)) {
            lastNameInput.style.borderColor = "hsl(0, 66%, 54%)";
            alertlast.style.display = "flex";
            valid = false;
        }else{
            lastNameInput.style.borderColor = "";
            alertlast.style.display = "";
        }

        // Validate Email
        if (!emailInput.value || !validateEmail(emailInput.value)) {
            emailInput.style.borderColor = "hsl(0, 66%, 54%)";
            emailAlert.style.display = "flex"
            valid = false;
        }else{
            emailInput.style.borderColor = "";
            emailAlert.style.display = ""
        }

        // Validate Query Type
        let queryTypeSelected = false;
        radioButtons.forEach(radio => {
            if (radio.checked) {   
                 queryAlert.style.display = ""
                queryTypeSelected = true;
            }
        });
        if (!queryTypeSelected) {
           queryAlert.style.display = "flex"
            valid = false;
        }

        // Validate Message
        if (!messageInput.value) {
           messageInput.style.borderColor = "hsl(0, 66%, 54%)";
            messageAlert.style.display = "flex"
            valid = false;
        }else{
             messageInput.style.borderColor = "";
            messageAlert.style.display = "";
        }

        // Validate Consent Checkbox
        if (!consentCheckbox.checked) {
            contactAlert.style.display = "flex"
            valid = false;
        }else{
            consentCheckbox.style.display = "none"
            contactAlert.style.display = ""
        }

        if (valid) {
            // Here you would typically send the data to the server
           successAlert.style.display = "flex"
        }
    });
});

