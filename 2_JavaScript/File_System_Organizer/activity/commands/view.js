let fs = require("fs");
let path = require("path");

function viewFn(src, mode) {
    // console.log("Viewing your folder");

    if (mode == "flat")
        viewHelperFlat(src);
    else 
        viewHelperTree(src, "|");
}

function checkFileOrFolder(path) {
    let isFile = fs.lstatSync(path).isFile();
    return isFile;
}

// Print entire Path
function viewHelperFlat(src) {
    // Is it a file or folder
    let isFile = checkFileOrFolder(src);
    if (isFile == true) {  // Base case
        console.log(src, "*");
    } else { // Folder => Folder1, Files
        console.log(src);
        let childrens = fs.readdirSync(src); // Read content Immediate Level childrens
        
        for (let i = 0;i < childrens.length;i++) {
            let child = childrens[i]; // Not a complete path, just file or folder name
            let childPath = path.join(src, child);
            // console.log(childPath);

            // Faith ??
            viewHelperFlat(childPath);
            
        }
    }
}

// Print the path's foldername or filename
function viewHelperTree(src, indent) {
    // Is it a file or folder
    let isFile = checkFileOrFolder(src);
    if (isFile == true) {  // Base case
        console.log(indent, path.basename(src), "*");  //path.basename() => F/App/index.js => index.js
    } else { // Folder => Folder1, Files
        console.log(indent, path.basename(src));
        let childrens = fs.readdirSync(src); // Read content Immediate Level childrens
        
        for (let i = 0;i < childrens.length;i++) {
            let child = childrens[i]; // Not a complete path, just file or folder name
            let childPath = path.join(src, child);
            // console.log(childPath);

            // Faith ??
            viewHelperTree(childPath, indent+"____");
            
        }
    }
}

module.exports = {
    view: viewFn
}