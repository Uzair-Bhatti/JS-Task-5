// chapter 27 & 30 //

// Q1
// var input = prompt("Enter positive integer")
// var number = parseInt(input)

// if(input > 0){
//     var roundValue = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);
// }else {
//     alert("Invalid number")
// }

// document.write("Number : " + number + "<br>")
// document.write("Round off value : " + roundValue + "<br>")
// document.write("Floor value : " + floorValue + "<br>")
// document.write("Ceil value : " + ceilValue + "<br>")

// Q2
// var input = prompt("Enter negative integer")
// var number = parseInt(input)

// if(input < 0){
//     var roundValue = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);
// }else {
//     alert("Invalid number")
// }

// document.write("Number : " + number + "<br>")
// document.write("Round off value : " + roundValue + "<br>")
// document.write("Floor value : " + floorValue + "<br>")
// document.write("Ceil value : " + ceilValue + "<br>")

// Q3
// var input = prompt("Enter number")
// var number = parseInt(input)

// var absvalue = Math.abs(number)

// document.write("The absolute value of " + number + " is " + absvalue + " .")

// Q4
// var result = Math.random() * 6;
// var result2 = Math.floor(result) + 1;

// console.log("random dice value : " + result2)

// Q5
// var randomValue = Math.random();
// var coinResult = (randomValue < 0.5) ? "Heads" : "Tails";


// Q6
// var num1 = 1;
// var num2 = 100;
// var randomValue = Math.random()* (num2 - num1);
// var result = Math.floor(randomValue);

// document.write("random number between 1 and 100 is " + result)

// Q7
var userweight = parseInt(prompt("Enter your weight in kilograms"));

if(!isNaN(userweight)) {
    alert("Your weight is " + userweight + "kilograms")
} else {
    alert("Invalid weight. Please use a valid format (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms)")
} 

// Q8
// var secretNumber = Math.random() * 10;
// var result = Math.floor(secretNumber) + 1;

// var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// var userInputround = Math.floor(userInput) + 1;

// if (userInputround === result) {
//     console.log("Congratulations! You guessed the secret number correctly.");
// } else {
//     console.log(`Sorry, the secret number was ${secretNumber}. Try again!`);
// }

// chapter 31 - 34

// Q1
// var date = new Date();

// console.log(date)

// Q2
// var date = new Date();
// var month = date.getMonth();
// var array = [
//     "janurary",
//     "feburary",
//     "march",
//     "april",
//     "may",
//     "june",
//     "july",
//     "august",
//     "september",
//     "october",
//     "november",
//     "december"
//   ];

// console.log(array[month]);

// Q3
// var date = new Date();
// var day = date.getDay();
// var array = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// console.log(array[day]);

// Q4
// var date = new Date();
// var day = date.getDay();

// if(day === 0 || day === 6){
//     alert("It's fun day")
// }else{
//     alert("It's not fun day")
// }

// Q5
// var date = new Date();
// var currentday = date.getDate();

// if(currentday <= 15){
//     alert("“First fifteen days of the month")
// }else {
//     alert("Last days of the month")
// }

// Q6
// var currentDate = new Date();
// var doomsDaysec = new Date().getTime();
// var doomsDaymin = Math.floor(currentDate.getTime() / 60000);

// console.log(`current date : ${currentDate}`)
// console.log(`Ellapsed milliseconds since Jan 1, 1970 : ${doomsDaysec}`)
// console.log(`Ellapsed minutes since midnight, Jan. 1, 1970: ${doomsDaymin}`);

// Q7
// var date = new Date();
// var hours = date.getHours();

// if(hours < 12){
//     console.log("It's A.M.")
// }else{
//     console.log("It's P.M.")
// }

// Q8
// var doomsDay = new Date("Dec 31, 2020");

// console.log(doomsDay);

// Q9
// var date = new Date();
// var doomsDay = new Date("June 18, 2015");

// var timediff = date - doomsDay ;
// var daysPassed = Math.floor(timediff / (1000 * 60 * 60 * 24));

// document.write( daysPassed + " days have passed since 1st Ramadhan 2015")

// Q10
// var referencedate = new Date("Dec 05, 2015 22:05:16 PKT");
// var msdate = referencedate.getSeconds();
// var startdate = new Date("Jan 01, 2015 00:00:00 PKT");
// var ms = startdate.getSeconds();

// var difference = referencedate - startdate;
// var seconds = Math.floor(difference / (1000 * 60));

// console.log(`On reference date Dec 05, 2015 22:05:16 ${seconds} seconds has passed since the beginning of 2015`)

// Q11
// var currentDate = new Date();
// var currenthour = currentDate.getHours() - 1;

// currentDate.setHours(currenthour + 1);

// document.write(`<p>Current Date and Time: ${currentDate} 1 hour ago, it was ${currenthour}</p>`)


// Q12
// var currentDate = new Date();
// var oneHundredYearsAgo = new Date(currentDate);
// oneHundredYearsAgo.setFullYear(currentDate.getFullYear() - 100);

// var formattedDate = oneHundredYearsAgo.toLocaleDateString();

// alert(`100 years ago, the date was: ${formattedDate}`);

// Q13
// var age = parseInt(prompt("Enter your age"));
// var currentYear = new Date().getFullYear();

// var birthYear = currentYear - age;

// document.write("Your age is : " + age + "<br>");
// document.write("Your birth year : " + birthYear)

// Q14
// var customername = prompt("Enter your name");
// var currentmonth = new Date();
// var month = currentmonth.getMonth();
// var array = [
//     "janurary",
//     "feburary",
//     "march",
//     "april",
//     "may",
//     "june",
//     "july",
//     "august",
//     "september",
//     "october",
//     "november",
//     "december"
// ];
// var units = parseInt(prompt("Enter units used"));
// var chargeunit = parseInt(prompt("Enter charge per unit"));

// var netamount = units*chargeunit
// var latecharge = 350;
// var grossamount = netamount + latecharge;

// document.write("Customer Name : " + customername + "<br>");
// document.write("Current Month : " + array[month] + "<br>");
// document.write("Number of units : " + units + "<br>");
// document.write("Charge per unit : " + chargeunit + "<br>");
// document.write("Net Amount Payable (within Due Date) : " + netamount + "<br>");
// document.write("Late payment surcharge : " + latecharge + "<br>");
// document.write("Gross Amount Payable (after Due Date) : " + grossamount)

