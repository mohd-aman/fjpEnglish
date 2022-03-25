const fs = require("fs");
console.log("Before");


let promise = fs.promises.readFile("f1.txt");

console.log(promise);

promise.then(function(data){
    console.log(data+"");
})

promise.catch(function(error){
    console.log(error);
})

console.log("After");
