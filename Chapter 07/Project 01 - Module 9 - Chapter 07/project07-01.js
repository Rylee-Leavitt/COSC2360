"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Rylee Leavitt
      Date:   11/16/2024

      Filename: project07-01.js
*/

// Variables

let regex1 = /[A-Z]/;   
/*A regular expression literal with a character class that matches any uppercase letter A through Z.
this will look for any occurrence of a single uppercase letter within a string. */

let regex2 = /\d/;      
/*A regular expression literal that matches any single digit.
will look for any occurrence of a single digit within that string.*/

let regex3 = /[!$#%]/;  
/*A regular expression with a character class containing the symbols !$#% (note the escape for the $ symbol).
will look for any occurrence of one of these specific symbols (!, $, #, or %.) within a string. */


let signupForm = document.getElementById("signup"); //gets the element signup

signupForm.addEventListener("submit", function(e) { 
   e.preventDefault();  //Add the e.preventDefault() command to prevent the browser from responding to the submit event.

   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   if (pwd.length < 8) {
      feedback.textContent = "Your password must be at least 8 characters."; 
      //Makes sure the password is at least 8 characters long

  } else if (!regex1.test(pwd)) {
      feedback.textContent = "Your password must include an uppercase letter."; 
      //Makes sure the password includes an uppercase letter

  } else if (!regex2.test(pwd)) {
      feedback.textContent = "Your password must include a number.";
      //Makes sure the password includes a number

  } else if (!regex3.test(pwd)) {
      feedback.textContent = "Your password must include one of the following: !$#%.";
      //Makes sure the password includes one of (!, $, #, or %.)

  } else {
      signupForm.submit();
      //Submits form when all conditions are met
  }
});

  
