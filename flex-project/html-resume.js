//! dl , dt , dd:
//? A description list (dl), with terms (dt) and descriptions (dd);
/* <dl>
  <dt>Coffee</dt>
    <dd>Black hot drink</dd>
  <dt>Milk</dt>
    <dd>White cold drink</dd>
</dl> */
////////////////////////////////////
//! a hyperlink:
//+ href :
// (href="http://www.example.com/default.htm") //* An absolute URL - points to another web site 
// (href="default.htm") //*  A relative URL - points to a file within a web site 
// (href="#section2") //* Link to an element with a specified id within the page 
// <a href="mailto:someone@example.com">Send email</a> //* Send email
// <a href="tel:+4733378901">+47 333 78 901</a> //* Link Phone number 
// <a href="#section2">Go to Section 2</a> //* Link to an element with a specified id within the page
// <a href="javascript:alert('Hello World!');">Execute JavaScript</a> //* link to a JavaScript

//+ download attributes:
// <a href="/images/myw3schoolsimage.jpg" download> //* Download file when clicking on the link (instead of navigating) */}
//   <img src="/images/myw3schoolsimage.jpg" alt="W3Schools" width="104" height="142">
// </a> 
///////////////////////////////////
//! address: 
//? The text in the <address> element usually renders in italic, and browsers will always add a line break before and after
/* <address>
Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address> */
////////////////////////////////////////////
//! area maps :
//? <area> elements are always nested inside a <map> tag.

/* <img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379"> //* the main img

<map name="workmap"> //* Creates a relationship between the image and the map.
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm"> //* specify the shape and coordinations ...
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm"> //* specify the shape and coordinations ...
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm"> //* specify the shape and coordinations ...
</map> */
////////////////////
//! audio Tag:
/* <audio controls> //* controls Specifies that audio controls should be displayed ( autoplay, loop)
  <source src="horse.ogg" type="audio/ogg">  //* The browser will choose the first source it supports.
  <source src="horse.ogg" type="audio/ogg">  //* The browser will choose the first source it supports.
  Your browser does not support the audio tag. //* will only be displayed in browsers that do not support the <audio> element
</audio> */
///////////////////////////////////////
//! base: 
//? Specify a default URL and a default target for all relative URLs on a page
/* <head>
  <base href="https://www.w3schools.com/" target="_blank"> //* Every link in the page will refer to this base
</head> */
/* <a href="tags/tag_base.asp">HTML base Tag</a> */ //* the path will relate to the base and be opened in a new window without _blank
///////////////////////////////////////////
//! blockquote :
/* <blockquote cite="http://www.worldwildlife.org/who/index.html"> //* indicates the source of a quote.
For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote> */
////////////////////////////////////////////
//! buttons:
//+ form: specifies the form the button belongs to
/* <form action="/action_page.php" method="get" id="form1">  //* name the form (id="form1")
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname"><br><br> //*make inputs for it's labels ( name them too, with id)
<label for="lname">Last name:</label>
<input type="text" id="lname" name="lname">
<button type="submit">Submit</button> //* the form could have its own submit button that follows the form action;
</form>
<button type="submit" form="form1" value="Submit">Submit</button> */ //* Link the button to the form (form = "form1")
//* No need if the button tag is already inside the form element
//<button type="submit" formaction="/action_page2.php">Submit to another page</button>
//* Could have another destination to the data using formaction attribute
//* The formaction attribute is only used for buttons with type="submit"

//+ method/formmethod: get OR post:
//? get : Never use the "get" method to pass sensitive information! 
//<form action="/action_page.php" method="get">
//? post : it is more robust and secure than "get" , it does not have size limitations 
// </form><button type="submit" formmethod="post">Submit using POST</button> */

//+ formtarget : _blank_self_parent_top
//? This attributes overrides the target attribute in form tag

//+ type attribute : button, reset, submit
/* <button type="submit" value="Submit">Submit</button> //* submits the inputs inside the form
<button type="reset" value="Reset">Reset</button>  */ //* resets the inputs inside the form
////////////////////////////////////////
//! Tables:
/* <table>
  <caption>Monthly savings</caption> //* The <caption> tag defines a table caption.
  <tr>  //* defines a table row
    <th>Month</th> //* th for table heading
    <th>Savings</th>//* th for table heading
  </tr>
  <tr>
    <td>January</td>//* defines a table cell
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$50</td>
  </tr>
</table> */
//+ you can define a collapsed border :
// table, th, td {
//     border: 1px solid black;
//     border-collapse: collapse;
//   }

//+ center a table:
// table.center { 
//   margin-left: auto;
//   margin-right: auto;
// }

//+ expand cell, span:
//<tr>
// <th colspan="2">Phone</th> */ //* Use colspan to span a header over two cells horizontally
// <td>123-45-678</td> //* The Phone header will cover both these numbers (cells)
// <td>212-00-546</td>
//</tr>

/* <tr>
  <th rowspan="2">Phone:</th> //* Use rowspan to span a header over two cells vertically 
  <td>123-45-678</td>
</tr>
<tr>
  <td>212-00-546</td> //* The Phone will also cover this row
</tr> */

//+ colgroup ( Style Columns ):
/* <table>
  <colgroup> //* include it in a table 
  <col span="2" style="background-color:red"> //* this will style the first 2 columns MUST USE COL TAG
  <col style="background-color:yellow"> //* this will style the rest
</colgroup> */
//? The <colgroup> must be  after any <caption> elements and before any <thead>, <tbody>, <tfoot>, and <tr> elements.
////////////////////////////////////////////
//! data element:
/* <ul
  <li><data value="21053">Cherry Tomato</data></li> //* The <data> tag is used to add a machine-readable translation of a given content.
  <li><data value="21054">Beef Tomato</data></li>
  <li><data value="21055">Snack Tomato</data></li>
  <li>I have a date on <time datetime="2008-02-14 20:00">Valentines day</time>.</li> //*If the content is time- or date-related, use the <time> element instead.
</ul> */
////////////////////////////////////////////
//! datalist ( list ):
//?this tag is used to provide an "autocomplete" feature for <input> elements. Users will see a drop-down list of pre-defined options as they input data.
//? Better used inside a form
//> display: none; by default
/* <datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist> */
////////////////////////////////
//! details summary:
/* <details> 
  <summary>Epcot Center</summary> //* This is visible
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, 
  award-winning fireworks and seasonal special events.</p> //* the paragraph will only appear if you click summary
</details> */
//> default:
// details {
//   display: block;
// }
//////////////////////////////////
//! fieldset ( form ):
//? The <fieldset> tag draws a box around the related elements.
/* <form action="/action_page.php">
 <fieldset disabled , name , form> //* you can give it a name attribute, disable it and link it to a form using its id (form="form1")
  <legend>Personalia:</legend> //* it includes a title at the start of the border
  <label for="fname">First name:</label> //* THe rest is the same as any form
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday"><br><br>
  <input type="submit" value="Submit">
 </fieldset>
</form> */
//> Tip: should style it with CSS
////////////////////////////////////
/* <figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure> */
////////////////////////////////////
//! form :
//? The most important element of a form is its input types > default is type="text"
//+ <input type="checkbox">:
// <label for="vehicle1"> I have a bike</label> //* visible text
// <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> <br></br> //* create the checkbox

//+ <input type="radio">:
//? same as checkbox, but radio only allows you to check one box
//> Note: The radio group must have share the same name (the value of the name attribute) to be treated as a group.
//> Note: The value attribute defines the unique value associated with each radio button. 
//> The value is not shown to the user, but is the value that is sent to the server on "submit" to identify which radio button that was selected.
/* <input type="radio" id="html" name="fav_language" value="HTML">
<label for="html">HTML</label><br>
<input type="radio" id="css" name="fav_language" value="CSS">
<label for="css">CSS</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">JavaScript</label> */

//+ <input type="color">
// <label for="favcolor">Select your favorite color:</label> //* visible text
// <input type="color" id="favcolor" name="favcolor" value="#ff0000"><br><br> //* give it an id, name and default value
//+ <input type="file">:
//  <label for="myfile">Select files:</label> //* visible text
//  <input type="file" id="myfile" name="myfile" multiple>//* this will select multiple files.
//+ <input type="password">:
//<label for="pwd">Password:</label> //* visible text
//<input type="password" id="pwd" name="pwd"></input> //* (characters are masked)
//? Note: Any forms involving sensitive information like passwords should be served over HTTPS.

//+ range:
// <input type="range" id="a" value="50"></input>

//+ <textarea>
// <textarea id="w3review" name="w3review" rows="4" cols="50"> //*define a text area (it has a border), name it, define its dimensions;
//   At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
// </textarea>
// <input type="submit" value="Submit"></input> //* add a submit button to send it somewhere
//> Note : The name attribute is needed to reference the form data after the form is submitted 
//> (if you omit the name attribute, no data from the text area will be submitted).

//+ <select> <option> <optgroup>:
/*<form action="/action_page.php"> //* select usually used in a form element
  <label for="cars">Choose a car:</label> //* visible text
  <select name="cars" id="cars"> //* must have the form's name and it's own name
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  <optgroup label="German Cars">
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <br><br>
  <input type="submit" value="Submit">
</form> */

//+ <output> :
// <output name="x" for="a b"></output> //* for displays the relationship between two inputs with id a and b

//+ <picture> :
//? The <picture> tag gives web developers more flexibility in specifying image resources.
//? Instead of having one image that is scaled up or down based on the viewport width, 
//? Multiple images can be designed to more nicely fill the browser viewport.
/* <picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture> */
//> Note : similar to <video> and <audio>. You set up different sources, and the first source that fits the preferences is the one being used.

//+ <iframe>:
//? An inline frame is used to embed another document within the current HTML document.
// <iframe src="/default.asp" width="100%" height="300" style="border:1px solid black;"> </iframe>
//> Note : can include websites , audio , videos...

//+ <meta>:
//? Just use this every time:
/* <head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML,CSS,XML,JavaScript"> // for search engines
  <meta name="author" content="Ismail Bardach">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head> */

//+ <meter>:
//? The <meter> tag defines a scalar measurement within a known range, or a fractional value. This is also known as a gauge.
//? Note: The <meter> tag should not be used to indicate progress (as in a progress bar). For progress bars, use the <progress> tag.
// <label for="disk_d">Disk usage D:</label>
// <meter id="disk_d" value="0.6">60%</meter> 
// <label for="disk_c">Disk usage C:</label>
// <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter><br></br>
//+ <progress>:
// <label for="file">Downloading progress:</label>
// <progress id="file" value="32" max="100"> 32% </progress>

//! <svg>:
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"> 
//* xmlns = Without it, some browsers will not render your image or will render it incorrectly.
//* viewBox = ( starting point on x , starting point on y , ending point on x , ending point on why)
//* viewBox designs the dimensions of the svg

//+ svg Rectangle:
//<rect x=0 y=0 rx="20" ry="20" width=100 height=100 fill="red"/></svg> //* creating a rectangle with the same dimensions as the viewBox
//* The rx and ry are for the radius of the shape ( using one and omitting the other is FINE too!)

//+ svg Circle:
// <svg width="100" height="100"> //* same the the very first line it defines the viewBox ( the drawing box)
//   <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" fill-opacity="0.1" stroke-opacity="0.9"/> 
//* cx and cy define coordinates of the center of the circle center is set to (0, 0) "if cx cy are omitted the (0, 0) is applied". r is the radius
//* stroke creates a border, stroke-width define how fat it is. fill = background color.
//* all the properties used above are CSS properties they could be define on a CSS file using class attributes

//+ svg ellipse: 
// <ellipse cx="240" cy="100" rx="220" ry="30" style="fill:purple" />
//  <ellipse cx="240" cy="70" rx="190" ry="20" style="fill:lime" />
// <ellipse cx="240" cy="45" rx="170" ry="15" style="fill:yellow" />
//> 3 o top of each other
//* rx for the horizontal width , ry ....

//+ svg line:
// <line x1="10" y1="10" x2="100" y2="300" style="stroke:rgb(255,0,0);stroke-width:2" />
//* the line starts from the first coordination which is (x1,y1) and ends at (x2,y2)

//+ SVG Polygon:
// <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
//* you can add as many coordinations as you want , they will all connect
//! You can literally create any closed shape using polygon

//+ SVG Polyline:
// <polyline points="20,20 40,25 60,40 80,120 120,140 200,180" style="fill:yellow or none;stroke:black;stroke-width:3" />
//* you can add as many coordinations as you want , they don't have to connect
//* points attribute defines well, the points
//! You can literally create any closed/open shape using Polyline

//+ SVG Path:
//> Note : All of the commands below can also be expressed with lower letters. Capital letters means absolutely positioned,
//> lower cases means relatively positioned.

//+ svg text:
// <text x="10" y="20" style="fill:red;">Several lines:
//    <tspan x="10" y="45">First line.</tspan> //* add as many lines as you want
//   <tspan x="10" y="70">Second line.</tspan>
// </text>