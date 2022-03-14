/*
Check for Play Card

Description

Classical play cards use the following signs to designate the card face: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K and A. Write a program that enters a string and prints "yes CONTENT_OF_STRING" if it is a valid card sign or "no CONTENT_OF_STRING" otherwise.

Input
On the only line you will receive a single string.

Output
Output "yes CONTENT_OF_STRING" if the string is a card sign, otherwise print "no CONTENT_OF_STRING".

Constraints
String length will always be between 1 and 5
 */

let input = ['500'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let testedChar = gets();
let charArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
if (charArray.includes(testedChar)) {
    print(`yes ${testedChar}`)
} else {
    print(`no ${testedChar}`)
}