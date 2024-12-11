"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Rylee Leavitt
      Date:   12/10/24  

      Filename: project10-01.js
*/

const puzzleBoard = document.getElementById("puzzleBoard");
let zCounter = 1;
let intList = new Array(48);
let pointerX, pointerY, pieceX, pieceY;

for (let i = 0; i < 48; i++) {
    intList[i] = i + 1;
}
intList.sort(() => 0.5 - Math.random());

//generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
    let piece = document.createElement("img");
    piece.src = "PuzzleImages/piece" + intList[i] + ".png";
    let rowNum = Math.ceil((i + 1) / 8);
    let colNum = (i + 1) - (rowNum - 1) * 8;
    piece.style.top = (rowNum - 1) * 98 + 7 + "px";
    piece.style.left = (colNum - 1) * 98 + 7 + "px";
    piece.draggable = false;
    piece.classList.add("piece");
    puzzleBoard.appendChild(piece);

    // Add event listeners to each piece
    piece.addEventListener('pointerdown', grabPiece);
}

//added by Rylee
//Create the grabPiece() function. Within the function do the following:
function grabPiece(e) {

   console.log("grabPiece called");

   //Set the value of the pointerX and pointerY variables to the values of the clientX and clientY properties of the event object.
   pointerX = e.clientX;
   pointerY = e.clientY;

   //Set the value of the touchAction style for the event target to “none”.
   e.target.style.touchAction = 'none';

   //Increase the value of the zCounter variable by 1 and apply that value to the zIndex style of the event target.
   zCounter++;
   e.target.style.zIndex = zCounter;

   //Set the value of the pieceX and pieceY variables to the values of the offsetLeft and offsetTop properties of the event target.
   pieceX = e.target.offsetLeft;
   pieceY = e.target.offsetTop;

   //Add an event listener to the event target that runs the movePiece() function in response to the pointermove event. 
   e.target.addEventListener('pointermove', movePiece);

   //Add an event listener to the event target that runs the dropPiece() function in response to the pointerup method.
   e.target.addEventListener('pointerup', dropPiece);
}

//Create the movePiece() function. Within the function do the following:
function movePiece(e) {

   console.log("movePiece called");

   let diffX = e.clientX - pointerX;   //Declare the diffX variable, setting it equal to the difference between e.clientX and pointerX. 
   let diffY = e.clientY - pointerY;   //Declare the diffY variable setting it equal to the difference between e.clientY and pointerY.

   //Set the value of the left style property of the event target to sum of pieceX and diffX plus the text string “px”. 
   e.target.style.left = (pieceX + diffX) + 'px';
   
   //Set the value of the top style property of the event target to sum of pieceY and diffY plus the text string “px”.
   e.target.style.top = (pieceY + diffY) + 'px';
}

//Create the dropPiece() function. Within the function do the following:
function dropPiece(e) {

   console.log("dropPiece called");

   //Remove the movePiece() function from the event listener for the pointermove event.
   e.target.removeEventListener('pointermove', movePiece);

   //Remove the dropPiece() function from the event listener for the pointerup event.
   e.target.removeEventListener('pointerup', dropPiece);
}

