# Questionnaire: Arrays

## **What are arrays?**

>Objects allow you to store keyed collections of values. That’s fine.
>
>But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.
>
>It is not convenient to use an *object* here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. *Objects* are just not meant for such use.
>
>There exists a special data structure named **Array**, to store ordered collections.

Declaration:

There are two syntaxes for creating an empty **array**:
```JS
let arr = new Array();
let arr = [];
```
Almost all the time, the second syntax is used. We can supply initial elements in the brackets:
```JS
let fruits = ["Apple", "Orange", "Plum"];
```
**Array** elements are numbered, starting with zero.

We can get an element by its number in square brackets:
```JS
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
```
We can replace an element:
```JS
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
```
…Or add a new one to the **array**:
```JS
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]
```
The total count of the elements in the **array** is its **length**:
```JS
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3
```
We can also use alert to show the whole array.
```JS
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits ); // Apple,Orange,Plum
```
### **length**
The **length property** automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

For instance, a single element with a large index gives a big length:
```JS
let fruits = [];
fruits[123] = "Apple";

alert( fruits.length ); // 124
```
Note that we usually don’t use arrays like that.

Another interesting thing about the length property is that it’s writable.

If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here’s the example:
```JS
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]

arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return
```
So, the simplest way to clear the array is: arr.length = 0;.

## **What kind of values can we store in arrays?**

**An array can store elements of any type.**

For instance:
```JS
// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello
```

## **What ways can we use to iterate over an array?**

You can iterate over an array elements by using **loops**.

One of the oldest ways to cycle array items is the **for loop** over indexes:
```JS
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
```
But for arrays there is another form of loop, **for..of**:
```JS
let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}
```
The **for..of** doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.

Technically, because arrays are objects, it is also possible to use for..in:
```JS
let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}
```
But that’s actually a **bad idea**. There are potential problems with it:

1. The loop **for..in** iterates over all properties, not only the numeric ones.

There are so-called *“array-like”* objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.

2. The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

### Generally, we shouldn’t use **for..in** for arrays.

## **What are array methods?**

Let's take a look at some of the most common array methods.

## pop/push, shift/unshift - methods

A [**queue**](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:

- **push** appends an element to the end.
- **shift** get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

> Arrays support both operations.

In practice we need it very often. For example, a queue of messages that need to be shown on-screen.

There’s another use case for arrays – the data structure named [**stack**](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)).

It supports two operations:

1. **push** adds an element to the end.
2. **pop** takes an element from the end.
So new elements are added or taken always from the “end”.

A stack is usually illustrated as a pack of cards: new cards are added to the top or taken from the top:


For stacks, the latest pushed item is received first, that’s also called **LIFO** (Last-In-First-Out) principle. For **queues**, we have **FIFO** (First-In-First-Out).

Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements both to/from the beginning or the end.

In computer science the data structure that allows this, is called [**deque**](https://en.wikipedia.org/wiki/Double-ended_queue).

### Methods that work with the end of the array:

**pop**
Extracts the last element of the array and returns it:
```JS
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange
```
**push**
Append the element to the end of the array:
```JS
let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear
```
The call **fruits.push(...)** is equal to **fruits[fruits.length] = ...**.

### Methods that work with the beginning of the array:

**shift**
Extracts the first element of the array and returns it:
```JS
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear
```
**unshift**
Add the element to the beginning of the array:
```JS
let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear
```
Methods **push** and **unshift** can add multiple elements at once:
```JS
let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );
```

## **Which array methods return a new array?**


## Add/remove items
We already know methods that add and remove items from the beginning or the end:

- **arr.push(...items)** – adds items to the end,
- **arr.pop()** – extracts an item from the end,
- **arr.shift()** – extracts an item from the beginning,
- **arr.unshift(...items)** – adds items to the beginning.

Here are a few others.

**splice**
How to delete an element from the array?

The arrays are objects, so we can try to use delete:
```JS
let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert( arr[1] ); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3
```
The element was removed, but the array still has 3 elements, we can see that arr.length == 3.

That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for objects. But for arrays we usually want the rest of elements to shift and occupy the freed place. We expect to have a shorter array now.

So, special methods should be used.

The **arr.splice** method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

The syntax is:
```JS
arr.splice(start[, deleteCount, elem1, ..., elemN])
```
It modifies arr starting from the index start: removes **deleteCount** elements and then inserts **elem1**, **...**, **elemN** at their place. **Returns the array of removed elements.**

This method is easy to grasp by examples.

Let’s start with the deletion:
```JS
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]
```
Easy, right? Starting from the index 1 it removed 1 element.

In the next example we remove 3 elements and replace them with the other two:
```JS
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]
```
Here we can see that splice returns the array of removed elements:
```JS
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements
```
The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
```JS
let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"
```

**concat**
The method **arr.concat** creates a new array that includes values from other arrays and additional items.

The syntax is:
```JS
arr.concat(arg1, arg2...)
```
It accepts any number of arguments – either arrays or values.

The result is a new array containing items from arr, then arg1, arg2 etc.

If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

For instance:
```JS
let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
```
Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:
```JS
let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]
```
…But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:
```JS
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else
```
**slice**

The method **arr.slice** is much simpler than similar-looking arr.splice.

The syntax is:
```JS
arr.slice([start], [end])
```
It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

It’s similar to a string method str.slice, but instead of substrings it makes subarrays.

For instance:
```JS
let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr.slice(-2) ); // s,t (copy from -2 till the end)
```
We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.

## **Which array methods modify the original array?**

**sort(fn)**
The call to **arr.sort()** sorts the array in place, changing its element order.

It also returns the sorted array, but the returned value is **usually ignored**, as arr itself is modified.

For instance:
```JS
let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr );  // 1, 15, 2
```
Did you notice anything strange in the outcome?

The order became 1, 15, 2. Incorrect. But why?

The items are sorted as strings by default.

Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".

To use our own sorting order, we need to supply a function as the argument of arr.sort().

The function should compare two arbitrary values and return:
```JS
function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}
```
For instance, to sort as numbers:
```JS
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15
```
Now it works as intended.
```
Let’s step aside and think what’s happening. The arr can be array of anything, right? It may contain numbers or strings or objects or whatever. We have a set of some items. To sort it, we need an ordering function that knows how to compare its elements. The default is a string order.

The arr.sort(fn) method implements a generic sorting algorithm. We don’t need to care how it internally works (an optimized quicksort or Timsort most of the time). It will walk the array, compare its elements using the provided function and reorder them, all we need is to provide the fn which does the comparison.
```
By the way, if we ever want to know which elements are compared – nothing prevents from alerting them:
```JS
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  alert( a + " <> " + b );
  return a - b;
});
```
The algorithm may compare an element with multiple others in the process, but it tries to make as few comparisons as possible.


**reverse**
The method **arr.reverse** reverses the order of elements in arr.

For instance:
```JS
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
```
It also returns the array arr after the reversal.

### We could surely say that **splice** method  also modifies an array strongly, so this method has to be mentioned, when it comes to modifying an array.

_____________________________________________________________________

### Here we cover only the tip of the iceberg but there is plenty of more information about arrays, and arrays methods. For knowledge power dive on arrays, click [here](https://javascript.info/array) and of course [here](https://javascript.info/array-methods#reverse). In the beggining it may seem a bit confusing with all the methods and functionalities of the arrays, but with time, you will get used to it and you wont even think about it as doing it.