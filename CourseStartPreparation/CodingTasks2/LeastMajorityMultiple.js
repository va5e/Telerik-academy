/*
Least Majority Multiple
Given five positive integers, their least majority multiple is the smallest positive integer that is divisible by at least three of them.

Your task is to write a program that for given distinct integers a, b, c, d and e, returns their least majority multiple.

For example if we have 1, 2, 3, 4 and 5 the majority multiple of the given five numbers is 4 because it is divisible by 1, 2, and 4.

Another example: if we have 30, 42, 70, 35 and 90 the answer will be 210, because it is divisible by 30, 42, 70, and 35 - four out of five numbers, which is a majority.

Input
Read from the standard input

The input data will consist of 5 lines.

The numbers a, b, c, d and e will each be on a single line.

The input data will always be valid and in the format described. There is no need to check it explicitly.

Output
Print on the standard output

On the only output line you must print the least majority multiple of the given numbers.

Constraints
a, b, c, d and e will each be integer numbers between 1 and 100, inclusive.
a, b, c, d and e will be distinct.
*/

let input = ['1', '2', '3', '4', '5'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arrNumbers = [+gets(), +gets(), +gets(), +gets(), +gets()]

for (let i = 1; ; i++) {
    let tester = 0;

    for (let j = 0; j < arrNumbers.length; j++) {

        if (i % arrNumbers[j] === 0) {
            tester += 1;
        }
    }
    if (tester >= 3) {
        console.log(i)
        break;
    }
}

