const puppeteer = require("puppeteer");


// console.log(" 1: Before");

// let browserPromise = puppeteer.launch({ headless: false,defaultViewport:null,rgs:['--start-maximized']});

// browserPromise.then(function(browserInstance){
//     let pagePromise = browserInstance.newPage();
//     return pagePromise;
// }).then(function(newPage){
//     console.log("2: Browser opened")
//     let hkPromise = newPage.goto("https://www.hackerrank.com/");
//     return hkPromise;
// })


// console.log("3: After");


async function func(){
    let browserInstance = await puppeteer.launch({ headless: false,defaultViewport:null,rgs:['--start-maximized']});
    let newPage = await browserInstance.newPage();
    await newPage.goto("https://www.hackerrank.com/");
    await newPage.waitForSelector('a[data-event-action="Login"]');
    await newPage.click('a[data-event-action="Login"]',{delay:200});
    
};

func();

