/*
Forest Road

Geeko, a non-stop learning trainee at Telerik Software Academy lived deep into the Lyulin forests. Every time he went to the Academy he had to take a long trip through the forest. Starting from the top left corner of the forest, the road always goes down and right first and when it reaches the border, it goes down and left.

The Academy is situated in the bottom left corner, and Geeko begins his journey from the top left corner of the forest (see the examples below).

He wanted to make a program that generates a map of the forest but he couldn’t. Help Geeko on his way to the Academy by writing the program instead of him.

Input
Read from the standard input

On the only line in the console you are given an integer number N, showing the width of the map.

The map’s height is always 2*N - 1.

The input data will always be valid and in the format described. There is no need to check it explicitly.

Output
Print to the standard output

You should print the whole map on the standard output

Use the symbol “*” (asterisk) to mark Geeko’s path and “.” (dot) to illustrate the trees
Constraints
The number N is a positive integer between 2 and 79, inclusive.

Allowed working time for your program: 0.25 second.

Examples
Input
4
Output
*...
.*..
..*.
...*
..*.
.*..
*...
Input
5
Output
*....
.*...
..*..
...*.
....*
...*.
..*..
.*...
*....
*/

let input = ['4'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let width = +gets();
let rows = 2 * width - 1;
let rowsFirstFigure = Math.ceil(rows / 2);
let rowsSecondFigure = Math.floor(rows / 2);

for (let i = 1; i <= rowsFirstFigure; i++) {
    let string = ''

    for (let j = 1; j <= width; j++) {
        if (j === i) {
            string += '*'
        } else {
            string += '.'
        }
    }
    console.log(string)
}

for (let i = 1; i <= rowsSecondFigure; i++) {
    let string = ''

    for (let j = width; j >= 1; j--) {
        if (j === i + 1) {
            string += '*'
        } else {
            string += '.'
        }
    }
    console.log(string)
}