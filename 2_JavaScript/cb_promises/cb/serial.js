const fs = require("fs");

console.log("Before");
fs.readFile("file.txt",cb);

function cb(error,data){
    if(error){
        return ;
    }else{
        console.log(data+" ");
        fs.readFile("file2.txt",cb);
    }
}

function cb2(error,data){
    if(error){
        return ;
    }else{
        console.log(data+"");
        fs.readFile("file3.txt",cb3);
    }
}

function cb3(error,data){
    if(error){
        return;
    }else{
        console.log(data+" ");
    }
}

console.log("After");

