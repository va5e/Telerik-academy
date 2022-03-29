/*
Page calculator
Write a program that accepts an array of words, a value representing words per page and a keyword and outputs on which page the keyword can be found. If the word is not in the list print -1.

Input
An array with words, separated by commas.
An integer N - words per page
A keyword - the word which page number we are looking for
Output
The page on which the keyword can be found
Constrains
The search is case-sensitive
Only single-word strings will be given
If the word appears more than once, return the page of the last one
*/

let input = [
    'Telerik, Java, JavaScript, PHP, HTML, CSS, Spring, Angular',
    '2',
    'CSS',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let pages = gets().split(', ');
let itemsPerArr = +gets();
let searchedPage = gets();
let arrOfPageArrays = [];
let notFound = true;

for (let i = 0; i < pages.length; i = i + itemsPerArr) {

    arrOfPageArrays.push(pages.slice(i, i + itemsPerArr))
}

for (let i = arrOfPageArrays.length - 1; i >= 0; i--) {
    if (arrOfPageArrays[i].includes(searchedPage)) {
        print(i + 1);
        notFound = false;
        break;
    }
}

if (notFound) {
    print(-1)
}