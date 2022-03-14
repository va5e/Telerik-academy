/*
Electronic message

Description

An electronic message board at the beach in Sunny beach shows information about the weather and the temperature of the air and the seawater. The messages contain small and capital Latin letters, digits and spaces. At the end of the information there is a full-stop.

Every day Loni the elephant checks the weather conditions from the message board. One day Loni finds out that the board is broken and the message contains other characters, different from the regular. Curious as he is, he wants to find out how long is the longest sequence of broken characters on the board.

Help him write a program, which reads the message and produces the maximum length of sequential broken characters.

Input
On the first and only line of the standard input, there will be a text ending with full-stop .

Output
a number - the length of the longest sequence of broken characters (different from letter, digit, space).

Constraints
The full-stop will always be at the end of the message and it does not get broken. The message always has exactly one full-stop. The message will always be shorter than 1000 characters.
*/

let input = ['asd$$$s%% !!4!!'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let string = gets()
string = string.slice(0, -1);
string = string.split(' ');
let substringsWithoutLetters = [];
let substringWithoutNumbers = []
let lengthsArray = [];

for (let i = 0; i < string.length; i++) {
    substringsWithoutLetters.push(string[i].replace(/[A-Za-z]/g, ' '));
    substringWithoutNumbers.push(substringsWithoutLetters[i].replace(/\d/g, ' ').split(' '));
}

let arr = [];

for (let i = 0; i < substringWithoutNumbers.length; i++) {
    arr.push(...substringWithoutNumbers[i])
}

for (let i = 0; i < arr.length; i++) {
    lengthsArray.push(arr[i].length)
}
print(Math.max(...lengthsArray))