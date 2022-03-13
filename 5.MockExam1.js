// Crooked Digits
// The crooked digit of a given number N is calculated using the number's digits in a very weird and bendy algorithm. The algorithm takes the following steps:
// Sums the digits of the number N and stores the result back in N.
// If the obtained result is bigger than 9, step 1. is repeated, otherwise the algorithm finishes.
// The last obtained value of N is the result, calculated by the algorithm.

let N = gets();
let arr = N.split('')
let sum = 0;
let newRes = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '.' || arr[i] === '-') {
        arr.splice(i, 1);
    }
}

arr = arr.map(Number);

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

if (sum > 9) {
    N = sum;
}

if (N > 9) {
    N = N.toString()
    N = N.split('')
    N = N.map(Number);
    sum = 0;
    for (let i = 0; i < N.length; i++) {
        sum = sum + N[i];
    }
}

if (N > 9) {
    N = N.toString()
    N = N.split('')
    N = N.map(Number);
    sum = 0;
    for (let i = 0; i < N.length; i++) {
        sum = sum + N[i];
    }
}

if (sum > 9) {
    N = sum;
    N = N.toString()
    N = N.split('')
    N = N.map(Number);
    sum = 0;
    for (let i = 0; i < N.length; i++) {
        sum = sum + N[i];
    }
}

if (sum > 9) {
    N = sum;
    N = N.toString()
    N = N.split('')
    N = N.map(Number);
    sum = 0;
    for (let i = 0; i < N.length; i++) {
        sum = sum + N[i];
    }
}

if (sum > 9) {
    N = sum;
    N = N.toString()
    N = N.split('')
    N = N.map(Number);
    sum = 0;
    for (let i = 0; i < N.length; i++) {
        sum = sum + N[i];
    }
}
print(sum);

// Prime Triangle
// Description
// We know that you love math, so we have prepared a very interesting task, that involves both geometry and prime numbers.
// By a given N number, from which you need to generate a sequence of 1 to N inclusive. For every prime number in that sequence, you need to print out all the other numbers before it (and the number itself), whether they are prime or not

let num = +gets();
let arr = [...Array(num + 1).keys()]
let line = '';

for (let i = 1; i <= arr.length - 1; i++) {

    if (i === 1) {
        line += '1';
    } else if (isPrime(arr[i]) === true) {
        line += '1'
    } else if (isPrime(arr[i]) === false) {
        line += '0'
        continue;
    }
    print(line);
}

function isPrime(num) {
    var sqrtnum = Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for (var i = 2; i < sqrtnum + 1; i++) { // sqrtnum+1
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

// Balanced Numbers
// A balanced number is a 3-digit number whose second digit is equal to the sum of the first and last digit.
// Write a program which reads and sums balanced numbers. You should stop when an unbalanced number is given.

let sum = 0;

for (let i = 0; i < 1000; i++) {
    let num = gets().split('');
    if (Number(num[0]) + Number(num[2]) === Number(num[1])) {
        sum += (Number(num[0] + num[1] + num[2]))
    } else {
        break;
    }
}
print(sum);
