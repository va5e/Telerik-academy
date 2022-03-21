// For..in loop demo (We use for..in loop to iterate over an OBJECT);
let person = {
    firstName: 'Vassil',
    lastName: 'Iliev',
    age: 25,
}

for (const key in person) {
    console.log(`${key}:${person[key]}`)
}

let mother = new Object();
mother.name = 'Milena';
mother.age = 50;

for (const prop in mother) {
    console.log(`${prop}:${mother[prop]}`)
}

function PersonObj(name, age, eyecolor) {
    this.name = name;
    this.age = age;
    this.eyecolor = eyecolor;
}

let person01 = new PersonObj('Martin', 27, 'Brown');

for (const key in person01) {
    console.log((`${key}:${person01[key]}`))
}

//For..of loop (we use it to iterate over an ARRAY);

let arr = [1, 2, 3, 4, 5, 6]

for (const item of arr) {
    console.log(item)
}

arr.name = 'Vassil'; // this is ignored, because its proprty with identificator which is not sequential index.
// but if it was in for..in loop , it would be shown and the array wont work as an array anymore.

for (const item of arr) {
    console.log(item)
}
