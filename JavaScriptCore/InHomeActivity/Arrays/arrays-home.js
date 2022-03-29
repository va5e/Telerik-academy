const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

//reversing the array
arr.reverse();
console.log(arr)
arr.reverse(); //going back to normal 

//copying the array
let newArr = new Array(...arr);
console.log(newArr);

let newArr02 = arr.concat();
console.log(newArr02);

//find if the array includes 10

let has10 = arr.includes(10);
console.log(has10)

//find the first ele greater than 6

let eleGreaterThanSix = arr.find(a => { return a > 6 })
console.log(eleGreaterThanSix)

//remove the duplicates wrong way

// let uniqueArr = arr.filter(function (item, index, arr) {
//     if (item != arr[index + 1]) {
//         return item;
//     }
// })
// console.log(uniqueArr)

// remove the duplicates right way

const removedDuplicates = [];
for (const item of arr) {
  if(!removedDuplicates.includes(item)){
    removedDuplicates.push(item);
  } 
}

//best solve


let uniqueArr2=[]
arr.forEach((item) =>{
    if (uniqueArr2.indexOf(item) == -1) {
        uniqueArr2.push(item);
    }
})
console.log(uniqueArr2)

// flat an array

const arrTwo = [1, 2, [3, 4, [5, 6]]];

let flattenedArr = arrTwo.flat(arrTwo.length - 1);
console.log(flattenedArr)

//find the most occuring element

const arrThree = [1, 2, 1, 4, 2, 4, 2, 3, 3, 5, 6, 7, 3, 2];

arrThree.sort((a, b) => a - b);
console.log(arrThree);

let length = 0;
let biggestLength = 0;
let mostFreq;

for (let i = 1; i <= arrThree.length; i++) {

    if (arrThree[i - 1] === arrThree[i]) {
        length++
    } else {

        if (length > biggestLength) {
            biggestLength = length
            length = 0;
            mostFreq = arrThree[i - 1]
        } else {
            length = 0;
        }
    }
}
console.log(`${mostFreq} (${biggestLength + 1} times)`)

//Create multidimensional array

let rows = 4;
let cols = 4;
let matrix = [];
let initCharCode = 97
// 97/112 the codes for the chars.
for (let i = 0; i < rows; i++) {
    matrix[i] = [];

    for (let j = 0; j < cols; j++) {
        matrix[i][j] = String.fromCharCode(initCharCode + j);
    }
    initCharCode = initCharCode + 4;
}
console.log(matrix[0]);

// get the main diagonal;

let mainDiagonal = [];

for (let i = 0; i < matrix.length; i++) {
    mainDiagonal.push(matrix[i][i])
}
console.log(mainDiagonal)

// get the oposite diagonal 

let opositeDiagonal = [];

for (let i = 0; i < matrix.length; i++) {
    opositeDiagonal.push(matrix[i][matrix.length - 1 - i])
}
console.log(opositeDiagonal);
