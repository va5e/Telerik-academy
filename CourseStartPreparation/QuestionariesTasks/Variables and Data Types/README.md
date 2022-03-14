# Questionnaire: Variables and Data Types

# What are variables?


A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the **let** keyword.

The statement below creates (in other words: *declares*) a variable with the name “message”:
```JavaScript
let message;
```
Now, we can put some data into it by using the assignment operator **=**:
```JavaScript
let message = 'Hello'; // store the string 'Hello' in the variable named message
```
The string is now saved into the memory area associated with the variable. We can access it using the variable name:

```JavaScript
alert(message); // shows the variable content
```

## **var** instead of **let**
In older scripts, you may also find another keyword: **var** instead of **let**:
```JavaScript
var message = 'Hello';
```
The **var** keyword is almost the same as **let**. It also *declares* a variable, but in a slightly different, “old-school” way.

There are subtle differences between **let** and **var**, but they do not matter for us yet. We’ll cover them in detail later.

## Constants
To *declare* a constant (unchanging) variable, use **const** instead of **let**:
```JavaScript
const myBirthday = '18.04.1982';
```

Variables *declared* using **const** are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:
```JS
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!
```

When a programmer is sure that a variable will never change, they can declare it with **const** to guarantee and clearly communicate that fact to everyone.

### There is further more in depth information about variables, their functonalities and conventions, which you can find [here](https://javascript.info/variables).
_____________________________________________________________________________________________


# Data Types
A value in JavaScript is always of a certain type.

### What data types are there in JavaScript?



- **String** -	represents textual data	
- **Number** -	an integer or a floating-point number	
- **BigInt** -	an integer with arbitrary precision	
- **Boolean** -	Any of two values: true or false	
- **undefined** -	a data type whose variable is not initialized	
- **null** -	denotes a null value	
- **Symbol** -	data type whose instances are unique and immutable
- **Object** -	key-value pairs of collection of data	


## **String**
A **string** in JavaScript must be surrounded by quotes.
```JS
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```
In JavaScript, there are 3 types of quotes.

- Double quotes: "Hello".
- Single quotes: 'Hello'.
- Backticks: \`Hello\`.

Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
```JS
let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
```
The expression inside ${…} is evaluated and the result becomes a part of the **string**. We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.

Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!
### More information on **String** Data Type [here](https://javascript.info/string).

## **Number**
```JS
let n = 123;
n = 12.345;
```
The **number** type represents both integer and floating point numbers.

There are many operations for numbers, e.g. **multiplication** *, **division** /, **addition** +, **subtraction** -, and so on.

Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: **Infinity**, **-Infinity** and **NaN**.

### More information on **Number** Data Type [here](https://javascript.info/number).

## **BigInt**
In JavaScript, the **“number”** type cannot represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. It’s a technical limitation caused by their internal representation.

For most purposes that’s quite enough, but sometimes we need really big numbers, e.g. for cryptography or microsecond-precision timestamps.

**BigInt** type was recently added to the language to represent integers of arbitrary length.

A **BigInt** value is created by appending **n** to the end of an integer:
```JS
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```
### More information on **BigInt** Data Type [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## **Boolean** (logical type)
The **boolean** type has only two values: **true** and **false**.

This type is commonly used to store yes/no values: **true** means “yes, correct”, and **false** means “no, incorrect”.

For instance:
```JS
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
```
Boolean values also come as a result of comparisons:
```JS
let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")
```
### More information on **Boolean** Data Type [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean).

## The **“null”** value
The special **null** value does not belong to any of the types described above.

It forms a separate type of its own which contains only the **null** value:
```JS
let age = **null**;
```
In JavaScript, **null** is not a “reference to a non-existing object” or a “**null** pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

The code above states that age is unknown.

### More information on **null** Data Type [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null).

## The **“undefined”** value
The special value **undefined** also stands apart. It makes a type of its own, just like null.

The meaning of **undefined** is “value is not assigned”.

If a variable is declared, but not assigned, then its value is **undefined**:
```JS
let age;

alert(age); // shows "**undefined**"
```
Technically, it is possible to explicitly assign **undefined** to a variable:
```JS
let age = 100;

// change the value to **undefined**
age = **undefined**;

alert(age); // "**undefined**"
```
…But it is not recommended doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while **undefined** is reserved as a default initial value for unassigned things.

### More information on **undefined** Data Type [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined), also you can check the difference between **undefined** and **null** [here](https://codeburst.io/javascript-null-vs-undefined-20f955215a2).


## **Objects** and **Symbols**
The **object** type is special.

All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, **objects** are used to store collections of data and more complex entities.

Being that important, **objects** deserve a special treatment. We’ll deal with them later in the chapter **objects**, after we learn more about primitives.

The **symbol** type is used to create unique identifiers for **objects**. We have to mention it here for the sake of completeness, but also postpone the details till we know **objects**.

### More information on **Objects** Data Type [here](https://javascript.info/object) and for **Symbols** [here](https://javascript.info/symbol).

## The **typeof** operator
The **typeof** operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.

A call to **typeof** x returns a string with the type name:
```JS
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```
The last three lines may need additional explanation:

1.Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers. Here, it serves just as an example of an object.

2.The result of **typeof** null is "object". That’s an officially recognized error in **typeof**, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of **typeof** is wrong here.

3.The result of **typeof** alert is "function", because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the object type. But **typeof** treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.

### More information on **typeof** [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).
_____________________________________________________________________________________________

