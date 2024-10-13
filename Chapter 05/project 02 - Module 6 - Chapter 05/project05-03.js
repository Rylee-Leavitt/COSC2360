"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Rylee Leavitt
      Date:   10/13/2024

      Filename: project05-03.js
*/

// Declare variables
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

/* Create a for loop using the code structure described above going from the first child
 element of the sourceDoc variable through the last child where the next sibling element would be null.*/
for (let n = sourceDoc.firstChild; n !== null; n = n.nextSibling) {
      if (n.nodeName === heading) {
          let anchor = document.createElement("a");
          anchor.name = "doclink" + headingCount;
          n.insertBefore(anchor, n.firstChild);
          
          let listItem = document.createElement("li");
          let link = document.createElement("a");
          listItem.appendChild(link);
          
          link.textContent = n.textContent;
          link.href = "#doclink" + headingCount;
          
          toc.appendChild(listItem);
          headingCount++;
      }
  }