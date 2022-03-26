/*
Longest Sequence of Equal
Description
Write a program that finds the length of the maximal sequence of equal elements in an array of N integers.

Input
On the first line you will receive the number N
On the next N lines the numbers of the array will be given
Output
Print the length of the maximal sequence
Constraints
1 <= N <= 1024
*/

let input = ['10',
    '2',
    '1',
    '1',
    '2',
    '3',
    '3',
    '2',
    '2',
    '2',
    '1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = Array.from({
    length: +gets()
}, () => +gets());

let length = 0;
let longestLength = 0
for (let i = 0; i < arr.length; i++) {

    if (arr[i] === arr[i + 1]) {
        length++
    } else {
        if (length > longestLength) {
            longestLength = length;
            length = 0;
        } else {
            length = 0;
        }
    }
}
print(longestLength + 1);