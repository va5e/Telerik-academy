# Questionnaire: Functions

## **What are functions and why are they used?**


**Functions** are one of the fundamental building blocks in JavaScript. A **function** in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some *input* and return an *output* where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it. Functions are language structure that allow us to reuse code and avoid repetition, contain variables, make calculations and add reactivity to the applications.

## **What are the different types of functions?**

### There are several ways we can create functions.

- function declaration
- function expression
- arrow function expression
______________________________________________________________________
## Function **declaration**

To create a function we can use a **function declaration**.

It looks like this:
```JS
function showMessage() {
  alert( 'Hello everyone!' );
}
```
The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated, empty in the example above, we’ll see examples later) and finally the code of the function, also named “the function body”, between curly braces.
```JS
function name(parameter1, parameter2, ... parameterN) {
  ...body...
}
```
Our new function can be called by its name: showMessage().

For instance:
```JS
function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();
```
The call showMessage() executes the code of the function. Here we will see the message two times.

This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.

If we ever need to change the message or the way it is shown, it’s enough to modify the code in one place: the function which outputs it.

## Local variables

A variable declared inside a function is only visible inside that function.

For example:
```JS
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function
```
## Outer variables
A function can access an outer variable as well, for example:
```JS
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
```
The function has full access to the outer variable. It can modify it as well.

For instance:
```JS
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function
```
The outer variable is only used if there’s no local one.

If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:
```JS
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable
```
## Global variables
Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).

It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

## Parameters
We can pass arbitrary data to functions using **parameters**.

In the example below, the function has two parameters: from and text.
```JS
function showMessage(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
```
When the function is called in lines (*) and (**), the given values are copied to local variables from and text. Then the function uses them.

Here’s one more example: we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:
```JS
function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann
```
When a value is passed as a function parameter, it’s also called an argument.

In other words, to put these terms straight:

A **parameter** is the variable listed inside the parentheses in the function declaration (it’s a declaration time term)
An **argument** is the value that is passed to the function when it is called (it’s a call time term).
We declare functions listing their parameters, then call them passing arguments.

In the example above, one might say: "the function showMessage is declared with two parameters, then called with two arguments: from and "Hello"".

## Default values
If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

For instance, the aforementioned function showMessage(from, text) can be called with a single argument:
```JS
showMessage("Ann");
```
That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.

We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:
```JS
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```
Now if the text parameter is not passed, it will get the value "no text given"

Here "no text given" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:
```JS
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
```
### Evaluation of default parameters
```
In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.

In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.

On the other hand, it’s independently called every time when text is missing.
```
## Alternative default parameters
Sometimes it makes sense to assign default values for parameters not in the function declaration, but at a later stage.

We can check if the parameter is passed during the function execution, by comparing it with undefined:
```JS
function showMessage(text) {
  // ...

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message
```
…Or we could use the || operator:
```JS
function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  ...
}
```
Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:
```JS
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```
## Returning a value
A function can return a value back into the calling code as the result.

The simplest example would be a function that sums two values:
```JS
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
```
The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).

There may be many occurrences of return in a single function. For instance:
```JS
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
```
It is possible to use return without a value. That causes the function to exit immediately.

For example:
```JS
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}
```
In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the alert.

## Naming a function
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

- "get…" – return a value,
- "calc…" – calculate something,
- "create…" – create something,
- "check…" – check something and return a boolean, etc.
- Examples of such names:
```JS
showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
```
With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.

### One function – one action

A function should do exactly what is suggested by its name, no more.

Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).

A few examples of breaking this rule:

- getAge – would be bad if it shows an alert with the age (should only get).
- createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).
- checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).
```
These examples assume common meanings of prefixes. You and your team are free to agree on other meanings, but usually they’re not much different. In any case, you should have a firm understanding of what a prefix means, what a prefixed function can and cannot do. All same-prefixed functions should obey the rules. And the team should share the knowledge.
```
### Ultrashort function names
Functions that are used very often sometimes have ultrashort names.

For example, the [jQuery](https://jquery.com/) framework defines a function with $. The [Lodash](https://lodash.com/) library has its core function named _.

These are exceptions. Generally function names should be concise and descriptive.

## Functions == Comments
Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.

A separate function is not only easier to test and debug – its very existence is a great comment!

For instance, compare the two functions showPrimes(n) below. Each one outputs prime numbers up to n.

The first variant uses a label:
```JS
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}
```
The second variant uses an additional function isPrime(n) to test for primality:
```JS
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
```
The second variant is easier to understand, isn’t it? Instead of the code piece we see a name of the action (isPrime). Sometimes people refer to such code as self-describing.

So, functions can be created even if we don’t intend to reuse them. They structure the code and make it readable.
_______________________________________________________________________________
## Fucntion **expression**

In JavaScript, a function is not a “magical language structure”, but a special kind of value.

The syntax that we used before is called a Function Declaration:
```JS 
function sayHi() {
  alert( "Hello" );
}
```
There is another syntax for creating a function that is called a Function Expression.

It allows us to create a new function in the middle of any expression.

For example:
```JS
let sayHi = function() {
  alert( "Hello" );
};
```
Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }.

As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.

Please note, there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.

Here we immediately assign it to the variable, so the meaning of these code samples is the same: "create a function and put it into the variable sayHi".

In more advanced situations, that we’ll come across later, a function may be created and immediately called or scheduled for a later execution, not stored anywhere, thus remaining anonymous.

## Function is a value
Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

We can even print out that value using alert:
```JS
function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code
```
Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.

Surely, a function is a special value, in the sense that we can call it like sayHi().

But it’s still a value. So we can work with it like with other kinds of values.

We can copy a function to another variable:
```JS
function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)
```
Here’s what happens above in detail:

1. The Function Declaration (1) creates the function and puts it into the variable named sayHi.
2. Line (2) copies it into the variable func. Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.
3. Now the function can be called as both sayHi() and func().

We could also have used a Function Expression to declare sayHi, in the first line:
```JS
let sayHi = function() { // (1) create
  alert( "Hello" );
};

let func = sayHi;
// ...
```
Everything would work the same.

Why is there a semicolon at the end?
You might wonder, why does Function Expression have a semicolon ; at the end, but Function Declaration does not:
```JS
function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};
```
The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.

The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment.

## Callback functions
Let’s look at more examples of passing functions as values and using function expressions.

We’ll write a function ask(question, yes, no) with three parameters:

1. **question** - Text of the question
2. **yes** - Function to run if the answer is “Yes”
3. **no** - Function to run if the answer is “No”

The function should ask the question and, depending on the user’s answer, call yes() or no():
```JS
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```
In practice, such functions are quite useful. The major difference between a real-life ask and the example above is that real-life functions use more complex ways to interact with the user than a simple confirm. In the browser, such function usually draws a nice-looking question window. But that’s another story.

The arguments showOk and showCancel of ask are called callback functions or just callbacks.

The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer.

We can use Function Expressions to write the same function much shorter:
```JS
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```
Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.

Such code appears in our scripts very naturally, it’s in the spirit of JavaScript.

### A function is a value representing an “action”
```
Regular values like strings or numbers represent the data.

A function can be perceived as an action.

We can pass it between variables and run when we want.
```
## Function Expression vs Function Declaration
Let’s formulate the key differences between Function Declarations and Expressions.

First, the syntax: how to differentiate between them in the code.

- Function Declaration: a function, declared as a separate statement, in the main code flow.
```JS
// Function Declaration
function sum(a, b) {
  return a + b;
}
```
- Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created at the right side of the “assignment expression” =:
```JS
// Function Expression
let sum = function(a, b) {
  return a + b;
};
```
The more subtle difference is when a function is created by the JavaScript engine.

**A Function Expression is created when the execution reaches it and is usable only from that moment.**
Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

Function Declarations are different.

**A Function Declaration can be called earlier than it is defined.**

For example, a global Function Declaration is visible in the whole script, no matter where it is.

That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

And after all Function Declarations are processed, the code is executed. So it has access to these functions.

For example, this works:
```JS
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
```
The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.

…If it were a Function Expression, then it wouldn’t work:
```JS
sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
```
Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.

Another special feature of Function Declarations is their block scope.

In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

For instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. And then we plan to use it some time later.

If we use Function Declaration, it won’t work as intended:
```JS
let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined
```
That’s because a Function Declaration is only visible inside the code block in which it resides.

Here’s another example:
```JS
let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined
```
What can we do to make welcome visible outside of if?

The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

This code works as intended:
```JS
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now
```
Or we could simplify it even further using a question mark operator ?:
```JS
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now
```

## **Arrow** functions basic concepts
There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

It’s called **“arrow functions”**, because it looks like this:
```JS
let func = (arg1, arg2, ..., argN) => expression;
```
This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

In other words, it’s the shorter version of:
```JS
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```
Let’s see a concrete example:
```JS
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```
As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result.

If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

For example:
```JS
let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6
```
If there are no arguments, parentheses will be empty (but they should be present):
```JS
let sayHi = () => alert("Hello!");

sayHi();
```
Arrow functions can be used in the same way as Function Expressions.

For instance, to dynamically create a function:
```JS
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();
```
Arrow functions may appear unfamiliar and not very readable at first, but that quickly changes as the eyes get used to the structure.

They are very convenient for simple one-line actions, when we’re just too lazy to write many words.

## Multiline arrow functions
The examples above took arguments from the left of => and evaluated the right-side expression with them.

Sometimes we need something a little bit more complex, like multiple expressions or statements. It is also possible, but we should enclose them in curly braces. Then use a normal return within them.

Like this:
```JS
let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
```
_______________________________________________________________________________________
### That is only a fraction of all the information on the "Functions" topic. You should also check:

- [More on **Function Declaration**](https://javascript.info/function-basics)
- [More on **Function Expressions**](https://javascript.info/function-expressions)
- [More on **Arrow Function**](https://javascript.info/arrow-functions)