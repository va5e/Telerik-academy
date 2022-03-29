/* Prime Triangle
Description
We know that you love math, so we have prepared a very interesting task, that involves both geometry and prime numbers.

By a given N number, from which you need to generate a sequence of 1 to N inclusive. For every prime number in that sequence, you need to print out all the other numbers before it (and the number itself), whether they are prime or not

Note:
For the purposes of this task (and against the laws of mathematics), the number 1 is considered as prime.

Example
Let's say N=10

We have the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
The prime numbers are 1, 2, 3, 5, 7 - 5 prime numbers, so we prive 5 rows
Each row contains all the numbers for 1 to PRIME_NUMBER
Result:

1

1 2

1 2 3

1 2 3 4 5

1 2 3 4 5 6 7

Lets make things simpler:

Print 0 if the numbers is not prime
Print 1 if the number is prime
Final result:

1

1 1

1 1 1

1 1 1 0 1

1 1 1 0 1 0 1

Input
Read from the standard input
On the single line, find the number N
The input data will always be valid and in the format described. There is no need to check it explicitly
Output
Print on the standard output
The output should consist of several lines of digits each of which can be either 1 or 0
Without any space between them
*/


let input = [
    '27'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const isPrime = function (num) {
    if (num === 2 || num === 1) return true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let range = +gets()
let highestPrime;
let numsFrom1toHP = [];
let string = '';

for (let i = range; i > 0; i--) {
    if (isPrime(i)) {
        highestPrime = i;
        break;
    }
}

for (let i = 1; i <= highestPrime; i++) {
    numsFrom1toHP.push(i);
}

for (let i = 0; i < numsFrom1toHP.length; i++) {
    if (isPrime(numsFrom1toHP[i])) {
        string += '1'
    } else {
        string += '0'
        continue;
    }
    print(string);
}