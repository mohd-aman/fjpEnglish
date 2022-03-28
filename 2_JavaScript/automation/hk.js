const puppeteer = require("puppeteer");

let browserPromise = puppeteer.launch({ headless: false,defaultViewport:null,rgs:['--start-maximized']});
let page;
browserPromise.then(function(browserInstance){
    let pagePromise = browserInstance.newPage();
    return pagePromise;
}).then(function(newPage){
    page = newPage;
    let hkPromise = page.goto("https://www.hackerrank.com/");
    return hkPromise;
}).then(function(){
    let logInBtnPromise = page.click('a[data-event-action="Login"]',{
        delay:200,
    });
    return logInBtnPromise;
}).then(function(){
    return page.waitForSelector(".fl-col.fl-node-5bd106f71cd43 .fl-button");
}).then(function(){
    let logInDeveloperPromise = page.click(".fl-col.fl-node-5bd106f71cd43 .fl-button",{
        delay:200,
    })
    return logInDeveloperPromise;
})