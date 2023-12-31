//! Hide an Element - display:none or visibility:hidden?
//?Hiding an element can be done by setting the display property to none.
//?The element will be hidden, and the page will be displayed as if the element is not there
// display: none;
//?visibility:hidden; also hides an element. However, the element will still take up the same space as before.
//? The element will be hidden, but still affect the layout
//visibility: hidden;
////////////////////
//! Max-width and Width:
//?Using max-width instead, in this situation, will improve the browser's handling of small windows. 
//? This is important when making a site usable on small devices.
// div.ex1 {
//     width: 500px;
//     margin: auto;
//     border: 3px solid #73AD21;
//   } //+ this div's block will not shrink to adjust to small screens but will create a scrollbar.

//   div.ex2 {
//     max-width: 500px;
//     margin: auto;
//     border: 3px solid #73AD21;
//   } //+ this div's block will adjust accordingly.
/////////////////////
//! The position Property:
//? There are five different position values:
//> static: is not positioned in any special way;
//> relative: is positioned relative to its normal position. Set the top, right, bottom, and left
//> fixed: is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. floating not interfering with the layout
//> absolute: An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
//+ position absolute important example: https://www.w3schools.com/css/tryit.asp?filename=trycss_position_absolute
//> sticky: is positioned based on the user's scroll position. A sticky element toggles between relative and fixed, depending on the scroll position. 
//? HTML elements are positioned 'static' by default.
//////////////////////////////
//! The z-index Property:
//? When elements are positioned, they can overlap other elements, it specifies the stack order of an element (which element should be placed in front of, or behind, the others).
//+ Note: z-index only works on positioned elements.
// img {
//     position: absolute;
//     left: 0px;
//     top: 0px;
//     z-index: -1;
//   }
//* Because img has a z-index of -1, it will be positioned behind everything else.
//* Nice example: https://www.w3schools.com/css/tryit.asp?filename=trycss_zindex2
//> If two positioned elements overlap each other without a z-index specified, the element defined last in the HTML code will be shown on top.
////////////////////////////////
//! CSS Layout - Overflow:
//? The CSS overflow property controls what happens to content that is too big to fit into an area.
//> visible - Default. The overflow is not clipped. The content renders outside the element's box
//> hidden - The overflow is clipped, and the rest of the content will be invisible
//> scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
//> auto - Similar to scroll, but it adds scrollbars only when necessary

//+ overflow-x specifies what to do with the left/right edges of the content.
//+ overflow-y specifies what to do with the top/bottom edges of the content.
// overflow-x: hidden;
// overflow-y: scroll;
/////////////////////////////////
//! CSS Layout - float and clear
//+ float property:
//? The CSS float property specifies how an element should float.
//? The CSS clear property specifies what elements can float beside the cleared element and on which side.
// img {
//   float: right or left or none or inherit;
// }
//+ clear property:
//? The clear property specifies what should happen with the element that is next to a floating element.
// .div3 {
//     float: left;
//     padding: 10px;  
//     border: 3px solid #73AD21;
//   }
//   .div4 {
//     padding: 10px;
//     border: 3px solid red;
//     clear: left;
//   }
//+ The clearfix Hack IMPORTANT:
// https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_clearfix
//> A safer option: 
// .clearfix::after {
//   content: "";
//   clear: both;
//   display: table;
// }
///////////////////////////////////////////
//! Align Elements:
//+ Center:
// .center {
//     margin: auto; //* To horizontally center a block element (like <div>), use margin: auto;
//     width: 50%; //* Setting the width of the element will prevent it from stretching out to the edges of its container.
        //* Center aligning has no effect if the width property is not set (or set to 100%).
//     border: 3px solid green;
//     padding: 10px;
//   }
//> Center an Image:
// img {
//     display: block; //* make it into a block element:
//     margin-left: auto; 
//     margin-right: auto; //* To center an image, set left and right margin to auto
//     width: 40%;
//   }

//+ Left and Right Align:
//> One method for aligning elements is to use position: absolute;:
// .right {
//*     position: absolute;
//*     right: 0px;
//*     width: 300px;
//     border: 3px solid #73AD21;
//     padding: 10px;
//   }
//> One method for aligning elements is to use float:

// .right {
//*     float: right;
//*     width: 300px;
//     border: 3px solid #73AD21;
//     padding: 10px;
//   }
///////////////////////////////
//! CSS Combinators:
//> descendant selector (space) : The descendant selector matches all elements that are descendants of a specified element.
//> child selector (>) : The child selector selects all elements that are the direct children of a specified element.
//> adjacent sibling selector (+) : The adjacent sibling selector is used to select an element that is directly after another specific element.
// the <p></p> directly after the whole if <div></div> element;
//> general sibling selector (~): The general sibling selector selects all elements that are next siblings of a specified element.
// same as (+) but selects all elements after the <div></div>;

// main > div > div {} //* This will only select the grandChildren divs of main
// .group1 + div + div //* This will only select the second sibling of group1

// .myList:nth-child(5) {/* Selects the 5th element with class myList */}
// .myList:nth-child(3n) { /* Selects every 3rd element with class myList */}

  
///////////////////////////////////////////////////////////////////////////////
//! CSS Pseudo-classes:
//? Hover over an element to show another element: 
// p {
// display: none;
// background-color: yellow;
// padding: 20px;
// }
// div:hover p { //* This is affecting p when hovering over div.
// display: block;
// }
//+ affecting a firstChild of an element:
//> Case 1:
// p:first-child { //* this will affect the first child of every p element.
//         color: blue;
//       }
//> Case 2:
// p i:first-child { //* this will affect the first i element of every p element
//         color: blue;
//       }
//> Case 3:
// p:first-child i { //* This will affect all i elements of every p element that are the first child of another element (his father)
//         color: blue;
//}
//////////////////////////////////////
//! CSS Pseudo-elements:
//? A CSS pseudo-element is used to style specified parts of an element. can only be applied to block-level elements.
//+ The ::first-line is used to add a special style to the first line of a text.
//+ The ::first-letter is used to add a special style to the first letter of a text.
//> Case 1:
// p::first-line { //* This will affect the fast line of a paragraph
//         color: #ff0000;
//         font-variant: small-caps;
//       }
//> Case 2:
// p.intro::first-letter { //* Will only affect the first letter of a p with the class intro.
//         color: #ff0000;
//         font-size: 200%;
//       }
//+ ::before can be used to insert some content before the content of an element.
//+ ::after pseudo-element can be used to insert some content after the content of an element.
// h1::before { //* inserts content before the h1
//         content: url(smiley.gif); //* can choose the content and style it
//       }

//+ ::marker pseudo-element selects the markers of list items.
// ::marker { //* Selects the markers of a list element and style them
//         color: red;
//         font-size: 23px;
//       }

//+ ::selection pseudo-element matches the portion of an element that is selected by a user.
// ::selection { 
//   color: red; //* color, background, cursor, and outline.
//   background: yellow;
// }
//////////////////////////////////////////////
//! Attribute Selectors:
//> Case:
// a[target] { //* This will select all a with a target element
//         background-color: yellow;
//       }
//> Case 2: 
// a[target="_blank"] { //* This will select all a with a target element with the value blank
//         background-color: yellow;
//       }
//> Case 3:
// [title~="flower"] { //* This will select the elements with title containing the word flower.
//   border: 5px solid yellow;
// }
//> Case 4:
// [class|="top"] { //* selects elements with the specified attribute, whose value can be exactly the specified value, or followed by a hyphen.
//   background: yellow;
// }
//> Case 5:
// [class^="top"] { //* selects elements with the specified attribute, whose value starts with the specified value.
//         background: yellow;
//       }
//> Case 6:
// [class*="te"] { //* selects elements whose attribute value contains a specified value.
//         background: yellow;
//       }

//> Resume: Style elements using their attributes.
// input[type="text"] {
//         width: 150px;
//         display: block;
//         margin-bottom: 10px;
//         background-color: yellow;
//       }
      
//       input[type="button"] {
//         width: 120px;
//         margin-left: 35px;
//         display: block;
//       }
// input[type=button], input[type=submit], input[type=reset] {  //* can select multiple attributes at the same time
        // background-color: #04AA6D;
// }
/////////////////////////////////////////////////////////////////////
//! Forms:
//? Many browsers use the system's default appearance instead.
//? To make your forms' appearance consistent with the rest of your content, you can add the following rules to your stylesheet:
// button,
// input,
// select,
// textarea {
//   font-family: inherit; //* force inheriting the value of the parent.
//   font-size: 100%;
// padding: 0; //* add the following to cancel browsers default pad mar 
// margin: 0;
// box-sizing: border-box;
// }

//> Style text inside the input element:
// .form-row input[type='text'] { //* Notice the CSS selector
//   background-color: #FFFFFF;
//   border: 1px solid #D6D9DC;
//   border-radius: 3px;
//   width: 100%;
//   padding: 7px;
//   font-size: 14px;
// }

//+ Styling forms validations
//? We can target form controls that have passed or failed validations using the :valid and :invalid pseudo-classes.
// input:invalid { //* style invalid field
//   border-color: red;
// }

// input:valid { //* style valid field
//   border-color: green;
// }

// input:invalid:required { //* style required invalid field
//   border-color: red;
//   border-color: red;}

//+ Styling :
//* ::placeholder use this pseudo:element

//! USE JS to style validation messages:
//* MUST LOOK AT THIS: https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_check
//> This doesn't affect the text display but only the section where you enter the data
//+ Interesting examples:
// input[type=text] {
//         background-color: white;
//         background-image: url('searchicon.png'); //* Can use a background image 
//         background-position: 10px 10px; //* make it small
//         background-position: 10px 10px; //* choose it's position
//         background-repeat: no-repeat; 
//         padding-left: 40px; 
//       }
// input[type=text]:focus { //* Changes the focus of input with a specific type
//         background-color: lightblue;
//         border: 3px solid #555;
//       }

// input[type=text] {
//      width: 130px;
//      transition: width 0.4s ease-in-out;
// }

//> Transition, animated input:
// input[type=text]:focus {
//     width: 100%; //* when focused, it will transit from 130px to 100%
// }

//> textarea {
//   width: 100%;
//   height: 150px;
//   padding: 12px 20px;
//   box-sizing: border-box;
//   border: 2px solid #ccc;
//   border-radius: 4px;
//   background-color: #f8f8f8;
//   resize: none; //* se the resize property to prevent text areas from being resized (disable the "grabber" in the bottom right corner)
// }
///////////////////////////////////////////////////////////////////////
//! CSS Counters:
//? The variable values can be incremented by CSS rules (which will track how many times they are used)
//+ To work with CSS counters we will use the following properties:
// counter-reset - Creates or resets a counter
// counter-increment - Increments a counter value
// content - Inserts generated content
// counter() or counters() function - Adds the value of a counter to an element
//* To use a CSS counter, it must first be created with counter-reset.
// body {
//         counter-reset: section; //* this creates a counter called section
//       }
      
// h2::before {
//         counter-increment: section; //* This increments the same counter called section
//         content: "Section " counter(section) ": "; //* This displays the same counter.
// }
//+ Great example: https://www.w3schools.com/css/tryit.asp?filename=trycss_counters2
///////////////////////////////////////////////
//!Website Layout:
//+ Responsive layout:
//* Responsive layout - makes the three columns stack on top of each other instead of next to each other
// @media screen and (max-width:600px) {
//         .column {
//           width: 100%;
//         }
//       }
//? To be continued...

/////////////////////////////////
//!Relative Lengths units:
//? Tip: The em and rem units are practical in creating perfectly scalable layout!
//> em	Relative to the font-size of the element (2em means 2 times the size of the current font)		
//> ch	Relative to width of the "0" (zero)	
//> rem	Relative to font-size of the root element
//> vw	Relative to 1% of the width of the viewport*	
//> vh	Relative to 1% of the height of the viewport*	
//> %	Relative to the parent element
/////////////////////////////////////////////////////
//! CSS Math Functions
//? calc(), max() and min() functions.
//+ Use calc() to calculate the width of a <div> element:
// width: calc(100% - 100px);

//+The max() Function:
// width: max(50%, 300px, 5rem . 1em); //* Use max() to set the width of #div1 to whichever value is largest, 50% , 300px , 5rem, 2em...;

//+ The min() Function:
// width: min(50%, 300px); //* Same as max() but in reverse Use min() to set the width of #div1 to whichever value is smallest, 50% or 300px;

//+ clamp(): combines both max and min
// h1 {
//   font-size: clamp(320px, 80vw, 60rem);
// }
//? clamp() is a great way to make elements fluid and responsive. clamp() takes 3 values:
// the smallest value (320px)
// the ideal value (80vw)
// the largest value (60rem)

//>Note: To ensure that your text blocks are not narrower than 45 characters or wider than 75 characters (ideal length of a line)
//> use clamp() and the ch (0-width character advance) unit:
// p {
//   width: clamp(45ch, 50%, 75ch);
// }

//> Note: Can use the same for a fluid font-size:
// p {
//   font-size: clamp(1.5rem, 5vw, 3rem);
// }

//* Read about Padding management in this article : https://web.dev/articles/min-max-clamp
//////////////////////////////////////////////////////////////
//! Advanced CSS:

//!BACKGROUND:
//>Multiple Backgrounds:
//+ Using the background image property 
// #example1 {
// background-image: url(img_flwr.gif), url(paper.gif); //*  The background images separated by commas, stacked on top of each other, where the first image is closest to the viewer.
// background-position: right bottom, left top; //* the first image (aligned to the bottom and right) and the second image is a paper background (aligned to the top-left corner).
// background-position: right 45px bottom 50px; //* This puts the background image 45px from the right and 20px from the bottom of the container.
// background-repeat: no-repeat, repeat;
// padding: 15px;
// }
//+ Same as above but using the background Shorthand
// #example1 {
// background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
// }

//> Background Size:
//?The size can be specified in lengths, percentages, or by using one of the two keywords: contain or cover.
// #example1 {
// background: url(img_flower.jpg);
// background-size: 100px 80px; //* make it smaller
// background-repeat: no-repeat;
// }
//+ Contain: scales the background image to be as large as possible (but both its width and its height must fit inside the content area)
//* there may be some areas of the background which are not covered by the background image.
// background-size: contain;
//+ Cover: scales the background image so that the content area is completely covered by the background image;
//* some parts of the background image may not be visible in the background positioning area.
// background-size: cover;

//+ different sizes for multiple BG:
// #example1 {
// background: url(img_tree.gif) left top no-repeat, url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat; //* use 3 backgrounds
// background-size: 50px, 130px, auto; //* specify their sizes
// }

//> Full Size Background Image:
// html { //* Use the <html> element in order to cover everything
// background: url(img_man.jpg) no-repeat center fixed; //* Then set a fixed and center
// background-size: cover; //* it covers the entire space available
// }

//> Hero Image: 
//+ Use this : https://www.w3schools.com/css/tryit.asp?filename=trycss3_background_hero

//> background-origin Property: 
//? Where does it start?
// background-origin: content-box; //* either content-box then it will start where the content starts or border-box and it will start where the border starts
/////////////////////////////////////////////////////////////////
//!Colors:
//+ currentcolor : keyword is like a variable that holds the current value of the color property of an element.
//> Case:
// div {
// color: blue;
// border: 10px solid currentcolor;
// }

//> Case:
// body {
// color: green;
// }

// div {
// box-shadow: 0px 0px 15px currentcolor;
// border: 5px solid currentcolor;
// }

//+ CSS Gradients: 
//? Linear Gradients (goes down/up/left/right/diagonally)
//* Direction - Top to Bottom (this is default)
// background-image: repeating-linear-gradient/linear-gradient(to right, red, yellow); //* make a gradient diagonally by specifying starting positions. Like (to bottom right)
///////////////////////////////////////////////////////////////////
//!Shadow:
//+ text-shadow:
//> Case 1:
// text-shadow: 2px 2px 5px red; //* the 5px is for blur effect
//> Case 2:
// text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF; //* Can add more than one shadow (,)

//+ box-shadow:
// box-shadow: 10px 10px 5px lightblue;//* the 5px is for blur effect
// box-shadow: 10px 10px 5px 12px lightblue;//* the 12px is for spread effect
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3); //* use this to create paper-like cards
/////////////////////////////////////////////////////////////////////
//! Text Effects:
//+ text-overflow:
// p.test {
// overflow: hidden; //* hide it
// text-overflow: ellipsis; //* show ...
// }

// p.test:hover {
// overflow: visible; //*Make it appear.
// }

//+ Word Wrapping: allows you to force the text to wrap - even if it means splitting it in the middle of a word:
// word-wrap: break-word;

//+ Word Breaking: 
// word-break: keep-all; //* This line will-break-at-hyphens.
// word-break: break-all; //* The lines will break at any character.
/////////////////////////////////////////////////////////////////////////
//! CSS Web Fonts: some info to check https://www.w3schools.com/css/css3_fonts.asp
//? In the @font-face rule; first define a name for the font (e.g. myFirstFont) and then point to the font file.
// @font-face { //* Create a new font-face
//         font-family: myFirstFont; //* give it a name
//         src: 
              // url(sansation_light.woff) format("woff"), //* indicate the source file
              // url("fonts/sansation_light..woff2") format("woff2"); //* Can have several options separated by a , for browser's compatibility
//         font-weight: normal; //*optional
//         font-style: normal; //*optional
// }
     
// { 
//    font-family: myFirstFont; //* use it later as a normal family
// }
//? This method may be more reliable than relying on a third-party font API, but it is always wise to include a fallback.
//> Look at this: https://www.w3schools.com/css/tryit.asp?filename=trycss3_font-face_rule_bold

//+ OR WE CAN LINK A FONT FRON AN EXTERNAL API:
//* HTML:
/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link> */

//* CSS:
// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


///////////////////////////////////////////////////////////////////////////////
//! 2D Transforms: 2D Transforms Methods

//+ The translate() Method:
//? Moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).
// transform: translate(50px,100px); //* This will push the element to the right by 50px, down by 100px

//+ The rotate() Method:
//? Rotates an element clockwise or counter-clockwise according to a given degree.
// transform: rotate(-50deg); 

//+ The scale() Method:
//? Increases or decreases the size of an element (according to the parameters given for the width and height).
// transform: scale(2, 3); //* 2 for width 3 for height
// transform: scale(0.5, 0.5); //* decrease 

//+ The skew() Method:
//? The skew() method skews an element along the X and Y-axis by the given angles.
// transform: skew(20deg, 10deg); //* 20deg for the X and 10 deg for the Y
//////////////////////////////////////////////////
//! 3D Transforms:
//+ The rotateX() Method: 
// transform: rotateX(150deg);

//+ The rotateY() Method
// transform: rotateY(150deg);

//+ The rotateZ() Method:
// transform: rotateZ(150deg);

//+ perspective Property: 
//? The perspective property is used to give a 3D-positioned element some perspective.
//? When defining the perspective property for an element, it is the CHILD elements that get the perspective view, NOT the element itself.
// perspective: 100px; //* The bigger the number the less exaggerated is the 3D effect
/////////////////////////////////////////////////////////
//! CSS Transitions:
//? CSS transitions allows you to change property values smoothly, over a given duration.
//? To create a transition effect, you must specify two things:

//> the CSS property you want to add an effect to
//> the duration of the effect >>>>  Note: If the duration part is not specified, the transition will have no effect, because the default value is 0.

// div {
// width: 100px;
// height: 100px;
// background: red;
// transition: width 2s, background 2s; //* Must specify the property to transit + the duration.
// }
      
// div:hover {
// width: 300px; //* The property to transit
// background: blue; //* The property to transit
// }

//+ Specify the Speed Curve of the Transition
//? The transition-timing-function property specifies the speed curve of the transition effect.
//* IMPORTANT EXAMPLE: https://www.w3schools.com/css/tryit.asp?filename=trycss3_transition_speed
// ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
// linear - specifies a transition effect with the same speed from start to end
// ease-in - specifies a transition effect with a slow start
// ease-out - specifies a transition effect with a slow end
// ease-in-out - specifies a transition effect with a slow start and end

//+ Transition delay:
//? The transition-delay property specifies a delay (in seconds) for the transition effect.
//> Case:
// transition-delay: 1s; //* this will delay the start of the transition by 1s

//> Case: https://www.w3schools.com/css/tryit.asp?filename=trycss3_transition_transform
// transition: width 2s, height 2s, transform 2s; 
// transition: width 2s linear 2s //* This equals to: transition-property: width; transition-duration: 2s; transition-timing-function: linear; transition-delay: 2s
////////////////////////////////////////////////////////////
//! CSS Animations:
//> To use CSS animation, you must first specify some keyframes for the animation.
//> Keyframes hold what styles the element will have at certain times.

//+ The @keyframes Rule:
// div {
// width: 100px;
// height: 100px;
// background-color: red;
// animation-name: example; //* name your keyframes
// animation-duration: 4s; //* set its duration, If the animation-duration property is not specified, no animation will occur, because the default value is 0s
// animation-iteration-count: 3; //* How many times should it occur, set it to <<infinite>> for unstoppable
//   animation-direction: alternate;  //* Animation would change direction every time
// animation-timing-function: linear; //* Set animation speed (same as Transitions)
// animation-play-state: paused; //* pause the animation then RUN it using hover (animation-play-state:running)
// }
//> OR this shorthand : 
// div {
//   animation: example 5s linear 2s infinite alternate; //* name duration speed delay repeat style
// }

// @keyframes example {
// from {background-color: red;} //* Choose the start 
// to {background-color: yellow;} //* choose the end
// }

//* OR YOU CAN USE THE %:
// 0%   {background-color: red;} //* starts with red
// 25%  {background-color: yellow;} // * then becomes yellow ...
// 50%  {background-color: blue;}
// 100% {background-color: green;}
//> VERY IMPORTANT EXAMPLE: https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation3
//////////////////////////////////////////////////////////////////
//! Tooltip: 
//? Quite simple, no need for explaination.
//+ View this example : https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_right
////////////////////////////////////////////////////////////////////
//! Style Images:
//+ Responsive img:
// img {
// max-width: 100%;
// height: auto;
// }

//> MUST LOOK AT : https://www.w3schools.com/css/css3_mediaqueries_ex.asp
//+ Center the image:
// img {
// display: block; //* Make it a block element
// margin-left: auto; //* auto margin left and right
// margin-right: auto;
// width: 50%; //* Use width percentage to adjust the size
// }

//+ Image Hover Overlay:
//* Must view examples : https://www.w3schools.com/css/css3_images.asp

//+ Flip an image:
// img:hover {
//   transform: scaleX(-1);
// }

//+ Image Modal (Advanced) includes JS:
//* Very interesting example to review : https://www.w3schools.com/css/tryit.asp?filename=trycss_image_modal_js

//+ Img reflection:
// img {
// -webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4)); //* use a gradient to make it look like a shadow;
// }

//+ The object-fit Property:
//?  The object-fit property can take one of the following values:
// fill - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
// contain - The image keeps its aspect ratio, but is resized to fit within the given dimension  //* object-fit: contain;
// cover - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit //* object-fit: cover;
// none - The image is not resized
// scale-down - the image is scaled down to the smallest version of none or contain

//+ The object-position Property : 
//? To display the part of the img that we want after using object-fit: cover;
// object-fit: cover;
// object-position: 80% 100%; //* Choose which part to display

//+ The CSS mask-image:
//? The mask image needs to have a transparent or semi-transparent area. Black indicates fully transparent.
//* View this example : https://www.w3schools.com/css/tryit.asp?filename=trycss3_mask-image

//> Use a linear gradient as a mask layer:
// -webkit-mask-image: linear-gradient(black, transparent);
// mask-image: linear-gradient(black, transparent);

// OR:

// -webkit-mask-image: radial-gradient(circle, black 50%, rgba(0, 0, 0, 0.5) 50%);
// mask-image: radial-gradient(circle, black 50%, rgba(0, 0, 0, 0.5) 50%);
/////////////////////////////////////////////////////////
//! Make SVG Images:
////////////////////////////////////////////////////////
//! Buttons:
//+ Disabled button:
// .disabled {
// opacity: 0.6;
// cursor: not-allowed;
// }
//>  Some cool buttons at the end: https://www.w3schools.com/css/css3_buttons.asp
//////////////////////////////////////////////////////////////
//! CSS Multiple Columns:
//? The column-count property specifies the number of columns an element should be divided into.
// div {
// column-count: 3; //* This will divide the text in the <div> element into 3 columns: 
// column-gap: 40px; //* Make a gap in between the columns
// column-rule-style: solid; //* Style the separator
// column-rule-width: 1px;
// column-rule-color: lightblue;
// column-width: 100px; //* Choose the width of the columns
// }
// h2 {
// column-span: all; //* Specifies that h2 will span over all other columns
// } 

//> OR use shorthand:
// div {
// column-rule: 1px solid lightblue;
// }
///////////////////////////////////////////////////////////////////
//! CSS Resizing an element:
// div {
// resize: horizontal; //* horizontal resizes the the width only (vertical does the opposite)
// resize: both; //* Resize both width and height
// overflow: auto;
// }

//+ ellipsis or (...)
// p {
// white-space: nowrap;
// overflow: hidden;
// text-overflow: ellipsis;
// }
////////////////////////////////////////////////////////////////////////
//! Variables: var(--name, value):
//? Global variables can be accessed/used through the entire document, while local variables can be used only inside the selector where it is declared.
//? makes the code easier to read (more understandable)
//? makes it much easier to change the color values
//+ Declare a variable :
// --blue: #1e90ff; //* set a variable 
// color: var(--blue , black); //* use it everywhere, give it a fallback value in case ( black )
//? Name : Required. The variable name (must start with two dashes)
//? value: Optional. The fallback value (used if the variable is not found)
//> IMPORTANT EXAMPLE: https://www.w3schools.com/css/tryit.asp?filename=trycss3_var

//! Change Variables With JavaScript:
//+ Use getComputerStyle 
// https://www.youtube.com/watch?v=AKMUpyQSln4 //* Watched and understood
// Get the root element
// var r = document.querySelector(':root');

// var rs = getComputedStyle(r); //* Get the styles (properties and values) for the root

// console.log(rs.getPropertyValue('--blue')); //* Alert the value of the --blue variable

// r.style.setProperty('--blue', 'lightblue'); //* Set the value of variable --blue to another value (in this case "lightblue")

//+ Using Variables in Media Queries:
//? we create a @media rule that says "When the browser's width is 450px or wider, change the --fontsize variable value of the .container class to 50px."
// .container {
// --fontsize: 25px; //* This the font size for all screens
// }

// @media screen and (min-width: 450px) { //* And when the screen becomes smaller than 450px 
//   .container {
//     --fontsize: 50px; //* Change the font size to this.
//   }
//   :root {
//     --blue: lightblue;//* Change the color to this.
//   }
// }

//+ prefers-color-scheme media query:
//Check this great example :
// https://codepen.io/TheOdinProjectExamples/pen/powGZzE
/////////////////////////////////////////////////////////////////////////////
//! Media Queries: 
//? Media queries in CSS3 extended the CSS2 media types idea: Instead of looking for a type of device, they look at the capability of the device.
//? Media queries can be used to check many things, such as:
//> width and height of the viewport
//> width and height of the device
//> orientation (is the tablet/phone in landscape or portrait mode?)
//> resolution

//+ Media Types: 
//> all: Used for all media type devices
//> screen: Used for computer screens, tablets, smart-phones etc.
// @media screen and (min-width: 480px) { //* When the screen has a width beyond 480px 
// #leftsidebar {width: 200px; float: left;} //* become smaller and slide to the left 
// #main {margin-left: 216px;} increase margin
// }
//> EXAMPLE : https://www.w3schools.com/css/tryit.asp?filename=trycss3_media_queries2
//+ VERY IMPORTANT FOR RESPONSIVE LAYOUT: https://www.w3schools.com/css/css3_mediaqueries_ex.asp

//> Case:
// @media only screen and (orientation: landscape) { //* if the height is wider than width (phone)
// body {
//         background-color: lightblue;
// }
// }
//> Case:
// @media screen and (max-width: 900px) and (min-width: 600px), (min-width: 1100px) { //* Many conditions at a time. THE COMMA there behaves like an OR operator (Carefull!!)
// div.example {
//         font-size: 50px;
//         padding: 50px;
//         border: 8px solid black;
//         background: yellow;
// }
// }
/////////////////////////////////////////////////////////////////////////////////
//! FlexBox:
//+ Flex grow:
//? Make the third flex item grow eight times faster than the other flex items. ( FASTER )
/* <div class="flex-container">
  <div style="flex-grow: 1">1</div>
  <div style="flex-grow: 1">2</div>
  <div style="flex-grow: 8">3</div>
</div> */

//+ Flex Order: 
/* <div class="flex-container">
  <div style="order: 3">1</div>
  <div style="order: 2">2</div>
  <div style="order: 4">3</div>
  <div style="order: 1">4</div>
</div> */

//+ The flex-shrink:
/* <div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-shrink: 0">3</div> //* Do not let the third flex item shrink as much as the other flex items
  <div>4</div>
</div> */

//+ flex-basis:
/* <div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-basis: 200px">3</div> //* Set the initial length of the third flex item to 200 pixels
  <div>4</div>
</div> */

//+ THE SHORTHAND FLEX:
/* <div style="flex: 0 0 200px">3</div> */ //* flex: flex-grow, flex-shrink, flex-basis
///////////////////////////////////////////////////////////////////////////////
//! CSS GRID Layout:
// .grid-container {
// display: grid;
// grid-template-columns: auto auto auto; //* each row has 3 column sharing the space
// grid-template-rows : 80px 200px;; //* each value defines the height of the respective row
// column-gap: 50px; //* Add row gap or column-gap >> shorthand = gap: 50px 100px;
// }
//> https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_grid-template-rows

// .item1 {
//   grid-column-start: 1; //*Place a grid item at column line 1
//   grid-column-end: 3; //* and let it end on column line 3:
//   grid-row-start: 1;
//   grid-row-end: 3; //* and let it end on row line 3:

//> shorthand : grid-column: 1 / 3; grid-row: 1 / 3;
//> a shorthand for the shorthands above : grid-area: 1 / 3 / 1 / 3; CONFUSING!!

// .item2 {
// grid-column: 2 / span 3; //* Make "item2" start on column 2 and span 3 columns
//> https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_grid-column2
// }

//+ NOTE that you can use justify, align same as Flexbox to adjust the grid inside it's container
////////////////////////////////////////////////////////////////////////////////////////
//! Responsive Web Design:
/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */ //* The viewport is the user's visible area of a web page.
//? width = decide-width tells the browser that my content width is the device screen width
//? scale=1.0 tell the browser to initiate the zoom at 1

// .row::after { //* Must use this after floating elements in order to add other elements below (Just copy paste)
//   content: "";
//   clear: both;
//   display: table;
// }
//+ Grid-View: Design for Mobile First
//? split the page to 12 columns of the same size >> divide 100/12 = 8.33%
//* CSS:
// .col-1 {width: 8.33%;}
// .col-2 {width: 16.66%;}
// .col-3 {width: 25%;}
// .col-4 {width: 33.33%;}
// .col-5 {width: 41.66%;}
// .col-6 {width: 50%;}
// .col-7 {width: 58.33%;}
// .col-8 {width: 66.66%;}
// .col-9 {width: 75%;}
// .col-10 {width: 83.33%;}
// .col-11 {width: 91.66%;}
// .col-12 {width: 100%;}
//* HTML:
/* <div class="row">
  <div class="col-3 col-s-3">...</div> 
  <div class="col-6 col-s-9">...</div>
  <div class="col-3 col-s-12">...</div>
</div> */
//! WHAT HAPPENED above:
//* For desktop: The first and the third section will both span 3 columns each. The middle section will span 6 columns.
//* For tablet : The first section will span 3 columns, the second will span 9, and the third section will be displayed below the first two sections, and it will span 12 columns
//> IMPORTANT EXAMPLE to understand: https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_col-s

//+ There are tons of devices with different heights and widths, so it is hard to create an exact breakpoint for each device. To keep things simple you could target five groups:

// @media only screen and (max-width: 600px) {...}//* Extra small devices (phones, 600px and down)
// @media only screen and (min-width: 600px) {...}//* Small devices (portrait tablets and large phones, 600px and up)
// @media only screen and (min-width: 768px) {...} //* Medium devices (landscape tablets, 768px and up)
// @media only screen and (min-width: 992px) {...}//* Large devices (laptops/desktops, 992px and up)
// @media only screen and (min-width: 1200px) {...} //* Extra large devices (large laptops and desktops, 1200px and up)

