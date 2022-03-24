// create forEach fn

let forEachCopy = (arr, func) => {
    for (const item of arr) {
        func(item);
    }
}

let asd = [1, 2, 3]

let log = a => console.log(a);

forEachCopy(asd, log);

// create filter fn

let isBiggerThan10 = function (a) {
    if (a > 10) {
        return true;
    } else {
        return 0;
    }
}

let filter = function (arr, func) {
    let filtered = [];
    for (const item of arr) {
        if (func(item)) {
            filtered.push(item)
        }
    }
    return filtered;
}

let arrToBeFiltered = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let filteredArr = filter(arrToBeFiltered, isBiggerThan10);

console.log(filteredArr)

//create map fn

let addTen = a => a + 10;

let arrToBeMapped = [1, 2, 3]

let mapCopy = function (arr, func) {

    let alteredArr = [];

    for (const item of arr) {
        alteredArr.push(func(item))
    }

    return alteredArr;
}

console.log(mapCopy(arrToBeMapped, addTen));

//Write composition of the three functions above on the const arr = [1, 2, 3]

const arr = [1, 2, 3];

let allInOne = function (arr) {

    let filtered = filter(mapCopy(arr, addTen), isBiggerThan10);

    for (const item of filtered) {
        console.log(item)
    }

}

allInOne(arr);