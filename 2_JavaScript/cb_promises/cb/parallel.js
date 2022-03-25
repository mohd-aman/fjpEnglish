const fs = require("fs");
//Callback fxn -> any function that is passed as an argument
// to another function.

console.log("Before");
fs.readFile("file.txt",cb);
fs.readFile("file2.txt",cb);
fs.readFile("file3.txt",cb);

function cb(error,data){
    console.log(data+"");
}

console.log("After");
