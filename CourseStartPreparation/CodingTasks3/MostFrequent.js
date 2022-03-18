/*
Most Frequent
Write a program that finds the most frequent number in an array of N elements.

Input
On the first line you will receive the number N
On the next N lines the numbers of the array will be given
Output
Print the most frequent number and how many time it is repeated
Output should be REPEATING_NUMBER (REPEATED_TIMES times)
Constraints
1 <= N <= 1024
0 <= each number in the array <= 10000
There will be only one most frequent number
*/

let input = ['13', '4', '1', '1', '4', '1', '1', '1', '1', '1', '1', '1', '1', '2', '3', '4', '4', '1', '2', '4', '4', '9', '3'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let counter = +gets();
let numsArr = [];
let length = 0;
let biggestLength = 0;
let mostFreq;

for (let i = 0; i < counter; i++) {
    numsArr.push(+gets());
}

numsArr = numsArr.sort((a, b) => a - b)

for (let i = 1; i <= numsArr.length; i++) {

    if (numsArr[i - 1] === numsArr[i]) {
        length++
    } else {

        if (length > biggestLength) {
            biggestLength = length
            length = 0;
            mostFreq = numsArr[i - 1]
        } else {
            length = 0;
        }
    }
}
print(`${mostFreq} (${biggestLength + 1} times)`)
