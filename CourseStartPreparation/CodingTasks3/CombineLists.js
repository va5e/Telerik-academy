/*
Combine Lists
Write a program that reads two lists of numbers and combines them by alternatingly taking elements:

combine 1,2,3 and 7,8,9 -> 1,7,2,8,3,9
you can assume that the input lists will have the same length.
Print the resulting combined list to the output, separating elements with a comma.

Input
On the first line you will receive the first list.
On the second line -> 2nd list.
Output
On the only line of output, print all the numbers in format n1,n2,n3,..n
*/

let input = ['2,3,1', '5,2,3']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arrOne = gets().split(',');
let arrTwo = gets().split(',');
let combinedArr = []

for (let i = 0; i < arrOne.length; i++) {
    combinedArr.push(arrOne[i] + ',' + arrTwo[i])
}
let string = combinedArr.join(',')

print(string);