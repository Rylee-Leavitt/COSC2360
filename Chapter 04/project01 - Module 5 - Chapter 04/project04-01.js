"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-01

      Application to calculate total moving cost
      Author: Rylee Leavitt
      Date:   10/10/2024

      Filename: project04-01.js
*/

// Global Constants
const COST_PER_LB = 0.50; //50 cents per lb  
const COST_PER_MILE = 0.75; //75 cents per mi  
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");


// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
/*Go to the calcTotal() function. To guard against users entering a zero or negative value for the estimated weight, 
replace the statement totalCost += wgtBox.value * COST_PER_LB; with a try catch statement that does the following:
 1) Tests whether wgtBox.value is not greater than 0 by using the expression !(wgtBox.value > 0). If that expression is true, 
throw an exception with the error message “!! Enter a positive weight”

2) If no exception is thrown then run the command totalCost += wgtBox.value * COST_PER_LB;.

3) If an exception is caught, set the value of msgBox.innerHTML to the error message you defined for the thrown exception. 

Repeat Step 5, for the estimated distance cost using distBox.value. Throw the error message “!! 
Enter a positive mileage” for a caught exception.*/
function calcTotal() {
   let totalCost = 0;      // Set the initial estimate to $0
   msgBox.innerHTML = "";  // Erase any warnings in the message box
   

   try {
      if (!(wgtBox.value > 0)) {
         throw new Error("!! Enter a positive weight");
      }
      totalCost += parseFloat(wgtBox.value) * COST_PER_LB;
      } catch (error) {
         msgBox.innerHTML = error.message;
      }      


   try {
      if (!(distBox.value > 0)) {
         throw new Error("!! Enter a positive distance");
      }
      totalCost += parseFloat(distBox.value) * COST_PER_MILE;
      } catch (error) {
         msgBox.innerHTML = error.message;
      }
  
      if (document.getElementById("setupBox").checked) {
         totalCost += SETUP_COST
      }
   
   
   // Display the moving cost estimate in the totalBox, formatted as currency
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}



 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }