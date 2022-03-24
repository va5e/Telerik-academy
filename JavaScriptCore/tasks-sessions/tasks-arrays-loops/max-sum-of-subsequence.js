/*
Max Sum of Subsequence
Write a program that finds the maximal sum of consecutive elements in a given array of N numbers.

Can you do it with only one loop (with single scan through the elements of the array)?
Input
On the first line you will receive the number N
On the next N lines the numbers of the array will be given
Output
Print the maximal sum of consecutive numbers
Constraints
1 <= N <= 1024
*/

let input = ['10',
    '2',
    '3',
    '-6',
    '-1',
    '2',
    '-1',
    '6',
    '4',
    '-8',
    '8'	]

    let print = this.print || console.log;
    let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

    let length = +gets();
    let arr = new Array(length);
    let index = 0;
    for(const item of arr){
        arr[index]=+gets()
        index++
    }
    
    let biggest = Number.MIN_SAFE_INTEGER;
    let tempSum = 0;
    let jInitInc = 1;
    
    for(let i = 0; i< arr.length; i++){
        
        for(let j = 0 + jInitInc; j < arr.length;j++){
            
            tempSum += arr[j]
            
            if(biggest < tempSum){
                biggest = tempSum;
            }
        }
    
        tempSum = 0;
    jInitInc++
    }
    
    print(biggest);