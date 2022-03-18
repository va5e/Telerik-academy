/*
Array Search
Given an array of integers, some elements appear twice and others appear once. Each integer is in the range of [1, N], where N is the number of elements in the array.

Find all the integers of [1, N] inclusive that do NOT appear in this array.

Input
Read from the standard input:

There is one line of input, containing N amount of integers, seperated by a comma (",")
Output
Print to the standard output:

There is one line of output, containing the sorted integers, seperated by a comma (",")
Constraints
N will always be in the range of [5, 1000]
*/
let input = ['4,3,2,7,8,2,3,1'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(',').map(Number)
let missingArr = [];

for (let i = 1; i <= arr.length; i++) {

    if (!arr.includes(i)) {
        missingArr.push(i)
    }
}
stringWithMissingNums = missingArr.join(',')
print(stringWithMissingNums);