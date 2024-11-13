"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: Rylee Leavitt
      Date:   11/12/2024

      Filename: project06-04.js
*/

// Selection lists in the web form
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");

// Option elements within the selection lists
let makeOptions = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");

// The number of options within each selection list
let makes = makeOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");


// Event handler to modify the content of the Model selection list
// when the Make selection list changes

make.onchange = function() {
   let makeIndex = make.selectedIndex;
   let makeCategory = make.options[makeIndex].text;
   
   if (makeIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }  
}

// Event handler to modify the content of the Trim selection list
// when the Model selection list changes

model.onchange = function() {
   let modelIndex = model.selectedIndex;
   let modelCategory = model.options[modelIndex].text;
   
   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }     
}

function showAll(selectList) {
   // Declare a variable named options that references the collection of option elements within selectList
   var options = selectList.options;
 
   // Declare a variable named optionLength equal to the length of the options node list
   var optionLength = options.length;
 
   // Add a for loop that iterates through the items in the options node list
   for (var i = 0; i < optionLength; i++) {

     // Change the value of the style.display property to "block" in order to display the option within the selection list
     options[i].style.display = "block";
   }
 }
 
function filterSelect(selectList, category) {
   // Declare a variable named options that references the collection of option elements within selectList
   var options = selectList.options;
 
   // Declare a variable named optionLength equal to the length of the options node list
   var optionLength = options.length;
 
   // Add a for loop that iterates through the items in the options node list
   for (var i = 0; i < optionLength; i++) {
     // Insert an if else statement that sets the style.display property of the item
     if (options[i].className === category) {
       options[i].style.display = "block";
     } else {
       options[i].style.display = "none";
     }
   }
 }

 // Find the selectVehicle button and vehicle paragraph
var selectVehicleButton = document.getElementById('selectVehicle');
var vehicleParagraph = document.getElementById('vehicle');

// Add an onclick event handler
selectVehicleButton.onclick = function() {
  // Get the selected options from the three selection lists
  var make = document.getElementById('makeSelect').selectedOptions[0].text;
  var model = document.getElementById('modelSelect').selectedOptions[0].text;
  var trim = document.getElementById('trimSelect').selectedOptions[0].text;

  // Combine the values into a single string and write it to the vehicle paragraph
  vehicleParagraph.textContent = make + ' ' + model + ' ' + trim;
};


 