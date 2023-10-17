//! Date:
//? The toDateString() Method Convert a date to a date string:
//* Tue Oct 03 2023
// const d = new Date();
// console.log(d.toDateString()); //toUTCString()
// console.log(d.getFullYear());
// console.log(d.getMonth() + 1);
// console.log(d.getDate());
// console.log(d.setFullYear(2020))
////////////////////////////////////////////////////////////////////////
//! Math:
// console.log(Math.round(10.335))
// console.log(Math.ceil(10.335)) //*up to
// console.log(Math.floor(10.335)) //* down to
// console.log(Math.abs(-5))
// console.log(Math.min(0, 150, 30, 20, -8, -200))//*Math.max()
////////////////////////////////////////////////////////////////////////////
//! Boolean:
// let age = 19;
// let voteable = (age < 18) ? "Too young" : "Old enough";
// console.log(voteable);
////////////////////////////////////////////////////////////////////////////////
//! Conditions:
// switch(expression) {
//   case x:
    //* code block
//     break;
//   case y:
    //* code block
//     break;
//   default:
    //* code block
// }

// switch (new Date().getDay()) {
//     case 4:
//     case 5:
//       text = "Two cases with the same code";
//       break; }

/////////////////////////////////////////////////////////////////////////
//!Loops:
// const person = [1,2,3,4];

// let text = "";
// for (let x in person) {
//   text += person[x] + ' ';
// }
// console.log(text);

//* Array.forEach():
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value;
// }
// console.log(txt)

//*Looping over a String:
// let language = "JavaScript";
// let text = "";
// for (let x of language) {
// text += x + ' ';
// }
// console.log(text)

///////////////////////////////////////////////////////////////////
//! JS Sets:
//? A JavaScript Set is a collection of unique values.
//? Each value can only occur once in a Set. won't be added if already exists

//* Create a Set
// const letters = new Set(["a","b","c"]);
// let text = '';
// letters.add('d'); //* add a value
// letters.add('c'); //* won't be added
// console.log(letters.size); //* check Set size

// letters.forEach (function(value) { //* loop over Set's elements
//     text += value;
// })
// console.log(text);

//* Can use for of loop with values() method:
// for (const x of letters.values()) {
//     text += x;
// }
// console.log(text);
/////////////////////////////////////////////////////////////////////////////////
//! Maps:
//* Create a map, 2 options:
//* Option 1:
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   fruits.set("apples", 600);
//   console.log(fruits.get('apples'))
//   console.log(fruits.has("apples"))
//*Option 2:
// const veg = new Map();
// veg.set("potatoes", 200);
// veg.set("carrots", 100);
// veg.set("onions", 50);
// veg.delete("onions");
// console.log(veg.size)

//* Loop over a Map:
// let text = "";
// fruits.forEach (function(value, key) {
//   text += key + ' = ' + value + ' '
// })
// console.log(text)
////////////////////////////////////////////////////////////////////
//!Conversion:
//* To a string:
// let x = 10.355;
// String(x) //* Or x.toString()
// String(123) //* Or (123).toString()
// String('Ismail') //* returns a NaN(type Number)
// console.log(x.toFixed(2))
// console.log(x.toPrecision(3))
//* String to an Array:
// let string = Array.from("ABCDEFG")
// console.log(string[1])
///////////////////////////////////////////////////////////////////////
//!Regular Expression: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//? We can only use 3 methods: match(), search(), replace() and replaceAll();
// let text = 'Ismail Bardach, 205$'
// let position = text.search(/b/i);
// let result = text.match(/[ha]/ig);
// let digit = text.match(/\d/g);
// console.log(result)
// console.log(position)
// console.log(digit)

//* Using test(): It searches a string for a pattern, and returns true or false, depending on the result.
// const pattern = /d/; 
// console.log(pattern.test(text))
//* can be written like this:
// console.log(/e/.test(text))

//* Using exec(): It searches a string for a specified pattern, and returns the found text as an object.
//* If no match is found, it returns an empty (null) object.
// const obj = /fe/.exec("The best things in life are free!");
// console.log(obj)
// console.log("Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input)
//? complete reference: https://www.w3schools.com/js/js_regexp.asp

//* Matching all letters: \w (\W) | Matching all digits: \d (\D) | Matching whitespace : \s (\S)
// let pattern = /\w/g;
// let result = text.match(pattern);

//* Do a global search for at least one character:
// let pattern = /o+/g; 

//* Do a global search for at least one word character: 
// let pattern = /\w+/g;
//* Do a global search for a "1", followed by zero or one "0" characters:
// let text = "1, 100 or 1000?";
// let pattern = /10?/g;

//* A global search for a substring that contains a sequence of four digits:
// let text = "100, 1000 or 10000?";
// let pattern = /\d{4}/gmi;
// let pattern2 = /\d{2,4}/gmi;
// let pattern3 = /\d{3,}/gmi;

//* A search for "is" followed by '+' or not followed "all":
// let text = "Is this + there is";
// let pattern = /is(?= +)/g; //followed
// let pattern2 = /is(?! all)/gi; // not followed

//* The lastIndex property:
// let text = "The rain in Spain stays mainly in the plain";
// let text2 = "ain't no fool"
// let pattern = /ain/g;
// let result = "";
// while (pattern.test(text)==true) {
//   result += "Found at pos " + pattern.lastIndex + " ";
// }
// console.log(result)

//* replace():
// let text = 'Mr Blue has a blue house and a blue car.'
// let result = text.replace(/house|car/gi, function (x) {
//   return x.toUpperCase();
// });
// console.log(result)

//? The indexOf() method cannot search against a regular expression.
//? The search() cannot take a start position argument.
///////////////////////////////////////////////////////////////////////////
//! try, throw and catch:
// let message = '2';
//   try {
//     if(message == "")  throw "empty";
//     if(isNaN(message)) throw "not a number";
//     message = Number(message);
//     if(message < 5)  throw "too low";
//     if(message > 10)   throw "too high";
//   }
//   catch(err) {
//     console.log('input is ' + err)}
//   finally {
//     console.log("it works");
//   }
///////////////////////////////////////////////////////////////////////////
//! Strict Mode:
// "use strict"
// x = 5;
// console.log(x)
////////////////////////////////////////////////////////////////////////////
//! String methods:
//* padEnd():
// let text = "5";
// let padded = text.padEnd(4,"x");
// let padded2 = padded.padStart(8,"0");
// console.log(padded)
// console.log(padded2)

//* String prototype:
//? Use the prototype property to add a new property to all objects of a given type:
// function employee(name, jobtitle, born) {
//   this.name = name;
//   this.jobTitle = jobtitle;
//   this.born = born;
// }
// employee.prototype.salary = 2000;

// const fred = new employee("Fred Flintstone", "Caveman", 1970);
// console.log(fred.born)

//* written differently (with no constructing function) must study deeper
// const object = {name: 'Ismail', age: 23}
// object.salary = 3200;
// console.log(object.salary)

//* Split String:
//? it return an array of a splitted string at a specific character;
// let text = "55+60*2";
// const myArray = text.split('+');
// console.log(myArray)

//* String substring():
//?The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
// let text = "Hello world!";
// let result = text.substring(1, 4);
// console.log(result)
//* String substr():
//? The substr() method begins at a specified position, and returns a specified number of characters.
// let text = "Hello world!";
// let result = text.substr(1, 4);
// console.log(result)
///////////////////////////////////////////////////////////////////////
//!DOM:
//* HTML Collection Object returned by:
// The getElementsByTagName() Method
// The getElementsByClassName() Method
// The children Property
//+ Methods to use:
// item() document.getElementsByTagName("p").item(0).innerText // Can simply use list[0]
// namedItem() ; elements.namedItem("hoho").innerText;
// length
//? IMPORTANT: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp
// HTMLCollection items can be accessed by their name, id, or index number.
// NodeList items can only be accessed by their index number.

//* HTML DOM NodeList returned by:
// The childNodes() Method
// The querySelectorAll() Method
// The getElementsByName() Method
//+ Methods to use:
// forEach() https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_nodelist_foreach_body
// keys() method returns an Iterator with the keys from a NodeList. https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_nodelist_keys_body
// values() unlike keys() this last returns the values of the nodes.

//* DOMTokenList:
//? classList returns an array of all the classes in the DOM element we can:
//+DOM TokenList add(), remove(), toggle(), replace(class1, class2):
// element.classList.add("myStyle", "anotherClass", "thirdClass");
//+contains(): // true of false
// let x = element.classList.contains("myStyle");

//* DOM styles: https://www.w3schools.com/jsref/dom_obj_style.asp ( to review individually )
//? How to access the DOM's style tag parts:
// function myFunction() {
//     var x = document.getElementsByTagName("STYLE")[0];
//     document.getElementById("demo").innerHTML = x.innerHTML;
// }
//? How to create a style inside style element:
// function myFunction() {
//     var x = document.createElement("STYLE");
//     var t = document.createTextNode("body {font: 20px verdana;}");
//     x.appendChild(t);
//     document.head.appendChild(x);
// }
//+ Access style elements from CSS:
//> Option 1:
// element.style.getPropertyValue("--my-var");//* get variable from inline style
//> Option 2:
// getComputedStyle(element).getPropertyValue("--my-var");//* get variable from wherever
//> Option 3:
// element.style.setProperty("--my-var", jsVar + 4);//* set variable on inline style
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//! Events:
//? Different types of event objects: https://www.w3schools.com/jsref/dom_obj_event.asp

//! The Window Object:
//? Creating and Closing new windows : https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_closed
//* All Window Object Properties: https://www.w3schools.com/jsref/obj_window.asp
//* Window Object Methods : https://www.w3schools.com/jsref/obj_window.asp

//+ windows screen Methods:
// console.log(screen.availHeight) // Only works in the browser with a window open.
// console.log(screen.width) // Only works in the browser with a window open.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// !Web APIs
//> Canvas:
//* Must create a Canvas first: <canvas id="myCanvas" width="300" height="150" style="border:1px solid grey"></canvas>
//* Must include : let var = getContext("2d")
//* Then draw in the canvas using JavaScript : The common way to draw on the canvas is to:
// Begin a Path - beginPath()
// Move to a Point - moveTo()
// Draw in the Path - lineTo()
// Draw the Path - stroke()
//? Good example : https://www.w3schools.com/jsref/tryit.asp?filename=tryhtml5_canvas_stroke:
//+ Canvas fillRect() Method: 
// ctx.globalAlpha = 0.2; //* You can sit the transparency before drawing 1 or more shapes
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100); //* Shorthand for begin , end , path (use this instead!!!)
//? Good example : https://www.w3schools.com/jsref/tryit.asp?filename=tryhtml5_canvas_strokerect

//> GREAT EXAMPLE:
/* <canvas id="myCanvas"> //* Create a canvas in HTML 
Your browser does not support the canvas tag. //* The text is never visible ( canvas are always transparent)
</canvas> */

/* <script> //* Canvas can only be filled by script
let c = document.getElementById("myCanvas"); //* Get the element canvas
let ctx = c.getContext("2d"); //* Choose it to be 2D or 3D
ctx.fillStyle = "red"; //* Choose a style
ctx.fillRect(20, 20, 75, 50); //* choose the dimensions of the rect

//* Turn transparency on

ctx.globalAlpha = 0.2; //* set a different opacity
ctx.fillStyle = "blue"; //* draw other Rect
ctx.fillRect(50, 50, 75, 50);
ctx.fillStyle = "green";
ctx.fillRect(80, 80, 75, 50);
</script> */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//! cloneNode : 
//? The cloneNode() method creates a copy of a node, and returns the clone.
//? The cloneNode() method clones all attributes and their values.
//? Set the deep parameter to true if you also want to clone descendants (children).

// const node = document.getElementById("myList2").lastChild;
// const clone = node.cloneNode(true);
// document.getElementById("myList1").appendChild(clone);
/////////////////////////////////
//! forms: 
//+ Constraint Validation DOM Methods
// checkValidity()	//* Returns true if an input element contains valid data.
// setCustomValidity()	//* Sets the validationMessage property of an input element.

//+ Constraint Validation DOM Properties:
// validity	//*Contains boolean properties related to the validity of an input element.
// validationMessage	//* Contains the message a browser will display when the validity is false.
// willValidate	//* Indicates if an input element will be validated.

//? validity Properties:
// customError	//* Set to true, if a custom validity message is set.
// patternMismatch	//* Set to true, if an element's value does not match its pattern attribute.
// rangeOverflow	//* Set to true, if an element's value is greater than its max attribute.
// rangeUnderflow	//* Set to true, if an element's value is less than its min attribute.
// tooLong	//* Set to true, if an element's value exceeds its maxLength attribute.
// typeMismatch	//* Set to true, if an element's value is invalid per its type attribute.
// valueMissing	//* Set to true, if an element (with a required attribute) has no value.
// valid	//* Set to true, if an element's value is valid.

//> Example:<script>
//* HTML:
/* <input id="id1" type="number" max="100" min="20">
<button onclick="myFunction()">OK</button> */
//* JS:
// function myFunction() {
//     let text;
//     if (document.getElementById("id1").validity.rangeOverflow) { //* validity property has properties
//       text = "Value too large";}
//   else if(document.getElementById("id1").validity.rangeUnderflow) //* validity property has properties
//   {text = "Value too low";}
//      else {
//       text = "Input OK";
//     } 
//     document.getElementById("demo").innerHTML = text;
//   }
//   </script>



