"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Rylee Leavitt
      Date:   11/18/24

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/

/* Directly below the Object Code comment create an object literal named box 
with its width and height properties equal to BOX_WIDTH and BOX_HEIGHT and its 
xPos and yPos properties equal to 0. 
- Instructions*/

let box = {
   width: BOX_WIDTH,
   height: BOX_HEIGHT,
   xPos: 0,
   yPos: 0
}

/*Create a constructor function for the ball class. The constructor function has a 
single parameter named size. Within the constructor function set the value of the 
radius property to size and the xPos, yPos, xVelocity, and yVelocity properties to null. 
- Instructions*/

function Ball(size) {
   this.radius = size;
   this.xPos = null;
   this.yPos = null;
   this.xVelocity = null;
   this.yVelocity = null;
}

Ball.prototype.moveWithin = function(container) {
   /* 1)Set the top and left positions of the ball by creating the ballTop variable equal to this.yPos
   and the ballLeft variable equal to this.xPos. 2) Set the bottom and left positions of the ball by 
   creating the ballBottom variable equal to this.yPos + this.radius and the ballRight variable equal 
   to this.xPos + this.radius. - instructions*/

   // Create variables for the top and left bottom and right positions of the ball : RL
   let ballTop = this.yPos;
   let ballLeft = this.xPos;
   let ballBottom = this.yPos + this.radius;
   let ballRight = this.xPos + this.radius; //If I were to use ballLeft I would be redeclaring the block scoped variable?

   /* 3) If ballTop is less than zero or ballBottom is greater than container.height, 
   then bounce the ball vertically by (i) increasing container.yPos by the value of this.yVelocity and 
   (ii) setting this.yVelocity = –this.yVelocity.  - instructions*/

   // Check if the ball hits the top or bottom of the container and bounce it vertically : RL
   if (ballTop < 0 || ballBottom > container.height) {
       this.yPos += this.yVelocity;
       this.yVelocity = -this.yVelocity;
   }

   /* 4) If ballLeft is less than zero or ballRight is greater than container.width, then bounce the ball 
   horizontally by (i) increasing container.xPos by the value of this.xVelocity and (ii) setting 
   this.xVelocity = –this.xVelocity. - instructions*/

   // Check if the ball hits the left or right of the container and bounce it horizontally : RL
   if (ballLeft < 0 || ballRight > container.width) {
       this.xPos += this.xVelocity;
       this.xVelocity = -this.xVelocity;
   }

   /* 5)Move the ball within the container by increasing the value of this.yPos by this.yVelocity 
   and by increasing the value of this.xPos by this.xVelocity. - instructions*/

   // Move the ball within the container : RL
   this.yPos += this.yVelocity;
   this.xPos += this.xVelocity;
}


/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px"

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {
      
   let ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";
   ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
   ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";
   
   // Append the ball image to the box
   boxImage.appendChild(ballImage);     
}


/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size*Math.random();
}

/*Create an instance of a ball object with the following properties: - Instructions*/

/*Store an instance of the ball object in a variable named newBall with a size value equal to BALL_RADIUS. - Instructions*/
let newBall = new Ball(BALL_RADIUS);

/*Center the newBall within the container by setting the yPos property to (BOX_HEIGHT – BALL_RADIUS)/2 
and the xPos property to (BOX_WIDTH – BALL_RADIUS)/2. - Instructions*/
newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;
newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;

/* Give newBall an initial random velocity by calling the rand() function, 
setting the value of the yVelocity and xVelocity properties to rand(–10, 10). - Instructions */
newBall.yVelocity = rand(-10, 10);
newBall.xVelocity = rand(-10, 10);

/*Animate the motion of newBall by calling the window.setInterval() method. Within the method,
run the following code in an anonymous function every 25 milliseconds: - Instructions*/

window.setInterval(function() {
   /*Apply the moveWithin() method to newBall with box as the value of the container parameter.
   - Instructions */
   newBall.moveWithin(box);

   /*Move the image of the ball by setting ballImage.style.top equal to newBall.yPos + "px" 
   and ballImage.style.left equal to newBall.xPos + "px". - Instructions */
   ballImage.style.top = newBall.yPos + "px";
   ballImage.style.left = newBall.xPos + "px";

   /*Shake the image of the container by setting boxImage.style.top equal to box.yPos + "px" 
   and boxImage.style.left equal to box.xPos + "px". - Instructions */
   boxImage.style.top = box.yPos + "px";
   boxImage.style.left = box.xPos + "px";
}, 25);

window.setInterval(function() {
   newBall.moveWithin(box);

   // Assuming ballImage is the reference to the ball element in the DOM
   ballImage.style.top = newBall.yPos + "px";
   ballImage.style.left = newBall.xPos + "px";

   boxImage.style.top = box.yPos + "px";
   boxImage.style.left = box.xPos + "px";
}, 25);
