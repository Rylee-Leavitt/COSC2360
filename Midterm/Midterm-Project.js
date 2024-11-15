"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: Rylee Leavitt
      Date:   11/14/2024

      Filename: Midterm-Project.js
*/

// Selection lists in the web form
let crust = document.getElementById("crust");
let payment = document.getElementById("payment");

// Form button to generate the complete text of the selected pizza
let selectPizzaButton = document.getElementById("selectPizza");

// Paragraph containing the text of the selected Pizza
let pizzaParagraph = document.getElementById("Pizza");

// Add an onclick event handler for the Checkout button
selectPizzaButton.onclick = function() {
  // Get the selected crust
  let selectedCrust = crust.selectedOptions[0].text;
  
  // Handle multiple selected toppings
  let toppings = document.querySelectorAll("input[name='toppings']:checked");
  let selectedToppings = Array.from(toppings).map(topping => topping.value);
  let toppingsText = selectedToppings.join(", ");
  
  // Get the selected payment method
  let selectedPayment = payment.selectedOptions[0].text;

  // Combine the values into a single string and write it to the Pizza paragraph
  pizzaParagraph.textContent = `Crust: ${selectedCrust}, Toppings: ${toppingsText}, Payment: ${selectedPayment}`;
  
  // Show the images
  document.getElementById("WayToGoImage").classList.remove("hidden");
  document.getElementById("FreddySmileImage").classList.remove("hidden");
};
