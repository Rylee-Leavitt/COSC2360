"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Rylee Leavitt
      Date:   11/9/2024

      Filename: project06-01.js
*/

let submitButton = document.getElementById("submitButton");
let form = document.forms[0];
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

// Clear custom validity messages on input
pwd.addEventListener("input", function() {
    pwd.setCustomValidity("");
});
pwd2.addEventListener("input", function() {
    pwd2.setCustomValidity("");
});

form.addEventListener("submit", function(event) {
    let isValid = true;
    
    if (!pwd.checkValidity()) {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
        isValid = false;
    } else {
        pwd.setCustomValidity("");
    }

    if (pwd.value !== pwd2.value) {
        pwd2.setCustomValidity("Your passwords must match");
        isValid = false;
    } else {
        pwd2.setCustomValidity("");
    }

    // Prevent form submission if there are invalid fields
    if (!isValid) {
        event.preventDefault(); // Prevent form from submitting
        form.reportValidity(); // Show validation messages
    }
});


