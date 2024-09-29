/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Rylee Leavitt
      Date:   0/28/24

      Filename: project03-01.js
*/

/*declare a variable named menuItems containing the collection
of HTML elements belonging to the menuItem class using the getElementsByClassName() method. */

var menuItems = document.getElementsByClassName("menuItem");

/*Create a for loop that loops through the contents of the menuItems collection with a counter 
variable that starts with an initial value of 0 up to a value less than the length of the menuItems collection.*/

//Increase the counter by 1 with each iteration. i++

for (var i = 0; i < menuItems.length; i++)  {

      /*Within the for loop, add an event listener to the menuItems[i] element in the collection 
      (where i is the value of the counter), running the calcTotal() function when that item is clicked.*/

      menuItems[i].addEventListener("click",function(){
            calcTotal ();
      });

}

/*Create the calcTotal() function to calculate the total cost of the customer order given the selected menu items.
Add the following commands to the function:*/

function calcTotal () {

      //Declare the orderTotal variable, setting its initial value to 0.
      var orderTotal = 0;

      //Create a for loop that loops through the contents of the menuItems collection
      for (var i = 0; i < menuItems.length; i++)  {
            
      //For menuItems[i] (where i is the counter), apply an if statement that tests whether the item has been checked.
      if (menuItems[i].checked) {

            /*If true, increase the value of the orderTotal variable by the value of menuItems[i]. 
            (Hint: Use the Number() function to convert the value of menuItems[i] to a number.) */
            orderTotal += Number(menuItems[i].value);
            }
      }

/*After the for loop, insert a command to change the innerHTML property of the element with the id "billTotal" 
to the value returned by the formatCurrency() function using orderTotal as the parameter value.*/

document.getElementById("billTotal").innerHTML= formatCurrency (orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }