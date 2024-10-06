<!DOCTYPE html>
<html>
<head>
   <!--
      JavaScript 7th Edition
      Chapter 2
      Hands-on Project 2-1

      Author: Rylee Leavitt
      Date:   9/23/24

      Filename: index.htm
   -->
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width,initial-scale=1.0">
   <title>Hands-on Project 2-1</title>
   <link rel="stylesheet" href="styles.css" />
   <script src="project02-01_txt.js"defer></script>
</head>

<body>
   <header>
      <h1>Hands-on Project 2-1</h1>
   </header>

   <article>
      <h2>Fahrenheit (&#176; F) to Celsius (&#176; C) converter</h2>
      <form>
         <div>
            <h3>Temp in &#176; F</h3>
            <input type="number" id="fValue" value="32" />
         </div>
         <div id="arrow">&harr;</div>
         <div>
            <h3>Temp in &#176; C</h3>
            <input type="number" id="cValue" value="0" />            
         </div>
     </form>
     <footer>
        Enter a Fahrenheit or Celsius temperature in either input box and press Tab to convert.
     </footer>
   </article>
</body>
</html>
