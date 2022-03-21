const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let index = 0;
while (index < arr.length) {
    console.log(arr[index]);
    index++
}

for (const key in arr) {
    console.log(arr[key])
}

for (const item of arr) {
    console.log(item)
}

for (let i = 0; i < arr.length / 2; i++) {
    console.log(arr[i])
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        continue;
    }
    console.log(arr[i])
}