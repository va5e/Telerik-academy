// Game
// Three friends came up with a game for having fun in the break between the classes. One of them says a three-digit number and the others use it to form a mathematical expressions by using operators for sum and multiplication between the digits of that number.
// The winner is the first one who founds the biggest number that is a result of the above mentioned rules.
// Write a program 'game', which prints out that biggest number.

let number = gets().split('').map(Number);
let sum = number[0] + number[1] + number[2];
let sumAdd = number[0] + number[1] * number[2];
let sumAdd2 = number[0] * number[1] + number[2];
let add = number[0] * number[1] * number[2];
let arr = [sum, sumAdd, sumAdd2, add];

print(Math.max(...arr));

// Merging and Squashing
// We have the following operations defined for two-digit numbers. There are two possible ways of merging them:
// Merging ab and cd produces bc
// 42 merged with 17 produces 21
// 17 merged with 42 produces 74
// Squashing ab and cd produces a(b+c)d - the middle digit is the sum of b and c
// 42 squashed with 17 produces 437
// 39 squashed with 57 produces 347 (9 + 5 = 14, we use only the 4)
// You have a sequence of N two-digit numbers. Your task is to merge and squash each pair of adjacent numbers.

let count = +gets();
let numbersArr = [];
let merged = [];
let squashed = [];

for (let i = 0; i < count; i++) {
    numbersArr.push(gets());
}

for (let i = 1; i < count; i++) {
    let left = numbersArr[i - 1];
    let right = numbersArr[i];
    let mergedIn = left[1] + right[0];
    merged.push(mergedIn);
    let squashedIn = left[0] + ((Number(left[1]) + Number(right[0])) % 10 + right[1]);
    squashed.push(squashedIn);
}
print(merged.join(' '));
print(squashed.join(' '));

// Word Anagrams
// You are given a word and a list of words. Your task is to check whether all the words from the list are anagrams of the word.
// An anagram is a word formed by rearranging the letters of another word:
// The following are anagrams of "anagram":
// "gramana", "aaagrnm", "margana", etc..
// The following are NOT anagrams of "anagram":
// "aanagram", "aaagram", "anagra", "anagrama", "yxy"

let word = gets();
let count = +gets();

for (let i = 0; i < count; i++) {
    let isAnagram = true;
    let testedWord = gets();

    if (testedWord.length !== word.length) {
        isAnagram = false;
    } else {
        for (let j = 0; j < word.length; j++) {
            let letter = word[j];
            testedWord = testedWord.replace(letter, '')
        }
    }
    if (testedWord.length !== 0) {
        isAnagram = false;
    }

    if (isAnagram) {
        print('Yes')
    } else {
        print('No')
    }
}