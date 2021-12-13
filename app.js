// CHAPTER 21-25

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName + " " + lastName;
// console.log("Welcome " + fullName);

// var favmob = prompt("Enter Your Favourite Mobile Model");
// var txtfavmob = "My favourite phone is : ";
// console.log(txtfavmob + favmob);
// console.log("Length of string : " + favmob.length);

// var str = "Pakistani";
// console.log(str);
// console.log("index of 'n' : " + str.indexOf("n"));

// var str = "Hello World";
// console.log(str);
// console.log("index of Last 'l' : " + str.lastIndexOf("l"));

// var str = "Pakistani";
// console.log(str);
// console.log("Character at index 3 : " + str.charAt(3));

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// console.log("Welcome " + firstName.concat(" " , lastName));

// var hyd = "Hyderabad";
// var isl = hyd.replace("Hyder","Islam");
// console.log(hyd,isl);

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replac = message.replace(/and/g,"&");
// console.log(replac);

// var num = "472";
// var strtype = typeof (num);
// console.log(num);
// console.log(strtype);

// var str = "472";
// var convrt = Number(str);
// var strtype = typeof (convrt);
// console.log(convrt);
// console.log(strtype);

// var usertxt = prompt("Enter Text");
// var uppercase = usertxt.toUpperCase();
// console.log(uppercase);

// var usertxt = prompt("Enter Text");
// var firstwrd = usertxt.slice(0,1).toUpperCase();
// var txt = usertxt.slice(1).toLowerCase();
// console.log(firstwrd+txt);

// var num = 35.36 ;
// var replace = num.toString().replace(".","");
// console.log(replace);

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var value = prompt("Bakery").toLowerCase();
// for (var i = 0; i < A.length; i++) {
//     var namearr = A[i];
//     if (namearr == value) {
//         console.log("Available");
//         break;
//     } else {
//         console.log("Not Available");
//         break;
//     }
// }

// var university = "University of Karachi";
// var split = university.split("");
// console.log(split);

// var usertxt = prompt("Enter Text");
// var char = usertxt.charAt(usertxt.length-1);
// console.log(usertxt);
// console.log(char);

// var string = "the quick brown fox jumps over the lazy dog";
// var count = string.match(/the/g).length;
// console.log(count);

// CHAPTER 21-25 COMPLETED

// CHAPTER 26-30

// var usernum = +prompt();
// var round = Math.round(usernum);
// var floor = Math.floor(usernum);
// var ceil = Math.ceil(usernum);
// console.log(usernum);
// console.log(round);
// console.log(floor);
// console.log(ceil);

// var usernum = +prompt();
// var round = Math.round(usernum);
// var floor = Math.floor(usernum);
// var ceil = Math.ceil(usernum);
// console.log(usernum);
// console.log(round);
// console.log(floor);
// console.log(ceil);

// var dice = Math.random()*6;
// var ceil = Math.ceil(dice);
// console.log(ceil);

// var dice = Math.random()*2;
// var ceil = Math.ceil(dice);
// if(ceil == 2){
//     console.log("Heads");
// }else{
//     console.log("Tails");
// }

// var dice = Math.random()*100;
// var ceil = Math.ceil(dice);
// console.log(ceil);

// var secretnum = 2;
// var usernum = +prompt("input a number between 1 and 10");
// if (usernum == secretnum){
//     console.log("Congratulations");
// }else{
//     console.log("Try Again");
// }

// CHAPTER 26-30 COMPLETED

// CHAPTER 31-34

// var date = new Date();
// console.log(date);

// var date = new Date();
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var month = date.getMonth();
// console.log(months[month]);

// var date = new Date();
// var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var day = date.getDay();
// console.log(days[day]);

// var date = new Date();
// var day = date.getDay();
// if (day < 15) {
//     console.log("First fifteen days of the month");
// }if (day > 15) {
//     console.log("Last days of the month");
// }

// var date = new Date();
// var time = date.getHours();
// if (time > 12){
//     console.log("It's PM");
// }if (time< 12 ){
//     console.log("It's AM");
// }

// var laterDate = new Date("31 Dec 2020");
// console.log(laterDate);

// var dateRamzan = new Date("18 Jun 2015");
// var dateNow = new Date();
// var diff = (dateNow - dateRamzan) / 1000 / 60 / 60 / 24;
// var parse = parseInt(diff);
// console.log(dateRamzan);
// console.log(dateNow);
// console.log(parse + " days have passed since 1st Ramadan 2015");

var date2015start = new Date("1-Jan-2015");
var start2015Time = date2015start.getTime();
var date = new Date("5-Dec-2015");
var dateTime = date.getTime();
var diff = (dateTime - start2015Time) / 1000 / 60 ;


console.log(diff)



