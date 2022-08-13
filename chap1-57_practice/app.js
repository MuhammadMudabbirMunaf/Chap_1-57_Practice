
// Chap # 1  Alert


// alert("Hello everyone!");
// window.alert("How are you all?");


// Chap # 2   Variables for Strings


// var name = "Mudabbir";
// name = "Mustafa";

// var nationality;
// nationality = "Pakistani";

// var greet = "Assalam-u-Alaikum";
// alert(greet);


// Chap # 3   Variables for Numbers


// var balance = 150;
// var total = balance + 50;

// var cost = 100;
// var expenditure = 70;
// var totalCost = cost + expenditure;

// var noOfBoxes = 50;
// alert(noOfBoxes);


// Chap # 4  Variable Names Legal and Illegal


// var userAlert; , var myVar; ,  var thisFunction;   all practices all wrong

// var userlimit; , var gameover; , var andnot; , var timeover;  all practices all wrong

// var gameOver; , var userLimit; , var responseLimit; , var userResponseTimeLimit;  all practices are correct


// Chap # 5   Math expressions:Familiar operators


// var add = 10 + 8;
// var subtract = 10 - 8;
// var multiply = 10 * 8;
// var divide = 10 / 8;
// var modulus = 10 % 8;


// Chap # 6  Math expressions:Unfamiliar operators


// var numCalc = 4;
// numCalc++;
// numCalc--;

// var numBeforeCalc = 8;
// --numBeforeCalc;
// ++numBeforeCalc;


// Chap # 7  Math expressions:Eliminating ambiguity


// var complexCalcs = 1 + 6 * 5;
// var complexCalcs2 = 1 + 6 * 5 - 7;
// var complexCalcs3 = (1 + 6) * (5 - 7);
// var complexCalcs4 = 1 + (6 * 5) - 7;
// var complexCalcs5 = ((3 + 6) * 5) - 7;


// Chap # 8 Concatenating text strings


// var message = "Hello";
// var name = "Mudabbir";
// var sign = "!";
// alert("Hello" + "Mudabbir" + "!");
// alert("Hello Mudabbir !");
// alert(message + "Mudabbir" + sign);
// alert("Hello" + name + "!");
// alert(message + name + sign);
// var num = 6;
// alert(num + num);
// alert("5" + "5");


// Chap # 9   Prompts


// var askName = "What is Your Name?";
// var defaultName = "Ali"; 
// var spec = prompt("What is your Name?", "Bashir");
// var specs = prompt(askName, defaultName);
// var spec2 = window.prompt("What is your Name?", "Bashir");
// var specs2 = window.prompt(askName, defaultName);


// Chap # 10   if statements


// var yourCity = prompt("Where does Imam Sahab live?");
//  if (yourCity === "Karachi") {
//     alert("Correct Answer");
//  }
// var yourCity = prompt("Where does Imam Sahab live?");
// var correctAnswer = "Lahore";
//  if (yourCity === "Lahore") {
//     alert("Correct Answer");
//  }


// Chap # 11  Comparison operators


// var numCheck = prompt("What is your percentage in 10th Standard");
// if (numCheck === 50) {
//     alert("Not focused on studies");
// }
// if (numCheck <= 50) {
//     alert("You are fail");
// }
// if (numCheck >= 50) {
//     alert("Average scorer");
// }
// if (numCheck !== 100) {
//     alert("Must below hundred");
// }


// Chap # 12  if...else and else if statements


// var age = prompt("Add your Age");
// if(age === 100){
//     alert("Senior Citizen");
// }
// else if(age === 55){
//     alert("Near to Retirement");
// }
// else{
//     alert("Young Person");
// }


// Chap # 13  Testing sets of conditions


// if (weight > 300 && height > 6) {
//     alert("Come to Gym");
// }
// else {
//     alert("You are not invited");
// }

// if (weight > 300 && height > 6 && age > 17 && gender === "male") {
//     alert("Come to Men Gymnasium");
// }
// else {
//     alert("Do not come here.");
// }

// if (age > 65 || age < 21 && res === "U.S.") {
//     alert("Qualified for medical allowance");
// }
// else{
//     alert("sorry");
// }    


// Chap # 14   if statements nested


// if (c === d) {
//   if (x === y) {
//     g = h;
//   }
//   else if (a === b) {
//     g = h;
//   }
//   else {
//     e = f;
//   } 
// }
// else {
//     e = f;
// }


// Chap # 15   Arrays


// var areasArray = ["Karimabad", "Nazimabad", "Gulshan", "Lyari", "Gulberg", "DHA"];


// Chap # 16   Arrays:Adding and removing elementa


// var areasArray = ["Karimabad", "Nazimabad", "Gulshan", "Lyari", "Gulberg", "DHA"];
// areasArray.pop();
// areasArray.push("Sohrab Goth", "Orangi Town");


// Chap # 17   Arrays:Removing, inserting, and extracting elements


// var areasArray = ["Karimabad", "Nazimabad", "Gulshan", "Lyari", "Gulberg", "DHA"];
// areasArray.shift();
// areasArray.unshift("Sohrab Goth", "Orangi Town");
// areasArray.splice(1, 4, "Sohrab Goth", "Soldier Bazar", "Garden");
// areasArray.splice(3, 0, "Soldier", "Garden");
// var newAreas = areasArray.slice(1, 4);


// Chap # 18  for loops


// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// for (var m= 0; m <= 4;m++) {
//     if (cityToCheck === cleanestCities[m]) {
//       alert("It's one of the cleanest cities");
//     }
//     else{
//         alert("it's not on the list");
//     }
// }


// Chap # 19   for loops:Flags, Booleans, array length, and loopus interruptus


// var matchFound = false;
// for (var i = 0; i < numElements; i++);
//   if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");
//     break;
//   }
// }
//   if (matchFound === false) {
//     alert("It's not on the list");
//   }


// Chap # 20 for loops nested


// var firstNames = ["Ali ", "Imran ", "Uzair ", "Haseeb ", "Mustafa "];
// var lastNames = ["Baloch", "Rasheed", "Kaleem", "Khan"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     fullNames.push(firstNames[i] + lastNames[j]);
//   }
// }


// Chap # 21   Changing case


// var nameCheck = prompt("Enter Your name");
// nameCheck = nameCheck.toLowerCase();

// var nameCheck = prompt("Enter Your name");
// nameCheck = nameCheck.toLowerCase();


// Chap # 22   Strings:Measuring length and extracting parts


// var firstAlpha = cityToCheck.slice(0, 1);
// var otherAlphas = cityToCheck.slice(1);
// firstAlpha = firstAlpha.toUpperCase();
// otherAlphas = otherAlphas.toLowerCase();
// var CityName = firstAlpha + otherAlphas;

// var month = prompt("Enter a month");
// var charsOfMonth = month.length;
// if (charsOfMonth > 3) {
//     var monthAbbrev = month.slice(0, 3);
// }


// Chap # 23  Strings:Finding segments


// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 12) === "Queen Elizabeth II") {
//     text = text.slice(0, i) + "The Second Queen Elizabeth" + text.slice(i + 12);
//   }
// }
    
// var firstChar = text.indexOf("World War II");
//   if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
//   }

// var text = "it was you or not you.";
// var segIndex = text.lastIndexOf("you");


// Chap # 24   Strings:Finding a character at a location


// var firstChar = firstName.charAt(0);
// var lastChar = text.charAt(text.length - 1);

// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "!") {
//       alert("Exclamation point found!");
//       break;
//     }
// }


// Chap # 25   Strings:Replacing characters


// var newText = text.replace("Queen Elizabeth II", "The Second Queen Elizabeth");

// text = text.replace("World War II", "the Second World War");

// var newText = text.replace(/World War II/g, "the Second World War");


// Chap # 26   Rounding numbers


// var numberOfSheeps = Math.round(sheepCount);
// sheepCount = Math.round(sheepCount);
// var sheepCount = Math.ceil(sheepCount);
// var sheepCount = Math.floor(sheepCount);


// Chap # 27   Generating random numbers


// var randomNumber = Math.random();
// To generatee random dice nums and head tail.

// var bigDecNum = Math.random();
// var impNum = (bigDecNum * 6) + 1;
// var numberOfSheeps = Math.floor(impNum);


// Chap # 28   Converting strings to integers and decimals


// var currAge = prompt("Enter your age.");
// var qualAge = parseInt(currAge) + 1;

// var FractNum= parseFloat("1.9999");


// Chap # 29   Converting strings to numbers, numbers to strings


// var floatNumStr = "24.9876";
// var num = Number(floatNumStr);

// var numAsNum = 1234;
// var numAsStr = numAsNum.toString();


// Chap # 30   Controlling the length of decimals


// var numTotal = total.toFixed(2);
// var numTotal = total.toFixed();


// Chap # 31   Getting the current date and time


// var rightNow = new Date();
// var dateString = rightNow.toString();

// var rightNow = new Date();
// var theDay = rightNow.getDay();


// Chap # 32   Extracting parts of the date and time


// var currMonth = d.getMonth();
// var currYear = d.getFullYear();
// var currDate = d.getDate();
// var currDay = d.getDay();
// var currentMonth = d.getMonth();
// var currMinute = d.getMinute();
// var currSeconds = d.getSecond();
// var currMilliseconds = d.getMilliseconds();
// var timeSince1970 = d.getTime();


// Chap # 33   Specifying a date and time


// var doomsday = new Date("June 30, 2035");
// var d = new Date("July 21, 1983 13:25:00");


// Chap # 34   Changing elements of a date and time


// var d = new Date();
// d.setFullYear(2001);
// d.setMonth(11);
// d.setDate(15);
// d.setHours(20);
// d.setMinutes(48);
// d.setSeconds(35);
// d.setMilliseconds(300);


// Chap # 35   Functions


// function tellTime() {
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//     alert("Current time: "+ theHr + ":" + theMin);
// }
// tellTime();


// Chap # 36   Functions:Passing them data


// function greetUser() {
//   alert("Hello, there.");
// }
// greetUser("Hello, there");  

// var greeting = "Hello, there."
// function greeting() {
//   alert("Hello, there.");
// }
// greetUser(greeting);


// Chap # 37   Functions:Passing data back from them


// function calcTot(merchTot) {
//   var orderTot;
//   if (merchTot >= 100) {
//         orderTot = merchTot;
//   }
//     else if (merchTot < 50.01) {
//       orderTot = merchTot + 5;
//     }
//     else {
//       orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//     }
//     return orderTot;
// }


// Chap # 38 Local vs. Global Variables


// var theSum
// addNumbers();

// function addNumbers() {
//     var theSum = 2 + 2;
// }


// Chap # 39   switch statements:How to start them


// switch(dayOfWeek) {
//   case "Sat" :
//     alert("Whoopee");
//     break;
//   case "Sun" :
//     alert("Whoopee");
//     break;
//   case "Fri" :
//     alert("TGIF!");
//     break;
//   default :
//     alert("Shoot me now!");
// }
    

// Chap # 40   switch statements: How to complete them


// default :
//   alert("Shoot me now!");


// Chap # 41   while loops


// var i = 0;
//   while (i <= 3) {
//   alert(i);
//   i++;
// }


// Chap # 42   do...while loops


// var i = 0;
//   do {
//   alert(i);
//   i++;
// } while (i <= 3);


// Chap # 43   Placing scripts


{/* <script>
function sayHi() {
  alert("Hello world!");
}
function sayBye() {
  alert("Buh-bye!");
}
</script> */}


// Chap # 44   Commenting


// This is a comment, ignored by the browser
// Declare an empty array
/*
When a comment requires more than one line,
a block comment like this, with its opening
and closing tags, is the way to go.
*/


// Chap # 45   Events: link


// <a href="#" onClick="alert('Hi');">Click</a> 
// <a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a> 


// Chap # 46   Events: button


// <input type="button" value="Click" onClick="alert('Hello world!');"></input> 


// Chap # 47   Events: mouse


// <img src="before-pic.jpg" onMouseover="src='after-pic.jpg'">
// <img src="before-pic.jpg" onMouseover="src='after-pic.jpg'" onMouseout="src='before-pic.jpg'"> 


// Chap # 48   Events: fields


// <input type="text" size="30" onFocus="this.style.backgroundColor='yellow';"
// onBlur="this.style.backgroundColor='white';"></input>
// <input type="text" size="30" onFocus="makeFieldYellow();" onBlur="makeFieldWhite();"></input>


// Chap # 49   Reading field values


// <form onSubmit="checkAddress('email');"></form>


// Chap # 50   Setting field values


// function fillCity() {
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch (zipEntered) {
//     case "60608" :
//       cityName = "Chicago";
//       break;
//     case "68114" :
//       cityName = "Omaha";
//     break;
//     case "53212" :
//       cityName = "Milwaukee";
//       }
//       document.getElementById("city").value = cityName;
//     }


// Chap # 51   Reading and setting paragraph text


// <p id="slowLoris">
// Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.
// <a href="javascript:void(0);" onClick="expandLoris();"><em>Click for more.</em></a>
// </p>
//function expandLoris() {
//  var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which
//    make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of
//    distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several
//    adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.
//    Slow lorises have a toxic bite, a rare trait among mammals.";
//  document.getElementById("slowLoris").innerHTML = expandedParagraph;
//}


// Chap # 52   Manipulating images and text


// <img src="blobfish.jpg" id="ugly" onClick="makeInvisible();"></img>
// function makeInvisible() {
//   document.getElementById("ugly").className = "hidden";
// }


// Chap # 53  Swapping images


// <img src="before-pic.jpg" id="before" onMouseover="swapPic();">
// <img src="before-pic.jpg" id="before" onMouseover="swapPic(id,'after-pic.jpg');">


// Chap # 54   Swapping images and setting classes

// function swapPic() {
//   var pic = document.getElementById("before");
//   pic.src = "after-pic.jpg";
// }

// function getAddress() {
//   var link = document.getElementById("link1");
//   var address = link.href;
// }
  

// Chap # 55   Setting styles


// function makeBig() {
//   document.getElementById("p1").className += " big";
// }

// function makeBig() {
//   document.getElementById("p1").style.fontSize = "2em";
// }

// document.getElementById("pic99").style.cssFloat = "left";
// document.getElementById("mainPic").style.margin = "0 10px 0 10px;";
// document.getElementById("div9").style.visibility = "hidden";
// var m = document.getComputedStyle("mainPic").margin;


// Chap # 56   Target all elements by tag name


// var par = document.getElementsByTagName("p");

// var textInMiddleParagraph = par[1].innerHTML;
// par[1].innerHTML = "This SUV is too big.";

// for (var i = 0; i < par.length; i++) {
//   par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
// }
  
// var pics = document.getElementsByTagName("img");
// var pics = document.getElementsByTagName("div");
// var pics = document.getElementsByTagName("ul");


// Chap # 57  Target some elements by tag name


// var e = document.getElementByID("rules");
// var paragraphs = e.getElementsByTagName("p");

// var t = document.getElementById("table9");
// var cells = t.getElementsByTagName("td");
// for (var i = 0; i < cells.length; i++) {
//   cells[i].style.backgroundColor = "pink";
// }
