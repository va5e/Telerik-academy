/*
Longest Block in String
Description
A block in a string is a run of adjacent chars that are the same. Given a string, return the first substring that is with the lenght of the largest "block" in the string.

Input
Read from the standard input:

string to search in -> hoopla
Output
Print to the standard output:

One line of output - the first block with maximum lenght in the given array -> oo
please note that different case matters.
*/

let input = [
    'hopa'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arrChars = gets().split('');
let idents = 0;
let end;
let biggestIdents = 0;

for (let i = 0; i < arrChars.length; i++) {
    if (arrChars[i] === arrChars[i + 1]) {
        idents++
    } else {
        if (idents > biggestIdents) {
            biggestIdents = idents
            idents = 0;
            end = i
        } else {
            idents = 0;
        }
    }
}
if (arrChars.slice(end - biggestIdents, end + 1).join('') === '') {
    print(arrChars[0])
} else {
    print(arrChars.slice(end - biggestIdents, end + 1).join(''));
}