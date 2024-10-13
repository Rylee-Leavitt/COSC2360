"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-05

      Degrees <-> Radians Coverter
      Author: Rylee Leavitt
      Date:   10/12/2024

      Filename: project04-05.js
 */

// Function to convert degrees to radians
function degreesToRadians(degrees) {
   return degrees * Math.PI / 180; // Corrected to use Math.PI and correct calculation
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
   return radians * 180 / Math.PI; // Corrected to use Math.PI
}

// Event handler that converts radians to degrees when the input box is changed
document.getElementById("rValue").onchange = function () {
   let radians = document.getElementById("rValue").value;
   document.getElementById("aValue").value = formatValue3(radiansToDegrees(radians));
}

// Event handler that converts degrees to radians when the input box is changed
document.getElementById("aValue").onchange = function() {
   let degrees = document.getElementById("aValue").value;
   document.getElementById("rValue").value = formatValue3(degreesToRadians(degrees));
}

/* ================================================================= */
 // Function to display a numeric value in the format ##.###  
function formatValue3(value) {
   return parseFloat(value).toFixed(3); // Ensure value is parsed to float
}