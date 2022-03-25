const fs = require("fs");

let promiseOfFile1 = fs.promises.readFile("f1.txt");

let promiseOfFile2 = fs.promises.readFile("f2.txt");

let promiseOfFile3 = fs.promises.readFile("f3.txt");

promiseOfFile1.then(function(data){
    console.log(data+"")
}).catch(function(err){
    console.log(err);
})

promiseOfFile2.then(function(data){
    console.log(data+"");
}).catch(function(err){
    console.log(err);
})

promiseOfFile3.then(function(data){
    console.log(data+"");
}).catch(function(err){
    console.log(err);
})