// Numbers From 1 to N
// Write a program that enters from the console a positive integer n and prints all the numbers from 1 to N inclusive, on a single line, separated by a whitespace.

let n = gets();
let newLine = "";

for (let i = 1; i <= n; i++) {
    newLine = newLine + i + ' ';
}
print(newLine);

// Not Divisible Number
// Description
// Write a program that reads from the console a positive integer N and prints all the numbers from 1 to N not divisible by 3 or 7, on a single line, separated by a space.

let n = +gets();
let newLine = "";

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 7 === 0) {
        continue;
    }
    newLine = newLine + i + ' ';
}
print(newLine);

// Find Average
// You need to calculate the average of a collection of values. Every value will be valid number. The average must be printed with two digits after the decimal point.

let numsCount = Number(gets());
let sum = 0;

for (let i = 0; i < numsCount; i++) {
    sum += Number(gets());
}

let average = sum / numsCount;
print(average.toFixed(2));

// Min Max Sum Average
// Description
// Write a program that reads from the console a sequence of N real numbers and returns the minimal, the maximal number, the sum and the average of all numbers (displayed with 2 digits after the decimal point).
// The input starts by the number N (alone in a line) followed by N lines, each holding an real number.
// The output is like in the examples below.

let n = +gets();
let results = [];
let sum = 0;

for (let i = 0; i < n; i++) {
    results.push(+gets());
}

for (let i = 0; results.length > i; i++) {
    sum += results[i];
}
print(`min=${(Math.min(...results)).toFixed(2)}`);
print(`max=${(Math.max(...results)).toFixed(2)}`);
print(`sum=${(sum).toFixed(2)}`);
print(`avg=${(sum / n).toFixed(2)}`);

// Calculate Discount
// You need to calculate the discounted price for each item in your shopping cart. The discount is 65%, a real deal for you.

let numberOfClothes = +gets();
let discountedPrice = 0;

for (let i = 0; i < numberOfClothes; i++) {
    let price = +gets();
    discountedPrice = (price - (price * 0.65));

    print(discountedPrice.toFixed(2));
};

// Print Deck of Cards
// Description
// Write a program that reads a card sign(as a string) from the console and generates and prints all possible cards from a standard deck of 52 cards up to the card with the given sign(without the jokers). The cards should be printed using the classical notation (like 5 of spades, A of hearts, 9 of clubs; and K of diamonds).
// The card faces should start from 2 to A(10 is 10).
// Print each card face in its four possible suits: clubs, diamonds, hearts and spades.

let face = gets();
let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let index = 0;

do {
    print(`${cards[index]} of spades, ${cards[index]} of clubs, ${cards[index]} of hearts, ${cards[index]} of diamonds`);
} while (cards[index++] !== face);

// Calculate Complex Sum
// Description
// Write a program that, for a given two numbers N and x, calculates the sum S = 1 + 1!/x + 2!/x2 + … + N!/xN.
// Use only one loop. Print the result with 5 digits after the decimal point.

let N = +gets();
let x = +gets();
let S = 0;

for (let i = 1; i <= N; i++) {
    S += factorialize(i) / Math.pow(x, i);
}
print((S + 1).toFixed(5));

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}

// Matrix Numbers
// Write a program that reads from the console a positive integer number N and prints a matrix like in the examples below. Use two nested loops.

let number = +gets();
let result = "";
for (i = 1; i <= number; i++) {
    for (j = i; j < number + i; j++) {
        result += ' ' + j;
    }
    print(result)
    result = "";
}

// Odd and Even Product
// Description
// You are given N integers, each on a new line
// Write a program that checks whether the product of the odd lines is equal to the product of the even lines.
// Lines are counted from 1 to N, so the first line is odd, the second is even, etc.

let N = +gets();
let even = 1;
let odd = 1;

for (let i = 1; i <= N; i++) {
    let num = +gets();
    if (i % 2 === 0) {
        even = even * num;
    } else {
        odd = odd * num;
    }
}

if (even === odd) {
    print(`yes ${even}`)
} else { print(`no ${odd} ${even}`) }

// Find Maximum Value
// Write a program that finds the maximum number from a given sequence.

let N = +gets();
let arr = [];

for (let i = 0; i < 3; i++) {
    arr.push(+gets())
}
print(Math.max(...arr))

// Find Largest Three Values
// Write a program that, that finds the three largest numbers in a sequence and prints them in descending order in the following format:
// {largest}, {second_largest} and {third_largest}.
// See the example for clarity

let N = +gets();
let biggestArr = [];

for (let i = 0; i < N; i++) {
    biggestArr.push(+gets());
}
biggestArr.sort(function (a, b) {
    return a - b;
});
print(`${biggestArr[[biggestArr.length - 1]]}, ${biggestArr[[biggestArr.length - 2]]} and ${biggestArr[[biggestArr.length - 3]]}`);

// Prime Factors
// Write a program that finds the prime factors of a given non-prime number. List the factors in ascending order.
// 12 = 2 * 2 * 3
// 100 = 2 * 2 * 5 * 5

let N = +gets();
let result = 0;

for (let i = 2; i < 1000; i++) {
    while (N % i === 0) {
        result = i;
        N = N / i;
        print(result);
    }
}
