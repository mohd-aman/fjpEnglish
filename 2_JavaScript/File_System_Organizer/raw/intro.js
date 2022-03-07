// Top to bottom, left to right
// Print something
// console.log("Hello World!!");

// Variables Declaration
// let => Keyword to declare variables
// let a = 10;
// console.log("My variable", a);

// JS is dynamically typed Language
// a = "GoodBye";
// console.log("My variable", a);

// a = 1.0111
// let b = "Goodbye";
// console.log("My variable", a, b);

// a = true;
// console.log("My variable", a);


// if (a == true) {
//     console.log("This is true condition");
// } else {
//     console.log("This is false condition");
// }

// let endLimit = 5;
// for (let i = 0;i < endLimit;i++) {
//     console.log("Hello", i, "- times");
// }

/***********************************************************************************/

// Datatypes => Primitive, Non-primitive
// Primitive => Number, string, boolean, null, undefined

// Declare & [define or initialize] 
// let y; // undefined [default if not initialized]
// let x = null; // Non-existent

// Only Declare a variable
// let y; // undefined => Non-existent
// console.log(x, y);


// Comments in Javascript => // single line
/* multi-line comments
fghjkv 
xdfg
*/
/***********************************************************************************/

// Non-Primitive => Array, Object, Function

// Function Definition or function body
// input parameter & return value is dynamic
// function printValue(param1, param2) {
//     console.log("Hello World!!", param1, param2);
//     return (Math.random() > 0.5) ? false : "Not";
// }

// // Function call or invocation
// let rVal = printValue(100, true);
// console.log(rVal);

// Function as a value in a variable
// let fn = function printVal() { // function's address
//     console.log("Hello world");
// }
// console.log(fn);

// Arrays declaration
// let arr1 = [1, 2, 3, 4];
// arr1[0] = 100;
// console.log(arr1);
// let arr2 = arr1;
// arr2[1] = 100;
// console.log(arr2[1]);

// let arr3 = arr1.slice(1, 3);
// arr3[0] = 100;
// console.log(arr1, arr3);

// Dynamic
// let arr2 = [
// 1, 2, 556, 677, "Hellow", true,
// function someting() {
//     console.log("In array");
// },
// 'Bye', null, undefined
// ];

// let fn = arr2[6];
// fn();
// console.log(fn);

// console.log(arr1.length);

let arr = [1, 2, 3, 4, 5, 6];
// Push, pop, shift, unshift, slice, splice
// arr.push(4); // Add @ end of arr
// arr.push(5);
// // console.log(arr);
// // console.log(arr.pop(), arr); // Remove from last in arr
// // console.log(arr.pop(), arr);

// // console.log(arr.shift(), arr); // Remove from front in arr
// // console.log(arr.shift(), arr);
// arr.unshift(100); // Add from front in arr
// arr.unshift(200);

// arr.slice(included, excluded) => copy
// arr.slice(start_index, end_index) => copy
// let newArr = arr.slice(4); 
// newArr[0] = -1;

let newArr = arr.splice(1, 3); // arr.splice(start_index, length) => copy & delete

console.log(arr, newArr);

/*********************************************************/
// Function reference & function call

// Objects => Reference
// Key,value
// CRUD => Create, Read, Update & Delete 
// Defining an object => Create
let obj = {
    name: "Pepper",
    age: 22,
    fun: function greet() {
        console.log("Hello World!");
    },
    my_arr: [1,"hello", true, null],
    my_obj: {
        company: "Pepcoding",
    }
}
// let myObj = obj.my_obj;
// let cmpny = myObj.company;
// let myObj = obj["my_obj"];
// let cmpny = myObj.company;
// console.log(obj.my_obj.company);

// Read => Access
// let myName = obj.name;
// let myFun = obj.fun;
// let myName = obj["age"];
// let str = "name";
// let myName = obj[str];
// console.log(myName);
// console.log(myFun);

// Update
// obj.college = "IIT"; // Update new
// obj.age = 20; // Override existing obj key
// console.log(obj);
// Delete
// delete obj["name"];
// console.log(obj);

// for-in => To iterate on object
// for (let key in obj) {
//     console.log(obj[key]);
// }