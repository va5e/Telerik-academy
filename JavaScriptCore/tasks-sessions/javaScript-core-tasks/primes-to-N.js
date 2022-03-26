/* Primes to N
Description
Print all the prime numbers between 1 and N

Input
Read from the standard input

On the single line, read the number *
Output
Print on the standard output

Print all the prime numbers, separated by a single whitespace
Constraints
1 <= N <= 1024
1 is considered prime
*/


let input = ['15'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let range = Array.from({
    length: +gets()
})

for (let i = 0; i < range.length; i++) {

    range[i] = i + 1
}

const isPrime = function (num) {
    if (num === 2 || num === 1) return true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

let result = []

for (let i = 0; i < range.length; i++) {
    if (isPrime(range[i])) {
        result.push(range[i])
    }
}

print(result.join(' '));