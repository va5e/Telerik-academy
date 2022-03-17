/*
Signal from Space
One day a signal from space was registered. Scientists managed to record the signal as a sequence of N symbols. It turned out that due to a technical difficulty some symbols have been repeated. Help the scientists by writing a program which removes consecutive repetitions of symbols, decoding the message.

Input
Input data is read from the standard input

On the only input line, a message is given
Output
Print to the standard output

Print the decoded message
Constraints
The length of the message will be no more than 10000 symbols
Message consists of digits and Latin letters (upper and lower case)
*/

let input = ['hoboobbo422222Aaao'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let string = gets();

string = string.split('');

for (let i = 0; i < string.length; i++) {

    if (string[i] === string[i + 1]) {
        string.splice(i, 1)
        --i
    }
}
string = string.join('');
console.log(string)