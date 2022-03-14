/*
Mirror Codes

Description
Loni the elephant once again forgot his smartphone's PIN code. Since it's not the first time happening, he wrote down some guiding notes. There are two three-digit numbers. The mirror number of one of the numbers is the PIN code. The elephant remembers that this is the larger of the two mirror numbers.

Write a program pincode, which determines the PIN code, given the two numbers from Loni's notes.

Input
On the first line you will receive two three-digit integer numbers a and b - the numbers which Loni wrote down in his notes.

Output
Print the found PIN code - the larger of the mirrors of the two numbers.
*/

let input = ['245 689'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function reverse(string) {
    let reversedString;
    reversedString = string.split('');
    reversedString = reversedString.reverse();
    reversedString = reversedString.join('');
    return reversedString;
}
let numbers = gets();
numbers = numbers.split(' ');
let num1 = numbers[0];
let num2 = numbers[1];
let num1Reversed = reverse(num1);
let num2Reversed = reverse(num2);

if (num1Reversed >= num2Reversed) {
    print(+num1Reversed);
} else {
    print(+num2Reversed);
}