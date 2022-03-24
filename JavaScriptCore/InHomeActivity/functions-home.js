// make f that checks if the param is number

let isNum = function (a) {
    if (a === +a) {
        return true;
    } else {
        return false;
    }
}

// make a  f that add two numbers and throw error if parameters are not a number DT

let addition = function (a, b) {
    if (!isNum(a)) {
        throw new Error(`${a} is not a number!`)
    } else if (!isNum(b)) {
        throw new Error(`${b} is not a number!`)
    }
    return a + b;
}

// Catch the error

try {
    addition(2, '3')
} catch (error) {
    console.log(`Error message: ${error.message}`)
}

// create multiply f

let multiply = function (a, b) {
    if (!isNum(a)) {
        throw new Error(`${a} is not a number!`)
    } else if (!isNum(b)) {
        throw new Error(`${b} is not a number!`)
    }

    return a * b;
}

// divide f

let division = function (a, b) {
    if (!isNum(a)) {
        throw new Error(`${a} is not a number!`)
    } else if (!isNum(b)) {
        throw new Error(`${b} is not a number!`)
    }
    return a / b;
}

//subtraction

let subtraction = function (a, b) {
    if (!isNum(a)) {
        throw new Error(`${a} is not a number!`)
    } else if (!isNum(b)) {
        throw new Error(`${b} is not a number!`)
    }

    return a - b;
}

// addition f extended, addition N args given

let additionExtend = function (...args) {


    let sum = 0;

    for (let i = 0; i < args.length; i++) {

        if (!isNum(args[i])) {

            throw new Error(`${args[i]} is not a number!`)
        }

        sum += args[i];
    }
    return sum;
}

console.log(additionExtend(1, 2, 3, 4, 5));

// create calculator f

const calculator = function (a, b, func) {

    if (!isNum(a)) {
        throw new Error(`${a} is not a number!`)
    } else if (!isNum(b)) {
        throw new Error(`${b} is not a number!`)
    }

    let result = func(a, b);

    return result;

}

console.log(calculator(2, 3, addition));

//calculator extended, get N functions, invoke them inside the main F collect the returns in array and return the arr

let calculatorExtended = function (a, b, ...func) {

    if (!isNum(a)) {
        throw new Error(`${a} is not a number!`)
    } else if (!isNum(b)) {
        throw new Error(`${b} is not a number!`)
    }

    let results = [];

    for (let i = 0; i < func.length; i++) {
        results.push(func[i](a, b))

    }
    return results;

}

try {
    console.log(calculatorExtended(6, '2', addition, multiply, subtraction, division))
} catch (error) {
    console.log(error.message)
}

console.log(calculatorExtended(6, 2, addition, multiply, subtraction, division))