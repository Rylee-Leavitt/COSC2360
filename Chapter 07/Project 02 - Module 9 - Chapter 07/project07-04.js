"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Rylee Leavitt
      Date:   11/18/24

      Filename: project07-04.js
*/

let customers = ["Alijah Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

// Add an onclick event handler for the addButton object.
   addButton.onclick = function() {
   
   // Use the push() method to add the value of the customerName object to the end of the customers array
   customers.push(customerName.value);

   // Run the generateCustomerList() function to update the contents of the ordered list
   generateCustomerList();

   // Change the text of the status paragraph to indicate the customer was added
   status.textContent = `${customerName.value} added to the end of the queue`;
}

// Add an onclick event handler for the searchButton object
searchButton.onclick = function() {

   // Use the indexOf() method to find the index of the item that matches customerName.value
   let index = customers.indexOf(customerName.value);
   
   // Add 1 to the index value and store the result in the place variable
   let place = index + 1;
   
   // If place is 0, the customer was not found; otherwise, update the status with the position
   if (place === 0) {
       status.textContent = `${customerName.value} is not found in the queue.`;
   } else {
       status.textContent = `${customerName.value} found in position ${place} of the queue.`;
   }
}

// Add an onclick event handler for the removeButton object.
removeButton.onclick = function() {

   // Use the indexOf() method to find the index of the item that matches customerName.value
   let index = customers.indexOf(customerName.value);

   // If index is not equal to -1, remove the item, update status, and call generateCustomerList
   if (index !== -1) {

       // Use the splice() method to remove one item at the index position
       customers.splice(index, 1);

       // Change the text of the status paragraph
       status.textContent = `${customerName.value} removed from the queue`;

       // Call the generateCustomerList() function to update the list
   }
}

// Add an onclick event handler for the topButton object.
topButton.onclick = function() {

   // Apply the shift() method to remove the first item and store it in topCustomer
   let topCustomer = customers.shift();
   
   // Change the text of the status paragraph
   status.textContent = `${topCustomer} removed from the queue`;
   
   // Call the generateCustomerList() function to update the ordered list
   generateCustomerList();
}



