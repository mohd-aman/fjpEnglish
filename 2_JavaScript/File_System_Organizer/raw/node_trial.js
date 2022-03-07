// os module
// let os = require("os");
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.networkInterfaces());

/*****************************************************************************/

// fs => filesystem [CRUD]

// let fs = require("fs");

// To read content
// let content = fs.readFileSync("f1.txt");
// console.log(content+"");

// To write content
// File not exist => create
// File exist => write content but overriding previous content
// fs.writeFileSync("f2.txt", "I am f2\n");

// // To write content without overriding
// fs.appendFileSync("f2.txt", "Hello, I can append content now");

// // Create folder
// fs.mkdirSync("facts");

// // Delete a module
// fs.rmdirSync("facts");

/*****************************************************************************/

// path
// let path = require("path");

// __dirname => Indicates your current working directory
// console.log(__dirname);

// let pathToFile = __dirname + "\\newFolder\\f0.txt";
// let pathToFile = path.join(__dirname, "newFolder", "f0.txt");
// let content = fs.readFileSync(pathToFile);
// console.log(content + "");
