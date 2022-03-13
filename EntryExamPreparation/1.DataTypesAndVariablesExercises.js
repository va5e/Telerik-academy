//Hello, Telerik academy
//Write a program that will print on the console Hello, Telerik Academy!.

print('Hello, Telerik Academy!');

//Hello you
// Write a program that will read a name as input from the console and salute the person.

let firstName = gets();
print(`Hello, ${firstName}!`);

//Rectangle area
//Write a program that will read a width and a height from the console and will calculate the area of the rectangle and print it on the console.

let rectWidth = +gets();
let rectHeight = +gets();

print(rectWidth * rectHeight);

//Bottle deposit
//When you buy something to drink you make a deposit for the bottle. Each bottle has a different deposit. Half liter bottles have $0.1 deposit and the one liter bottles have $0.25 deposit. Calculate the sum which you will make when returning the bottles. You must print two digits after the decimal point.

let halfLiterBottleDeposit = 0.1;
let oneLiterBottleDeposit = 0.25;
let halfLiterB = +gets();
let literB = +gets();
let sum = (halfLiterB * halfLiterBottleDeposit) + (literB * oneLiterBottleDeposit);

print(sum.toFixed(2));

//Tips
//You are at a restaurant and the waiter brings you the bill. You will have to calculate how much the tip must be. The tips are different in different countries, but here we will use 10%.

let bill = Number(gets());

print((bill * 0.10) + bill);

//Sum positive
//Write a program that reads a positive integer (n) You must print the sum of all integers from 1 to n.

let n = +gets();
let sumOfIntegers = n * (n + 1) / 2;

print(sumOfIntegers);

//Interest
//You have deposited a sum into your bank account for 3 years. The bank has announced an interest of 5% per year. Each time the interest is calculated and added to your deposit. You have to calculate the amount in your deposit for each year.

let sumDeposit = +gets();
let yearOne = sumDeposit + (sumDeposit * 0.05);
let yearTwo = yearOne + (yearOne * 0.05);
let yearThree = yearTwo + (yearTwo * 0.05);

print(yearOne.toFixed(2));
print(yearTwo.toFixed(2));
print(yearThree.toFixed(2));

//Arithmetics
//Read two numbers from the console and calculate:
// The sum of a and b
// The difference when a is subtracted from b
// The product of a and b
// The remainder when a is divided by b
// The result of a powered to b

let a = +gets();
let b = +gets();

print(a + b);
print(a - b);
print(a * b);
print(a % b);
print(a ** b);

//Converter
// You want to buy this really cool car from the UK, but you are worried about the fuel consumption. The values you see are MPG (miles per gallon). You have no idea what 20 MPG means so, being a programmer, decide to write a converter that helps you calculate the consumption.
// Doing some research, you learn that 1 gallon = 4.54 litres and 1 mile = 1.6 km.
// After the calculation, round the result down to the neareast whole number.

let m = +gets();
let result = parseInt((4.54 / (m * 1.6)) * 100);

print(`${result} litres per 100 km`);

//Time
//Write a program that reads days, hours, minutes and seconds from the standard input. Display the total amount of seconds.

let days = +gets();
let hours = +gets();
let minutes = +gets();
let seconds = +gets();
let sumHours = days * 24 + hours;
let sumMinutes = sumHours * 60 + minutes;
let sumSeconds = sumMinutes * 60 + seconds;

print(sumSeconds);

//Sum digits
// Write a program that reads a four-digit number and displays the sum of its digits
// 1213 => 1 + 2 + 1 + 3 = 7
// 2346 => 2 + 3 + 4 + 6 = 15

let input = gets();
let sumOfDigits = Number(String.fromCharCode(Number(
    input.charCodeAt(0)))) + Number(String.fromCharCode(Number(
        input.charCodeAt(1)))) + Number(String.fromCharCode(Number(
            input.charCodeAt(2)))) + Number(String.fromCharCode(Number(
                input.charCodeAt(3))));

print(sumOfDigits);