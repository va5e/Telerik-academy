/*
Arrangement

Description

Loni the elephant has four flower pots on his window sill. The pots have specific heights and Loni likes it when they are arranged in an ascending order of height. Loni's mother rearranges the pots every day and Loni gets confused. Now he wants to teach his home robot to do the arrangement.

For the purpose, write a program sort, which sends the robot a message about how the pots are arranged, given the heights of the pots.

Input
On the first and only line of the standard input you will receive four integers h1, h2, h3, h4 - the heights of the pots

Output
Print one of the following to the standard output:
Ascending if the pots have strictly increasing heights
Descending if the pots have strictly decreasing heights
Mixed if the pots are not sorted by height

Constraints
0 ≤ h1,h2,h3,h4 ≤ 100;
*/

let input = ['6 4 3 1'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let heights = gets();
heights = heights.split(' ');
console.log(heights)
if (+heights[0] > +heights[1] && +heights[1] > +heights[2] && +heights[2] > +heights[3]) {
    print('Descending')
} else if (+heights[0] < +heights[1] && +heights[1] < +heights[2] && +heights[2] < +heights[3]) {
    print('Ascending')
} else {
    print('Mixed')
}
