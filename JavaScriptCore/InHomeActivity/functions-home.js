// make f that checks if the param is number

let isNum = function (a) {
    if (a !== +a) {
        throw new Error(`${a} is not a number`)
    }
}

// make a  f that add two numbers and throw error if parameters are not a number DT

let addition = function (a, b) {

    isNum(a);
    isNum(b);

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

    isNum(a);
    isNum(b);

    return a * b;
}

// divide f

let division = function (a, b) {

    isNum(a);
    isNum(b);

    return a / b;
}

//subtraction

let subtraction = function (a, b) {

    isNum(a);
    isNum(b);

    return a - b;
}

// addition f extended, addition N args given

let additionExtend = function (...args) {


    let sum = 0;

    for (let i = 0; i < args.length; i++) {

        isNum(args[i]);

        sum += args[i];
    }
    return sum;
}

console.log(additionExtend(1, 2, 3, 4, 5));

// create calculator f

const calculator = function (a, b, func) {

    isNum(a);
    isNum(b);

    let result = func(a, b);

    return result;

}

console.log(calculator(2, 3, addition));

//calculator extended, get N functions, invoke them inside the main F collect the returns in array and return the arr

let calculatorExtended = function (a, b, ...func) {

    isNum(a);
    isNum(b);

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