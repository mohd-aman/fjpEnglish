let fs = require("fs");
let path = require("path");

let utility = {
    media: ['mp4','mkv','mp3'],
    archives: ['zip','7z','rar','tar','gz','ar','iso','xz'],
    documents: ['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app: ['exe','dmg','pkg','deb'],
    images: ['png', 'jpg', 'jpeg'],
}

function organizeFn(src) {
    // src is optional, default => current working directory to be your content to organize
    if (src == undefined) {
        src = process.cwd();  // Path of working directory
    } 

    let dest = createFolder(src, "organizedFolder");  // dest Path created & checked existence
    organizeHelper(src, dest);
}

function createFolder(src, parameter) {
    let folderPath = path.join(src, parameter); // src/organizedFolder
    if (fs.existsSync(folderPath) == false) {
        fs.mkdirSync(folderPath);  // Create a directory
    }
    return folderPath;
}

function getCategory(src) {
    // Logic to categorize

    // src => folder/file1.pdf
    // let extension = path.extname(src);  //pdf, jpg, mp4
    let extension = src.split(".")[1];
    for (let key in utility) {
        let valueArr = utility[key];
        for (let i = 0;i < valueArr.length;i++) {
            if (extension == valueArr[i])
                return key;
        }
    }

    return "others";  // If path doesn't fall under any category
}

function copyFileAndOrganize(src, dest) {
    dest = path.join(dest, path.basename(src));
    fs.copyFileSync(src, dest); // File is not yet created, copyFileSync will only content from srcfile to the destfile
}

function organizeHelper(src, dest) {
    // Logic
    let isFile = checkFileOrFolder(src);
    if (isFile == true) { 
        // utility
        // idenitfy which category => logic
        let category = getCategory(src);  // media => mp3, mp4
        let categoryPath = createFolder(dest, category);  // To create Category folder in dest path
        copyFileAndOrganize(src, categoryPath);

        // console.log(path.basename(src), "=>", category);
    } else { 
        let childrens = fs.readdirSync(src);
        
        for (let i = 0;i < childrens.length;i++) {
            let child = childrens[i]; 
            let childPath = path.join(src, child);

            organizeHelper(childPath, dest);
        }
    }
}

function checkFileOrFolder(path) {
    let isFile = fs.lstatSync(path).isFile();
    return isFile;
}

module.exports = {
    organize: organizeFn
}