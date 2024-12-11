"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Rylee Leavitt
      Date:   12/10/24

      Filename: project09-01b.js
*/

// Apply the slice() method to the location.search object, storing the text after the first character in the query variable.
let query = location.search.slice(1);

// Use the replace() method to replace every occurrence of the + character in the query variable with a blank space. 
query = query.replace(/\+/g, " ");

// //Apply the decodeURIComponent() method to replace every URI-encoded character in query with the matching character.
query = decodeURIComponent(query);

/* Apply the split() method to the query string to split the text at every occurrence of the & character, 
placing each name=value pair as a separate item in the cardFields array.*/
let queryString = "name=John&age=30&city=New York";
let cardFields = query.split('&');


//Create a for of loop that loops through every item in the cardFields array. At each iteration of the loop do the following:

for (let field of cardFields) {

    // Split each item at the '=' character
    let nameValue = field.split('=');
    

    // Store the first item in the nameValue array in the 'name' variable
    let name = nameValue[0];
    
    // Store the second item in the nameValue array in the 'value' variable
    let value = nameValue[1];
    
    // Store the value of the 'value' variable as the text content of the document element with an id equal to the 'name' variable
    document.getElementById(name).textContent = value;
}
