"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Rylee Leavitt
      Date:   12/1/24  

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

/* Step 3.) 
Good
   Go to the onload event handler for the fr (file reader) variable and add the following code:
      Pt #1 Add a command to convert the contents of the JSON data in fr.result into an object named staff.
      Pt #2 Call the makeStaffTable() function using staff as the parameter value. */

getFileButton.onchange = function() {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];
   
   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   // Once the file has finished loading, parse the JSON file
   fr.onload=function(){ 

      // Pt #1 convert the contents of the JSON data in fr.result into an object named staff. :RL
      let staff = JSON.parse(fr.result);
      
      // Pt #2 Call the makeStaffTable() function using staff as the parameter value :RL
      makeStaffTable(staff);
   }
};

function makeStaffTable(staff) {
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");

   /* Step 5.) 
   First create a table row containing the property names stored in the JSON file using the 
   properties from the first directory entry. Create a for in loop for the object stored in staff.directory[0] 
   and add the following commands to the loop: 
      Pt #1 Use the document.createElement() method to create a th element named headerCell.
      Pt #2 Store prop as the text content of headerCell.
      Pt #3 Use the appendChild() method to append headerCell to the headerRow object.
      Pt #4 After the for in loop completes, append headerRow to the staffTable object. */

   // Step 5.) Create a for in loop for the object stored in staff.directory[0] 
   for (let prop in staff.directory[0]) {
      // Step 5.) Pt #1: Use the document.createElement() method to create a th element named headerCell
      let headerCell = document.createElement("th");
         
      // Step 5.) Pt #2: Store prop as the text content of headerCell
      headerCell.textContent = prop;
      
      // Step 5.) Pt #3: Use the appendChild() method to append headerCell to the headerRow object
      headerRow.appendChild(headerCell);
   }

   // Step 5.) Pt #4: After the for in loop completes, append headerRow to the staffTable object
   staffTable.appendChild(headerRow);

   /* Step 6.) 
   Next, create table rows containing the property values for each entry in the directory array. Add a for loop that
   loops through the items of staff.directory. Within the for loop do the following: 
      Pt #1 Create an element node for the tr element and store it in the tableRow variable
      Pt #2 Create a for in loop for the properties listed in the staff.directory[i]. For each property do the following:
         * Create an element node for the td element and store it in the tableCell variable;
         * store the value of staff.directory[i][prop] as the text content of tableCell;
         * append tableCell to the tableRow object.
      Pt #3 After the for in loop completes, append tableRow to the staffTable object.*/

   // Step 6.) Create table rows containing the property values for each entry in the directory array
   for (let i = 0; i < staff.directory.length; i++) { //for loop that loops through the items of staff.directory. :RL

      // Step 6.) Pt #1: Create an element node for the tr element and store it in the tableRow variable
      let tableRow = document.createElement("tr");

      //  Step 6.) Pt #2: Create a for in loop for the properties listed in staff.directory[i]
      for (let prop in staff.directory[i]) {
         // * Create an element node for the td element and store it in the tableCell variable
         let tableCell = document.createElement("td");
         
         // * Store the value of staff.directory[i][prop] as the text content of tableCell
         tableCell.textContent = staff.directory[i][prop];
         
         // * Append tableCell to the tableRow object
         tableRow.appendChild(tableCell);
      }
      // Step 6.) Pt #3: After the for...in loop completes, append tableRow to the staffTable object
      staffTable.appendChild(tableRow);
   }

   /* Step 7.) 
   After the for loop is finished, use the appendChild() method to append staffTable to the containerBox object.*/
   let containerBox = document.getElementById("container"); 
   containerBox.appendChild(staffTable);
}

 // Handling file input change event
document.getElementById('getFile').onchange = function() {
   let JSONfile = this.files[0];
   let fr = new FileReader();
   fr.readAsText(JSONfile);

   fr.onload = function() {
       let staff = JSON.parse(fr.result);
       makeStaffTable(staff);
   }
};
