// Dog Years
// Most people believe that 1 human year (HY) equals 7 dog years (DY), however, dogs reach adulthood in approximately 2 human years.
// So it's better to count the first two HY as 10 DY each and then count the remaining HY as 4 DY each.
// Write a program that correctly converts human years (HY) to dog years (DY). You may need some form of conditional logic.

let humanYears = +gets();
let dogYears;

if (humanYears <= 2) {
    dogYears = humanYears * 10;
    print(dogYears);
} else {
    dogYears = 20;
    let dogYearsAfterTwo = dogYears + ((humanYears - 2) * 4)
    print(dogYearsAfterTwo);
}

// Chess Square Color
// Write a program that determines the color of a chessboard square based on its Label and Rank
// Labels have values from a to h
// Ranks have values from 1 to 8
// chessboard scheme

let L = gets();
let R = gets();

if ((L === 'a' || L === 'c' || L === 'e' || L === 'g') &&
    (R !== 1 && R % 2 === 0)) {
    print('light');
} else if ((L === 'b' || L === 'd' || L === 'f' || L === 'h') &&
    (R !== 1 && R % 2 > 0)) {
    print('light');
} else {
    print('dark');
}

// Guess the Season
// Write a program that displays the name of the season associated with a given date and month. Use the table below to determine the season's start and end dates.
// Season	Start Date
// Spring	March 20
// Summer	June 21
// Autumn	September 22
// Winter	December 21
// For example, Autumn lasts from September 22 to December 20, both inclusive.

let month = gets();
let date = +gets();

switch (month) {
    case 'March': date >= 20 ? print('Spring') : print('Winter'); break;
    case 'April':
    case 'May': print('Spring'); break;
    case 'June': date >= 21 ? print('Summer') : print('Spring'); break;
    case 'July':
    case 'August': print('Summer'); break;
    case 'September': date >= 22 ? print('Autumn') : print('Summer'); break;
    case 'October':
    case 'November': print('Autumn'); break;
    case 'December': date >= 21 ? print('Winter') : print('Autumn'); break;
    case 'Januar':
    case 'February': print('Winter'); break;
}

// Calculate Change
// Write a program that determines the least amount of coins needed for a cashier to return change.
// For example, if the price of something is 0.76 leva and the customer has paid 1 leva, the least amount of coins is 1 x 20 stotinki and 2 x 2 stotinki.
// Use the coins of 1 lev, 50, 20, 10, 5, 2 and 1 stotinki.

let price = +gets();
let moneyGiven = +gets();
let change = moneyGiven.toFixed(2) - price.toFixed(2);
change = (change * 100).toFixed(0);
let leva = 0;
let stotinki50 = 0;
let stotinki20 = 0;
let stotinki10 = 0;
let stotinki5 = 0;
let stotinki2 = 0;
let stotinki1 = 0;

if (change >= 100) {
    while (change >= 100) {
        change -= 100;
        leva++
    }
    print(`${leva} x 1 lev`);
}

if (change >= 50) {
    while (change >= 50) {
        change -= 50;
        stotinki50++
    }
    print(`${stotinki50} x 50 stotinki`);
}

if (change >= 20) {
    while (change >= 20) {
        change -= 20;
        stotinki20++
    }
    print(`${stotinki20} x 20 stotinki`);
}

if (change >= 10) {
    while (change >= 10) {
        change -= 10;
        stotinki10++
    }
    print(`${stotinki10} x 10 stotinki`);
}

if (change >= 5) {
    while (change >= 5) {
        change -= 5;
        stotinki5++
    }
    print(`${stotinki5} x 5 stotinki`);
}
if (change >= 2) {
    while (change >= 2) {
        change -= 2;
        stotinki2++
    }
    print(`${stotinki2} x 2 stotinki`);
}

if (change >= 1) {
    while (change >= 1) {
        change -= 1;
        stotinki1++
    }
    print(`${stotinki1} x 1 stotinka`);
}

// Phone Bill
// A phone bill plan includes 1 hour of free calls and 20 text messages for 12.00 levas. Each additional minute costs 0.10 levas and each additional message costs 0.06 levas. Also, any additional minutes/text messages are subject to 20% sales tax. Write a program that calculates the additional charge for text, the additional charge for minutes, and the sales tax charge for both. Also, display the total amount paid.

let amountOfTextMessages = +gets();
let amountOfMinutes = +gets();
let numberOfExtraMessages = 0;
let numberOfExtraMinutes = 0;
let taxForExtraMessages = 0;
let taxForExtraMinutes = 0;

if (amountOfTextMessages > 20) {
    numberOfExtraMessages = amountOfTextMessages - 20;
    taxForExtraMessages = numberOfExtraMessages * 0.06;
}
if (amountOfMinutes > 60) {
    numberOfExtraMinutes = amountOfMinutes - 60;
    taxForExtraMinutes = numberOfExtraMinutes * 0.1;
}

let addTaxForMandMess = (taxForExtraMessages + taxForExtraMinutes) * 0.2;
let total = 12 + addTaxForMandMess + taxForExtraMinutes + taxForExtraMessages;
print(`${numberOfExtraMessages} additional messages for ${taxForExtraMessages.toFixed(2)} levas`)
print(`${numberOfExtraMinutes} additional minutes for ${taxForExtraMinutes.toFixed(2)} levas`)
print(`${addTaxForMandMess.toFixed(2)} additional taxes `);
print(`${total.toFixed(2)} total bill`);

// //Biggest of Three
// Description
// Write a program that finds the biggest of three numbers.

let a = +gets();
let b = +gets();
let c = +gets();

if (a > b && a > c) {
    print(a);
} else if (b > a && b > c) {
    print(b);
} else if (c > a && c > b) {
    print(c);
} else if (a === b && b === c) {
    print(a);
} else if (a > b && c > a) {
    print(c);
} else if (a > c && b > a) {
    print(b);
} else if (a === b && c > b) {
    print(c);
} else if (a === c && b > c) {
    print(b);
} else if (b > a && b < c) {
    print(c);
} else if (b > c && b < a) {
    print(a);
} else if (b === a && a < c) {
    print(c);
} else if (b === c && c < a) {
    print(a);
} else if (c > a && c < b) {
    print(b);
} else if (c > b && b < a) {
    print(a);
} else if (c === a && b > a) {
    print(b);
} else if (c === b && b < a) {
    print(a);
}
//Here I would use array and fucntion Math.max.. but I did not know that at that point

// Biggest of Five
// Description
// Write a program that finds the biggest of 5 numbers, using only 5 if statements.

let a = +gets();
let b = +gets();
let c = +gets();
let d = +gets();
let e = +gets();

print(Math.max(a, b, c, d, e));

// Sort Three Numbers
// Description
// Write a program that enters 3 real numbers and prints them sorted in descending order.
// Use nested if statements.
// Don’t use arrays and the built-in sorting functionality.

let a = +gets();
let b = +gets();
let c = +gets();

if (a > b && a > c && b > c) {
    print(`${a} ${b} ${c}`)
} else if (a > b && a > c && b < c) {
    print(`${a} ${c} ${b}`)
} else if (b > a && b > c && a > c) {
    print(`${b} ${a} ${c}`)
} else if (b > a && b > c && a < c) {
    print(`${b} ${c} ${a}`)
} else if (c > a && c > b && a < b) {
    print(`${c} ${b} ${a}`)
} else if (c > a && c > b && a > b) {
    print(`${c} ${a} ${b}`)
} else if (a === b && c > a) {
    print(`${c} ${a} ${b}`)
} else if (a === b && c < a) {
    print(`${a} ${b} ${c}`)
} else if (a === c && b > a) {
    print(`${b} ${a} ${c}`)
} else if (a === c && b < a) {
    print(`${a} ${c} ${b}`)
} else if (b === c && a > b) {
    print(`${a} ${b} ${c}`)
} else if (b === c && a < b) {
    print(`${b} ${c} ${a}`)
} else {
    print(`${a} ${b} ${c}`);
}


// Digit as Word
// Description
// Write a program that read a digit [0-9] from the console, and depending on the input, shows the digit as a word (in English).
// Print "not a digit" in case of invalid input.
// Use a switch statement.

let a = gets();

switch (a) {
    case '0':
        print('zero'); break;
    case '1':
        print('one'); break;
    case '2':
        print('two'); break;
    case '3':
        print('three'); break;
    case '4':
        print('four'); break;
    case '5':
        print('five'); break;
    case '6':
        print('six'); break;
    case '7':
        print('seven'); break;
    case '8':
        print('eight'); break;
    case '9':
        print('nine'); break;
    default:
        print('not a digit'); break;
}

// Chinese Zodiac
// The Chinese zodiac assigns an animal to year according to the following table:
// Year	Animal		Year	Animal
// 2000	Dragon		2006	Dog
// 2001	Snake		2007	Pig
// 2002	Horse		2008	Rat
// 2003	Sheep		2009	Ox
// 2004	Monkey		2010	Tiger
// 2005	Rooster		2011	Hare
// Write a program that determines the zodiac sign for a particular year. Note that the cycle repeats itself, so 2012 will be the year of the Dragon again.

let year = +gets();

if (year % 12 === 8) {
    print('Dragon');
} else if (year % 12 === 9) {
    print('Snake')
} else if (year % 12 === 10) {
    print('Horse')
} else if (year % 12 === 11) {
    print('Sheep')
} else if (year % 12 === 0) {
    print('Monkey')
} else if (year % 12 === 1) {
    print('Rooster')
} else if (year % 12 === 2) {
    print('Dog')
} else if (year % 12 === 3) {
    print('Pig')
} else if (year % 12 === 4) {
    print('Rat')
} else if (year % 12 === 5) {
    print('Ox')
} else if (year % 12 === 6) {
    print('Tiger')
} else if (year % 12 === 7) {
    print('Hare')
}