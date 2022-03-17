/*
"Good" numbers
Description
Ivancho considers a number to be "good", if it can be divided by each of its digits.

For example:

13 is not "good", because it cannot be divided by 3;
36 is "good", because it can be divided both by 3 and 6;
102 is "good" - can be divided by 1 and by 2;
103 is not "good" - cannot be divided by 3;
Help Invancho by writing a program, which counts the "good" numbers between number A and number B (inclusive).

Input
Read from the standard input the numbers A and B received on one line, separated by space.

Output
Print to the standard output the count of "good" numbers.

Constraints
1 <= A <= B <= 100000
*/

let input = ['1 10'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(' ').map(Number);
let counter = 0;

outer:
for (let i = numbers[0]; i <= numbers[1]; i++) {
    let divisors = String(i);

    for (let j = 0; j < divisors.length; j++) {

        if (i % +divisors[j] !== 0 && +divisors[j] !== 0) {
            continue outer;
        }
    }
    counter++
}
print(counter)