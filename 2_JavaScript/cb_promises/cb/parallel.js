const fs = require("fs");
//Callback fxn -> any function that is passed as an argument
// to another function.

console.log("Before");
let content1 = fs.readFile("file.txt",cb);
let content2 = fs.readFile("file2.txt",cb);
let content3 = fs.readFile("file3.txt",cb);

function cb(error,data){
    console.log(data+"");
}

console.log("After");
