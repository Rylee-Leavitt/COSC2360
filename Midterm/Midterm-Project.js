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
let make = document.getElementById("crust");
let model = document.getElementById("toppings");
let trim = document.getElementById("payment");

// Option elements within the selection lists
let makeOptions = document.querySelectorAll("select#crust option");
let modelOptions = document.querySelectorAll("select#toppings option");
let trimOptions = document.querySelectorAll("select#payment option");

// The number of options within each selection list
let makes = makeOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;

// Form button to generate the complete text of the selected pizza
let selectPizza = document.getElementById("selectPizza");

// Paragraph containing the text of the selected Pizza
let Pizza = document.getElementById("Pizza");


 // Find the selectVehicle button and vehicle paragraph
var selectPizzaButton = document.getElementById('selectPizza');
var vehicleParagraph = document.getElementById('pizza');

// Add an onclick event handler
selectPizzaButton.onclick = function() {
  // Get the selected options from the three selection lists
  var crust = document.getElementById('crustSelect').selectedOptions[0].text;
  var toppings = document.getElementById('toppingsSelect').selectedOptions[0].text;
  var payment = document.getElementById('paymentSelect').selectedOptions[0].text;

  // Combine the values into a single string and write it to the vehicle paragraph
  PizzaParagraph.textContent = make + ' ' + model + ' ' + trim;
};


 