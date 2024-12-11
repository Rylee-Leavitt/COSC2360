"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Rylee Leavitt
      Date:   12/10/24

      Filename: project09-02b.js
*/

/* Page Objects */

document.getElementById("riderName").textContent = sessionStorage.getItem("riderName");
document.getElementById("ageGroup").textContent = sessionStorage.getItem("ageGroup");
document.getElementById("bikeOption").textContent = sessionStorage.getItem("bikeOption");
document.getElementById("routeOption").textContent = sessionStorage.getItem("routeOption");
document.getElementById("accOption").textContent = sessionStorage.getItem("accOption");
document.getElementById("region").textContent = sessionStorage.getItem("region");
document.getElementById("miles").textContent = sessionStorage.getItem("miles");
document.getElementById("comments").textContent = sessionStorage.getItem("comments");



