// //1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
// function power(a,b){
//     var pow=1;
//     for(var i=1;i<=b;i++){
//     pow*=a;}
//     return pow;
// }
// var a=+prompt("Enter base value");
// var b=+prompt("Enter the value of power");
// document.write(power(a,b));

// //2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } 
//     else {
//       return false;
//     }
//   }
  
//   var year =+prompt("Enter a year");
//   if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
//   } else {
//     console.log(year + " is not a leap year.");
//   }

// //3.If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by

// function calS(a,b,c){
//     return (a+b+c)/2;
   
// }
// function calArea(a,b,c){
//     var s=calS(a,b,c);
//     var area=Math.sqrt((s)*(s-a)*(s-b)*(s-c));
//     return area;
// } 
// var a=+prompt("Enter first side");
// var b=+prompt("Enter second side");
// var c=+prompt("Enter third side");
// console.log(calArea(a,b,c));


// //4.
// function avg(sub1,sub2,sub3){
//     return (sub1+sub2+sub3)/3;
// }
// function perc(sub1,sub2,sub3){
//     return ((sub1+sub2+sub3)/300)*100;
// }
// function mainFunc(sub1,sub2,sub3){
//     var average=avg(sub1,sub2,sub3);
//     var percentage=perc(sub1,sub2,sub3);
//     document.write("Marks of first subject: "+sub1+" <br>Marks of second subject: "+sub2+" <br>Marks of third subject: "+sub3+"<br>Average: "+average+"<br>percentage: "+percentage);
// }
// var sub1=+prompt("Enter marks of first subject");
// var sub2=+prompt("Enter marks of second subject");
// var sub3=+prompt("Enter marks of third subject");
// mainFunc(sub1,sub2,sub3);

// //5.
// function indexOf(str,ch){
//     for(var i=0;i<=str.length-1;i++){
//         if(str[i]==ch){
//             return i;
//         }
//     }
//     if(str[i]!=ch){
//         return "Character do not exist in string"
//     }
// }
// var str=prompt("Enter string");
// var ch=prompt("Enter character whose index you want to find out");
// console.log(indexOf(str,ch));


// //6.
// function delVowels(sent){
//     return sent.replaceAll(/[aeiouAEIOU]/g,'');
// }
// var sent=prompt("Enter a sentence");
// document.write(delVowels(sent));


// //7.
// function countVowel(str){
//     var count=0;
//     for(var i=0;i<=str.length-1;i++){
//     switch(str[i]+str[i+1]){
//         case "aa":
//         case "ae":
//         case "ai":
//         case "ao":
//         case "au":
//         case "ea":
//         case "ee":
//         case "ei":
//         case "eo":
//         case "eu":
//         case "ia":
//         case "ie":
//         case "ii":
//         case "io":
//         case "iu":
//         case "oa":
//         case "oe":
//         case "oi":
//         case "oo":
//         case "ou":
//         case "ua":
//         case "ue":
//         case "ui":
//         case "uo":
//         case "uu":
//         count++;
//         break;
//     }
// } return count;
// }
// var str=prompt("Enter string");
// document.write(countVowel(str));

// //8.
// function meters(dist){
//     return dist*1000;
// }
// function feet(dist){
//     var m=meters(dist);
//     return m*3.28084;
// }
// function inches(dist){
//     var f=feet(dist);
//     return f*12;
// }
// function centimeter(dist){
//     var i=inches(dist);
//     return i*2.54;
// }
// var dist=+prompt("Enter distance in km");
// document.write("Meter: "+meters(dist)+"<br>Feet: "+feet(dist)+"<br>Inches: "+inches(dist)+"<br>Centimeter: "+centimeter(dist));


// //9.
// function calculateOvertimePay(hoursWorked) {
//         var regularHours = 40;
//         var overtimeRate = 12.00;    
//         if (hoursWorked > regularHours) {
//             const overtimeHours = hoursWorked - regularHours;
//             const overtimePay = overtimeHours * overtimeRate;
//             return overtimePay;
//         } else {
//             return 0.0; 
//         }
//     }
//     var hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
//     var overtimePay = calculateOvertimePay(hoursWorked);
//     if (overtimePay > 0) {
//         console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);
//     } else {
//         console.log("No overtime pay earned.");}

// //10.
// function calculateCurrencyNotes(amountInHundreds) {
//     var totalAmount = amountInHundreds * 100;
//     let numHundreds = 0;
//     let numFifties = 0;
//     let numTens = 0;
//     while (totalAmount >= 100) {
//         totalAmount -= 100;
//         numHundreds++;
//     }
//     while (totalAmount >= 50) {
//         totalAmount -= 50;
//         numFifties++;
//     }
//     while (totalAmount >= 10) {
//         totalAmount -= 10;
//         numTens++;
//     }
//     console.log(`Number of 100 rupee notes: ${numHundreds}`);
//     console.log(`Number of 50 rupee notes: ${numFifties}`);
//     console.log(`Number of 10 rupee notes: ${numTens}`);
// }
// const amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));
// calculateCurrencyNotes(amountInHundreds);
    