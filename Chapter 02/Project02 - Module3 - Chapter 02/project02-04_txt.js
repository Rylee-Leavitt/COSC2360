/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Rylee Leavitt
      Date:   9/23/24

      Filename: project02-04.js
 */
 
      const CHICKEN_PRICE = 10.95; 
      const HALIBUT_PRICE = 13.95; 
      const BURGER_PRICE = 9.95;
      const SALMON_PRICE = 18.95; 
      const SALAD_PRICE = 7.95;
      const SALES_TAX = 0.07;

// Function to display a numeric value as a text string in the format $##.## 

 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

   /*Directly above the calcTotal() function, insert an event handler that runs the calcTotal() 
   function when the element with id “chicken” is clicked. Repeat this for the elements with the
    id “halibut”, “burger”, “salmon”, and “salad”. */

    document.getElementById("chicken").addEventListener("click", calcTotal);
    document.getElementById("halibut").addEventListener("click", calcTotal);
    document.getElementById("burger").addEventListener("click", calcTotal);
    document.getElementById("salmon").addEventListener("click", calcTotal);
    document.getElementById("salad").addEventListener("click", calcTotal);

   function calcTotal() {

   // Declare the cost variable with an initial value of 0.

   let cost = 0

   /* Declare the buyChicken variable equal to the checked property of the element with the id “chicken”. 
   In the same way, declare the buyHalibut, buyBurger, buySalmon, and buySalad variables 
   equal to the checked property of elements with ids of “halibut”, “burger”, “salmon”, and “salad”, 
   respectively.
   */

   buyChicken = document.getElementById("chicken").checked;
   buyHalibut = document.getElementById("halibut").checked;
   buyBurger = document.getElementById("burger").checked;
   buySalmon = document.getElementById("salmon").checked;
   buySalad = document.getElementById("salad").checked;

   /* Use a comparison operator to increase the value of the cost variable by the value of the CHICKEN_PRICE 
   constant if buyChicken is true or by 0 if otherwise Do the same for the restof the variables */

   if (buyChicken) cost += CHICKEN_PRICE;
   if (buyHalibut) cost += HALIBUT_PRICE;
   if (buyBurger) cost += BURGER_PRICE;
   if (buySalmon) cost += SALMON_PRICE;
   if (buySalad) cost += SALAD_PRICE;

   /*Set the innerHTML property for the element with the id “foodTotal” to 
   the value returned by the formatCurrency() function using cost as the parameter value. */

   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
   
   //Declare the tax variable, setting its value equal to the cost variable multiplied by SALES_TAX.

   const tax = cost * SALES_TAX;

   /*Set the innerHTML property for the element with the id “foodTax” to the 
   value returned by the formatCurrency() function using tax as the parameter value.*/

   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   //Declare the totalCost variable, setting its value equal to the cost variable plus the tax variable.

   const totalCost = cost + tax;

   /*Set the innerHTML property for the element with the id “totalBill” to the value 
   returned by the formatCurrency() function using totalCost as the parameter value.*/

   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

 }