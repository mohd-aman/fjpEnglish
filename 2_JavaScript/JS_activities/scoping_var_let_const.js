// Scoping in var, let, const

// var => Function scoping ============================
// var a = 10;
// function greet() {
//     var a = 100;
// }
// console.log(a);

// var a = 10;
// console.log(a);

// function greet() {
//     console.log(a);
//     var a = 20;
//     console.log(a);
//     a++;
//     console.log(a);
// }
// greet();

// console.log(a);

// let & const => Block scoping =======================
// block => {}

// let a = 10;
// console.log(a);

// {
//     // console.log(a);  // Error
//     let a = 20;
//     console.log(a);
//     a++;
//     console.log(a);
// }

// console.log(a);


// var a = 10;
// console.log(a);

// function hello() {
//     console.log(a);
// }

// function greet() {
//     console.log(a);
//     var a = 20;
//     console.log(a);

//     if (true) {
//         console.log(a);
//         let a = 30;
//         a++;
//         console.log(a);
//     }

//     console.log(a);
//     hello();
// }
// greet();
// console.log(a);


// Variable shaddowing ========================

// var a = 20;
// console.log(a);
// let a = 10;
// console.log(a);

// var a = 10;
// console.log(a);
// {
//     console.log(a);
//     let a = 20;
//     console.log(a);
// }
// console.log(a);