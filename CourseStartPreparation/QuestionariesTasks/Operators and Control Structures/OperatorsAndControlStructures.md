# **Questionnaire: Operators and Control Structures**

# What are operators? How are they used?

JavaScript has the following types of operators.

- **Assignment operators**
- **Comparison operators**
- **Arithmetic operators**
- **Bitwise operators**
- **Logical operators**
- **String operators**
- **Conditional (ternary) operator**
- **Comma operator**
- **Unary operators**
- **Relational operators**

## **Basic operators, maths**
__________________________

We know many operators from school. They are things like **addition** +, **multiplication** *, **subtraction** -, and so on.

Lets start with simple operators and later concentrate on JavaScript-specific aspects, not covered by school arithmetics.

## **Terms: *“unary”*, *“binary”*, *“operand”***

### Lets have a look at some common terminology

An **operand** – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two 
operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

An operator is **unary** if it has a single operand. For example, the unary negation - reverses the sign of a number:
```JS
let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied
```
An operator is **binary** if it has two operands. The same minus exists in **binary** form as well:
```JS
let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values
```
Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.

### **Maths**

The following math operations are supported:

- Addition +,
- Subtraction -,
- Multiplication *,
- Division /,
- Remainder %,
- Exponentiation **.

The first four are straightforward, while % and ** need a few words about them.

### **Remainder %**

The remainder operator %, despite its appearance, is not related to percents.

The result of a % b is the remainder of the integer division of a by b.

For instance:
```JS
alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
alert( 8 % 3 ); // 2, a remainder of 8 divided by 3
```

### **Exponentiation** **

The exponentiation operator a ** b raises a to the power of b.

In school maths, we write that as ab.

For instance:
```JS
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16
```
Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

For example, a square root is an exponentiation by ½:
```JS
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)
```
__________________________________________
## **JavaScript operators beyond arithmetics**
______________________________________________________
## **String *concatenation* with binary +**


Usually, the plus operator + sums numbers.

But, if the binary + is applied to strings, it merges (**concatenates**) them:
```JS
let s = "my" + "string";
alert(s); // mystring
```

Note that if any of the operands is a string, then the other one is converted to a string too.

For example:
```JS
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
```
See, it doesn’t matter whether the first operand is a string or the second one.

Here’s a more complex example:
```Js
alert(2 + 2 + '1' ); // "41" and not "221"
```
Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.
```JS
alert('1' + 2 + 2); // "122" and not "14"
```
Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

Here’s the demo for subtraction and division:
```JS
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
```

## **Numeric conversion, *unary* +**

The plus + exists in two forms: the binary form that we used above and the **unary** form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

For example:
```JS
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
```
It actually does the same thing as **Number(...)**, but is shorter.

The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

The binary plus would add them as strings:
```JS
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
```
If we want to treat them as numbers, we need to convert and then sum them:
```JS
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
```

From a mathematician’s standpoint, the abundance of pluses may seem strange. But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

Why are unary pluses applied to values before the binary ones? As we’re going to see, that’s because of their higher precedence.

## **Operator *precedence***

If an expression has more than one operator, the execution order is defined by their **precedence**, or, in other words, the default priority order of operators.

From school, we all know that the multiplication in the expression 1 + 2 * 2 should be calculated before the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition.

Parentheses override any precedence, so if we’re not satisfied with the default order, we can use them to change it. For example, write (1 + 2) * 2.

There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

There is [**precedense table**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) which shows all the precedence of all operators. You don't need to memorize them all, although  the precedense of the most common operators is very logical and you could assume it yourself but also you can always check the table.

## **Assignment**
Let’s note that an **assignment** = is also an operator. It is listed in the precedence table with the very low priority of 2.

That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.
```JS
let x = 2 * 2 + 1;

alert( x ); // 5
```

## ***Bitwise* operators**

**Bitwise** operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

- AND ( & )
- OR ( | )
- XOR ( ^ )
- NOT ( ~ )
- LEFT SHIFT ( << )
- RIGHT SHIFT ( >> )
- ZERO-FILL RIGHT SHIFT ( >>> )

These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the Bitwise Operators chapter on MDN when a need arises.

## Comma
The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

For example:
```JS
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
```
Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.

Comma has a very low precedence
Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.

Why do we need an operator that throws away everything except the last expression?

Sometimes, people use it in more complex constructs to put several actions in one line.

For example:
```JS
// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
```
Such tricks are used in many JavaScript frameworks. That’s why we’re mentioning them. But usually they don’t improve code readability so we should think well before using them.
_______________________________________________________________

## ***Logical* operators**
______________________________________________________________

## There are four *logical operators* in JavaScript:

- **|| (OR)**
- **&& (AND)**
- **! (NOT)**
- **?? (Nullish Coalescing)**
 
Here we cover the first three, the ?? operator is planned for further studyings.

Although they are called **“logical”**, they can be applied to values of any type, not only boolean. Their result can also be of any type.

## **|| (OR)**

The **“OR”** operator is represented with two vertical line symbols:
```JS
result = a || b;
```

In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.

There are four possible logical combinations:
```JS
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```
As we can see, the result is always true except for the case when both operands are false.

If an operand is not a boolean, it’s converted to a boolean for the evaluation.

For instance, the number 1 is treated as true, the number 0 as false:
```JS
if (1 || 0) { // works just like if( true || false )
  alert( 'truthy!' );
}
```
Most of the time, OR || is used in an if statement to test if any of the given conditions is true.

For example:
```JS
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}
```
We can pass more conditions:
```JS
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}
```

## OR "||" finds the first truthy value

The logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.

The extended algorithm works as follows.

Given multiple OR’ed values:
```JS
result = value1 || value2 || value3;
```
The OR || operator does the following:

1. Evaluates operands from left to right.
2. For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
3. If all operands have been evaluated (i.e. all were false), returns the last operand.
4. A value is returned in its original form, without the conversion.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

For instance:
```JS
alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)
```
This leads to some interesting usage compared to a “pure, classical, boolean-only OR”.

Getting the first truthy value from a list of variables or expressions.

For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).

Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):
```JS
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
```
If all variables were falsy, "Anonymous" would show up.

## Short-circuit evaluation.

Another feature of OR || operator is the so-called **“short-circuit”** evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

In the example below, only the second message is printed:
```JS
true || alert("not printed");
false || alert("printed");
```
In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

## **&& (AND)**
The AND operator is represented with two ampersands &&:
```JS
result = a && b;
```

In classical programming, AND returns true if both operands are truthy and false otherwise:
```JS
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```
An example with if:
```JS
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}
```
Just as with OR, any value is allowed as an operand of AND:
```JS
if (1 && 0) { // evaluated as true && false
  alert( "won't work, because the result is falsy" );
}
```

## AND “&&” finds the first falsy value

Given multiple AND’ed values:
```JS
result = value1 && value2 && value3;
```

The AND && operator does the following:

1. Evaluates operands from left to right.
2. For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
3. If all operands have been evaluated (i.e. all were truthy), returns the last operand.
4. In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

Examples:
```JS
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
```
We can also pass several values in a row. See how the first falsy one is returned:
```JS
alert( 1 && 2 && null && 3 ); // null
```
When all values are truthy, the last value is returned:
```JS
alert( 1 && 2 && 3 ); // 3, the last one
```
```
Precedence of AND && is higher than OR ||
The precedence of AND && operator is higher than OR ||.
So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).
```

## **! (NOT)**
The boolean NOT operator is represented with an exclamation sign **!**.

The syntax is pretty simple:
```JS
result = !value;
```
The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns the inverse value.
For instance:
```JS
alert( !true ); // false
alert( !0 ); // true
```
A double NOT !! is sometimes used for converting a value to boolean type:
```JS
alert( !!"non-empty string" ); // true
alert( !!null ); // false
```
That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

There’s a little more verbose way to do the same thing – a built-in Boolean function:
```JS
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
```
The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

___________________________________________________________________________________

### I'm not covering all the details and all the operators in JavaScript in this section. If you want to enhance your knowledge on the subject, you can do your own research and while doing it, learn plenty of new information in addition to that! You can use the list below for easier search navigation.

- **Assignment operators**
- **Comparison operators**
- **Arithmetic operators**
- **Bitwise operators**
- **Logical operators**
- **String operators**
- **Conditional (ternary) operator**
- **Comma operator**
- **Unary operators**
- **Relational operators**

____________________________________________________

# How do we compare variables? Strict (===) vs non-strict comparison (==).

## **Comparisons**

We know many comparison operators from maths.

In JavaScript they are written like this:

- Greater/less than: a > b, a < b.
- Greater/less than or equals: a >= b, a <= b.
- Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
- Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

## Boolean is the result

All comparison operators return a boolean value:

true – means “yes”, “correct” or “the truth”.
false – means “no”, “wrong” or “not the truth”.
For example:
```JS
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)
```
A comparison result can be assigned to a variable, just like any value:
```JS
let result = 5 > 4; // assign the result of the comparison
alert( result ); // true
```

## **String comparison**
To see whether a string is greater than another, JavaScript uses the so-called **“dictionary”** or **“lexicographical”** order.

In other words, strings are compared letter-by-letter.

For example:
```JS
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```
### The algorithm to compare two strings is simple:

1. Compare the first character of both strings.
2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

1. G is the same as G.
2. l is the same as l.
3. o is greater than e. Stop here. The first string is greater.

```
Not a real dictionary, but Unicode order

The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it’s not exactly the same.

For instance, case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode). 
```

## **Comparison of different types**
When comparing values of different types, JavaScript converts the values to numbers.

For example:
```JS
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
```
For boolean values, true becomes 1 and false becomes 0.

For example:
```JS
alert( true == 1 ); // true
alert( false == 0 ); // true
```


## **Strict equality**
A regular equality check == has a problem. It cannot differentiate 0 from false:
```JS
alert( 0 == false ); // true
```
The same thing happens with an empty string:
```JS
alert( '' == false ); // true
```
This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

What to do if we’d like to differentiate 0 from false?

A **strict** equality operator **===** checks the equality without type conversion.

In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

Let’s try it:
```JS
alert( 0 === false ); // false, because the types are different
```

There is also a **“strict non-equality”** operator **!==** analogous to **!=**.

The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors.

## **Comparison with null and undefined**
There’s a non-intuitive behavior when null or undefined are compared to other values.

For a strict equality check ===
These values are different, because each of them is a different type.
```JS
alert( null === undefined ); // false
```
For a non-strict check ==
There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.
```JS
alert( null == undefined ); // true
```
For maths and other comparisons < > <= >=
null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

Now let’s see some funny things that happen when we apply these rules. And, what’s more important, how to not fall into a trap with them.

## **Strange result: null vs 0**
Let’s compare null with a zero:
```JS
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
```
Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.

The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

## **An incomparable undefined**
The value undefined shouldn’t be compared to other values:
```JS
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```
Why does it dislike zero so much? Always false!

We get these results because:

- Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
- The equality check (3) returns false because undefined only equals null, undefined, and no other value.

## **Avoid problems**
Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will gradually become familiar over time, but there’s a solid way to avoid problems with them:

- Treat any comparison with undefined/null except the strict equality === with exceptional care.
- Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.

_________________________________________________________________________
# What are if-else statements?

## **Conditional branching: if, '?'**
Sometimes, we need to perform different actions based on different conditions.

To do that, we can use the **if statement** and the **conditional operator** **?**, that’s also called a **“question mark”** operator.

## **The “if” statement**
The **if(...)** statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

For example:
```JS
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );
```

In the example above, the condition is a simple equality check (year == 2015), but it can be much more complex.

If we want to execute more than one statement, we have to wrap our code block inside curly braces:
```JS
if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}
```
We recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute. Doing so improves readability.

## Boolean conversion
The **if (…)** statement evaluates the expression in its parentheses and converts the result to a boolean.

Let’s recall the conversion rules from the chapter Type Conversions:

- A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
- Other values become true, so they are called “truthy”.
So, the code under this condition would never execute:
```JS
if (0) { // 0 is falsy
  ...
}
```
…and inside this condition – it always will:
```JS
if (1) { // 1 is truthy
  ...
}
```
We can also pass a pre-evaluated boolean value to if, like this:
```JS
let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  ...
}
```
## The “else” clause
The if statement may contain an optional **“else”** block. It executes when the condition is falsy.

For example:
```JS
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}
```

## Several conditions: “else if”
Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

For example:
```JS
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```
In the code above, JavaScript first checks year < 2015. If that is falsy, it goes to the next condition year > 2015. If that is also falsy, it shows the last alert.

There can be more else if blocks. The final else is optional.

## Conditional operator ‘?’
Sometimes, we need to assign a variable depending on a condition.

For instance:
```JS
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```
The so-called **“conditional”** or **“question mark”** **operator** lets us do that in a shorter and simpler way.

The operator is represented by a **question mark ?**. Sometimes it’s called **“ternary”**, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

The syntax is:
```JS
let result = condition ? value1 : value2;
```
The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

For example:
```JS
let accessAllowed = (age > 18) ? true : false;
```
Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.

This example will do the same thing as the previous one:
```JS
// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;
```
But parentheses make the code more readable, so we recommend using them.

### **Please note:**
In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:
```JS
// the same
let accessAllowed = age > 18;
```
### More information about this operator and its functionality you can find [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

__________________________________________________________________
# What is "switch" statement?

## **A switch statement can replace multiple if checks.**

It gives a more descriptive way to compare a value with multiple variants.

## The syntax
The switch has one or more case blocks and an optional default.

It looks like this:
```JS
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```
- The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
- If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
- If no case is matched then the default code is executed (if it exists).

## An example
An example of switch (the executed code is highlighted):
```JS
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
```

Here the **switch** starts to compare a from the first case variant that is 3. The match fails.

Then 4. That’s a match, so the execution starts from case 4 until the nearest break.

If there is no break then the execution continues with the next case without any checks.

An example without break:
```JS
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}
```
In the example above we’ll see sequential execution of three alerts:
```JS
alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );
```

### **Any expression can be a switch/case argument**
Both switch and case allow arbitrary expressions.

For example:
```JS
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}
```
Here +a gives 1, that’s compared with b + 1 in case, and the corresponding code is executed.

## Grouping of “case”
Several variants of case which share the same code can be grouped.

For example, if we want the same code to run for case 3 and case 5:
```JS
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```
Now both 3 and 5 show the same message.

The ability to “group” cases is a side-effect of how switch/case works without break. Here the execution of case 3 starts from the line (*) and goes through case 5, because there’s no break.

## Type matters
Let’s emphasize that the equality check is always strict. The values must be of the same type to match.

For example, let’s consider the code:
```JS
let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}
```
1. For 0, 1, the first alert runs.
2. For 2 the second alert runs.
3. But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.

___________________________________________________________________________________________
This is the summary on the four given topics - **operators**, **comparisons**, **if-else statements** and **switch statements**. For more specific information, you can always make a research on your own, now that you know the basic concepts!