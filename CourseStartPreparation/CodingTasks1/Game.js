/*
Game

Three friends came up with a game for having fun in the break between the classes. One of them says a three-digit number and the others use it to form a mathematical expressions by using operators for sum and multiplication between the digits of that number.

The winner is the first one who founds the biggest number that is a result of the above mentioned rules.

Write a program 'game', which prints out that biggest number.

Input
The first line of the input will be positive three-digit number N.

Output
The result should be the calculated biggest number. 
*/

let input = ['185'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = gets().split('').map(Number);
let sum = number[0] + number[1] + number[2];
let sumAdd = number[0] + number[1] * number[2];
let sumAdd2 = number[0] * number[1] + number[2];
let add = number[0] * number[1] * number[2];
let arr = [sum, sumAdd, sumAdd2, add];

print(Math.max(...arr));