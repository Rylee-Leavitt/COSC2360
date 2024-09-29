/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Rylee Leavitt
      Date:   9/23/2024

      Filename: project02-01.js
 */
/* Create a function named FahrenheitToCelsius() containing a single parameter named degree. 
Insert a statement that returns the value of degree minus 32 and then divided by 1.8 */

FahrenheitToCelsius(degree) 
{
      return (degree-32) / 1.8;
}

//onchange event handler f-c

document.getElementById("cValue").onchange = function() {
      // Declare a variable named cDegree equal to the value of the element with the id "cValue"
      var cDegree = document.getElementById("cValue").value;
      document.getElementById("cValue").value = CelsiusToFahrenheit(cDegree);
      
}

/* Create a function named CelsiusToFahrenheit() containing a single parameter named degree. 
Insert a statement that returns the value of degree minus 32 and then divided by 1.8 */

CelsiusToFahrenheit(degree) 
{
      return (degree * 1.8) + 32;

}

//onchange event handler c-f

document.getElementById("fValue").onchange = function() {
      // Declare a variable named fDegree equal to the value of the element with the id "fValue"
      var fDegree = document.getElementById("fValue").value;
      document.getElementById("fValue").value = FahrenheitToCelsius(fDegree);
      
}