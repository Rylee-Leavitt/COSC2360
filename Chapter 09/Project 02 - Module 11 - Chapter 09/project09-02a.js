"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Rylee Leavitt
      Date:   12/10/24

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

//At the bottom of the file insert an onclick button that runs the showData() function when the Submit button is clicked.
document.getElementById("submitButton").onclick = showData;

//Add the showData() function and within the function insert the following commands:
function showData() {

      //Insert a command to store the value of the riderName object in a session storage object named riderName.
      sessionStorage.setItem("riderName", document.getElementById("riderName").value);

      //Insert a command to store the value of the ageGroup object in a session storage object named ageGroup.
      sessionStorage.setItem("ageGroup", document.getElementById("ageGroup").value);

      //Insert a command to store the value of the bikeOption object in a session storage object named bikeOption.
      sessionStorage.setItem("bikeOption", document.getElementById("bikeOption").value);

      //Insert a command to store the value of the routeOption object in a session storage object named routeOption.
      sessionStorage.setItem("routeOption", document.getElementById("routeOption").value);

      //Insert a command to store the value of the accOption object in a session storage object named accOption.
      sessionStorage.setItem("accOption", document.getElementById("accOption").value);

      //Insert a command to store the value of the region object in a session storage object named region.
      sessionStorage.setItem("region", document.getElementById("region").value);

      //Insert a command to store the value of the miles object in a session storage object named miles.
      sessionStorage.setItem("miles", document.getElementById("miles").value);

      //Insert a command to store the value of the comments object in a session storage object named comments.
      sessionStorage.setItem("comments", document.getElementById("comments").value);

    // Navigate to the next page
    location.href = "project09-02b.html";
}

document.getElementById("submitBtn").onclick = showData;


