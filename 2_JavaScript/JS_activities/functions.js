// // Function definition
// function outer(param) {
//     console.log(param);
//     return function inner() {
//         console.log("Hello 2");
//     }
// }

// // Function call or invocation

// let func = function fn1() {
//     console.log("fn1");
// }

// let x = 10;
// let outerFn = outer(func);
// console.log(outerFn);


// Anonymous function
let func1 = function () {
    console.log("function called");
}

// func1();

// Arrow Function => syntax shorter, powerful, "this"
let func2 = num => num*num;

let rVal = func2(10);
// console.log(rVal);


// If parameter not passed on func call, By default undefined will be set
function fn3(param) {
    // console.log("line 35", param);
    // If no "return" statement, by default undefined will be returned
}

let rVal1 = fn3();
// console.log("line 39", rVal1);


// IIFEE => Immediately Invoked Function Expression
(function fn10() {
    console.log("I am IIFEE function");
})()