// Sort Numbers
// Write a program that reads a list of numbers separated by a comma and space.
// Arrange the numbers in descending order.
// Output all numbers on a single line, separated by a comma and a space.

let string = gets();
let stringArr = string.split(',');
let stringArrToNumbers = stringArr.map(Number);
stringArrToNumbers.sort((a, b) => b - a);
let news = stringArrToNumbers.join(', ');

print(news);

// Reverse Number
// Description
// Write a method that reverses the digits of a given decimal number.

let string = gets();
string = string.split('');
let reversedString = [];

for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
}

reversedString = reversedString.join('');
print(reversedString);

// Combine Lists
// Write a program that reads two lists of numbers and combines them by alternatingly taking elements:
// combine 1,2,3 and 7,8,9 -> 1,7,2,8,3,9
// you can assume that the input lists will have the same length.
// Print the resulting combined list to the output, separating elements with a comma.

let string1 = gets().split(',');
let string2 = gets().split(',');
let combinedArray = [];

for (let i = 0; i < string1.length; i++) {
    combinedArray.push(string1[i]);
    combinedArray.push(string2[i]);
}
combinedArray = combinedArray.join(',');
print(combinedArray);

// Rotate List
// Write a program that rotates a list several times (the first element becomes last).
// list = 1,2,3,4,5 and N = 2 -> result = 3,4,5,1,2
// Note that N could be larger than the length of the list.
// list = 1,2,3,4,5 and N = 6 -> result = 2,3,4,5,1

let string = gets().split(',');
let N = +gets();

for (let i = 0; i < N; i++) {
    string.push(string[i])
}
string.splice(0, N);
print(string);

// Is a List Sorted?
// Write a program that checks if a list is already sorted. For a list to be sorted, the next element must NOT be smaller than the previous one.

var count = +gets();
var list = [];

for (n = 1; n <= count; n++) {
    list = gets().split(",");
    var isOrdered = true;

    for (i = 1; i < list.length; i++) {
        if ((list[i] - list[i - 1]) < 0) {
            isOrdered = false;
            break;
        }
    }
    print(isOrdered);
}

// Remove Duplicates
// Write a program that removes all duplicates from a list of elements.
// 1,2,2,2,4,7 -> 1,2,4,7.
// Maintain the relative order of the remaining items.

let arr = gets().split(',');
let uniqueChars = [...new Set(arr)];

print(uniqueChars);

// Strange Order
// Write a program that orders a list of numbers in the following way:
// 3, -2, 1, 0, -1, 0, -2, 1 -> -2, -1, -2, 0, 0, 3, 1, 1
// You need to find out the criteria for yourself by looking at the example.You can also check the example below.

let arr = gets().split(',').map(Number);
let minus = [];
let zeros = [];
let plus = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        minus.push(arr[i])
    } else if (arr[i] === 0) {
        zeros.push(arr[i])
    } else if (arr[i] > 0) {
        plus.push(arr[i])
    }
}

let merge = [...minus, ...zeros, ...plus];
print(merge);

// Below and Above Average
// Write a program that calculates the average of a list of numbers. Display the average, all the numbers below the average, and all the numbers above the average. Maintain the relative order of numbers.

let arr = gets().split(',').map(Number);
let sum = 0;
let above = [];
let below = [];

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
let sumAvg = sum / arr.length;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > sumAvg) {
        above.push(arr[i])
    } else {
        below.push(arr[i])
    }
}
if (sumAvg === 0) {
    for (var i = 0; i < below.length; i++) {

        if (below[i] === 0) {
            below.splice(i, 1);
        }
    }
}
print(`avg: ${sumAvg.toFixed(2)}
below: ${below}
above: ${above}`)

// Array Sort
// Given an array integers, write a program that moves all of the zeroes to the end of it, while maintaining the relative order of the non-zero elements.

let arr = gets().split(',').map(Number);
let zeros = [];
let nonZeros = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 || arr[i] < 0) {
        nonZeros.push(arr[i])
    } else if (arr[i] === 0) {
        zeros.push(arr[i])
    }
}
let sumString = [...nonZeros, ...zeros];
print(sumString);

// Array Search
// Given an array of integers, some elements appear twice and others appear once. Each integer is in the range of [1, N], where N is the number of elements in the array.
// Find all the integers of [1, N] inclusive that do NOT appear in this array.

const line = gets().split(',');
let missingNumbers = '';

for (i = 1; i <= line.length; i++) {

    if (!line.includes(`${i}`)) {
        missingNumbers += `${i},`;
    }
}
print(missingNumbers.slice(0, missingNumbers.length - 1));

// Convert Degrees
// You need to provide conversion of the temperature given in Celsius to their Fahrenheit representation.

let arr = gets().split(' ').map(Number);

for (let i = 0; i < arr.length; i++) {
    let farenheit = arr[i] * 1.8 + 32;
    print(Math.trunc(Math.round(farenheit)));
}