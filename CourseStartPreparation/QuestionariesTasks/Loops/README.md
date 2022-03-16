# **Questionnaire: Loops**

## What are **loops** and why are they used?

____________________________________________________

### **Loops offer a quick and easy way to do something repeatedly.** 

You can think of a **loop** as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another. For example, the idea "Go five steps to the east" could be expressed this way as a loop:
```JS
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}
```

There are many different kinds of loops, but they all essentially do the same thing: they **repeat an action some number of times**. *(Note that it's possible that number could be zero!)*

The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

## What are the different types of loops?
______________________________________________________________

>### The types of loops provided in JavaScript are:
>- **while** loop 
>- **do...while** loop 
>- **for** loop
>- **for...in** loop
>- **for...of** loop
>### We also have statements that works with the loops:
 >- **break** statement
>- **continue** statement
>- **labeled** statement

## **The “while” loop**
The while loop has the following syntax:
```JS
while (condition) {
  // code
  // so-called "loop body"
}
```
While the condition is truthy, the code from the loop body is executed.

For instance, the loop below outputs i while i < 3:
```JS
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
```
A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

If i++ was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

For instance, a shorter way to write while (i != 0) is while (i):
```JS
let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}
```
Curly braces are not required for a single-line body
If the loop body has a single statement, we can omit the curly braces {…}:
```JS
let i = 3;
while (i) alert(i--);
```
## **The “do…while” loop**
The condition check can be moved below the loop body using the do..while syntax:
```JS
do {
  // loop body
} while (condition);
```
The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

For example:
```JS
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
```
This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

## **The “for” loop**
The for loop is more complex, but it’s also the most commonly used loop.

It looks like this:
```JS
for (begin; condition; step) {
  // ... loop body ...
}
```
Let’s learn the meaning of these parts by example. The loop below runs alert(i) for i from 0 up to (but not including) 3:
```JS
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
```
### Let’s examine the for statement part-by-part:
		
>- **begin** --->    let i = 0     ---> Executes once upon entering the loop.
>- **condition** --->     i < 3      ---> Checked before every loop iteration. If false, the loop stops.
>- **body** --->     alert(i)     ---> Runs again and again while the condition is truthy.
>- **step** --->    i++     ---> Executes after the body on each iteration.

### The general loop algorithm works like this:
```
1 Run begin
2 → (if condition → run body and run step)
3 → (if condition → run body and run step)
4 → (if condition → run body and run step)
5 → ...
```
That is, begin executes once, and then it iterates: after each condition test, body and step are executed.

If you are new to loops, it could help to go back to the example and reproduce how it runs step-by-step on a piece of paper.

Here’s exactly what happens in our case:
```JS
// for (let i = 0; i < 3; i++) alert(i)

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3
```
## **for...in loop**
The for...in loop iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:
```JS
for (variable in object)
  statement
```

### **Example**

The following function takes as its argument an object and the object's name. It then iterates over all the object's properties and returns a string that lists the property names and their values.
```JS
function dump_props(obj, obj_name) {
  let result = '';
  for (let i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }
  result += '<hr>';
  return result;
}
```

For an object *car* with properties *make* and *model*, result would be:
```JS
car.make = Ford
car.model = Mustang
```

### Using **for...in** loop with arrays

Although it may be tempting to use this as a way to iterate over Array elements, the for...in statement will return the name of your user-defined properties in addition to the numeric indexes.

Therefore, it is better to use a traditional for loop with a numeric index when iterating over arrays, because the for...in statement iterates over user-defined properties in addition to the array elements, if you modify the Array object (such as adding custom properties or methods).

## **for...of loop** 
The **for...of** loop creates a loop Iterating over iterable objects (including **Array**, **Map**, **Set**, **arguments object** and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
```JS
for (variable of object)
  statement
```

The following example shows the difference between a **for...of** loop and a **for...in** loop. While for...in iterates over **property names**, for...of iterates over **property values**:
```js
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
```
## **Breaking the loop (the "break" statement)**
Normally, a loop exits when its condition becomes falsy.

But we can force the exit at any time using the special break directive.

For example, the loop below asks the user for a series of numbers, **“breaking”** when no number is entered:
```JS
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
```
The **break** directive is activated at the line (*) if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.

The combination **“infinite loop + break as needed”** is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.

## **Continue to the next iteration (the "continue" statement)**
The **continue** directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

We can use it if we’re done with the current iteration and would like to move on to the next one.

The loop below uses continue to output only odd values:
```JS
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
```
For even values of **i**, the continue directive stops executing the body and passes control to the next iteration of for (with the next number). So the alert is only called for odd values.

## **Labels for break/continue ("labeled" statement)**
Sometimes we need to break out from multiple nested loops at once.

For example, in the code below we loop over i and j, prompting for the coordinates (i, j) from (0,0) to (2,2):
```JS
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

alert('Done!');
```
We need a way to stop the process if the user cancels the input.

The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!

A label is an identifier with a colon before a loop:
```JS
labelName: for (...) {
  ...
}
```
The break <labelName> statement in the loop below breaks out to the label:
```JS
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
alert('Done!');
```
In the code above, break outer looks upwards for the label named outer and breaks out of that loop.

So the control goes straight from (*) to alert('Done!').

We can also move the label onto a separate line:
```JS
outer:
for (let i = 0; i < 3; i++) { ... }
```
The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.
 

### Here we cover to fundamental information about loops and their functonalities, but there is plethora of more information about loops in which you can dive and study. You can check [here](https://javascript.info/while-for) or [there](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).