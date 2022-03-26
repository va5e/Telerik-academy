/*
Biggest Prime Number

Description

Write a program that finds all prime numbers in the range [1 ... N]. Use the Sieve of Eratosthenes algorithm. The program should print the biggest prime number which is <= N.

Input
On the first line you will receive the number N

Output
Print the biggest prime number which is <= N

Constraints
2 <= N <= 10 000 000
*/

let input = ['130'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function isPrime(n) {
    if (n == 1 || n == 0) return false;

    for (var i = 2; i < n; i++) {

        if (n % i == 0) return false;
    }
    return true;
}

let testedNum = +gets();

while (true) {
    if (isPrime(testedNum)) {
        console.log(testedNum)
        break;
    } else {
        testedNum--;
    }
}