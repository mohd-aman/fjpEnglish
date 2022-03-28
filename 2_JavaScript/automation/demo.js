const puppeteer = require('puppeteer');

console.log("Before");
let browserPromise = puppeteer.launch({ headless: false,defaultViewport:null,rgs:['--start-maximized']});

browserPromise.then(function(browserInstance){
    console.log("Browser Opened");
    let pagePromise = browserInstance.newPage();
    return pagePromise;
}).then(function(page){
    console.log("page is opened");
    let urlPromise = page.goto("https://pepcoding.com");
    return urlPromise;
}).then(function(urlPage){
    console.log("url is opened");
})


console.log("After")