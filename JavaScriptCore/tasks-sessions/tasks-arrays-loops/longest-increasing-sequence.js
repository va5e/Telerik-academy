// /*
// Longest Increasing Sequence
// Description
// Write a program that finds the length of the maximal increasing sequence in an array of N integers.

// Input
// Read from the standard input

// On the first line you will receive the number N
// On the next N lines the numbers of the array will be given
// Output
// Print to the standard output

// Print the length of the maximal increasing sequence
// Constraints
// 1 <= N <= 1024
// */

let input = ['8',
    '1',
    '2',
    '3',
    '4',
    '1',
    '2',
    '3',
    '4']

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let length = +gets();
let arr = [];
for(let i =0 ; i<length; i++){
    arr.push(+gets())
}

let index = 1;
let count = 0;
let tempCount = 0;
for(let i = 1; i < arr.length; i++){
   
    if(arr[i-1] < arr[i]){
        tempCount++
   
    }else{
        
        if(tempCount > count){
            count = tempCount;
            tempCount = 0;
        }else{
            tempCount = 0;
        }
    }
}
print(count+1);