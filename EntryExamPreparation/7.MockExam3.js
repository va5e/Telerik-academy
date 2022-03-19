// I couldnt get the exercises text, that is why they dont have any.
//Exercise 1

let numOfBoxes = +gets();
let arr = [...Array(numOfBoxes + 1).keys()];
let oranges = [];
let apples = [];

for (let i = 1; i < arr.length; i++) {
    let k = arr[i];
    let numberOfFruits = k * k;

    if (i % 2 === 0) {
        apples.push(numberOfFruits);
    } else {
        oranges.push(numberOfFruits)
    }
}

let sumOranges = 0;
let sumAplles = 0;

for (let i = 0; i < oranges.length; i++) {
    sumOranges = sumOranges + oranges[i];
}

for (let i = 0; i < apples.length; i++) {
    sumAplles = sumAplles + apples[i];
}
print(sumAplles - sumOranges);

// Exercise 2

let entry = gets().split(',').map(Number);
let budget = entry[0]; //6
let beerCost = entry[1]; //2
let neededCupsForBeer = entry[2]; //2
let cups = (budget / beerCost); //3
let drinkedBeers = cups

while (cups >= neededCupsForBeer) {
    cups = cups - neededCupsForBeer;
    drinkedBeers++
    cups++
}
print(drinkedBeers);


//Exercise 3 - Check if a word can be written on one row ot the keyboard

let arrRowOne = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
let arrRowTwo = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
let arrRowThree = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
let testedWords = gets().split(', ');
let answer = [];

for (let i = 0; i < testedWords.length; i++) {
    let word = (testedWords[i].toUpperCase()).split('');
    let containsAll = word.every(element => {
        return arrRowOne.includes(element);
    });
    let containsAll1 = word.every(element => {
        return arrRowTwo.includes(element);
    }); let containsAll2 = word.every(element => {
        return arrRowThree.includes(element);
    });

    if (containsAll === true || containsAll1 === true || containsAll2 === true) {
        answer.push(testedWords[i])
    }
}
print(answer.join(', '));
