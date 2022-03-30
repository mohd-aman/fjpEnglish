const puppeteer = require("puppeteer");

const email = "fesagom584@chatich.com"
const password = "pepcoding123"

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
    return page.waitForSelector('a[data-event-action="Login"]');
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
}).then(function(){
    return page.waitForSelector('input[name="username"]');
}).then(function(){
    let emailTypedPromise = page.type('input[name="username"]',email);
    return emailTypedPromise;
}).then(function(){
    console.log("Email has been typed");
}).then(function(){
    return page.waitForSelector('input[name="password"]')
}).then(function(){
    let passTypedPromise = page.type('input[name="password"]',password);
    return passTypedPromise;
}).then(function(){
    console.log("Password has been typed");
    return page.waitForSelector('button[data-analytics="LoginPassword"]');
}).then(function(){
    let clickBtnPromise = page.click('button[data-analytics="LoginPassword"]',{
        delay:100
    });
    return clickBtnPromise;
}).then(function(){
    console.log("Login ")
    return page.waitForSelector(".topic-name");
}).then(function(){
    let algoBtnClickPromise = page.click(".topic-name");
    return algoBtnClickPromise;
}).then(function(){
    console.log("algo button is clicked")
    return page.waitForSelector('input[value="warmup"]');
}).then(function(){
    let warmupClickPromise = page.click('input[value="warmup"]',{
        delay:400,
    });
    return warmupClickPromise;
}).then(function(){
    return page.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
}).then(function(){
    console.log("warmup has been selected");
    // querySelectorAll -> $$
    // querySelector    -> $
    let allChallengeArrPromise = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",{
        delay:100
    })
    return allChallengeArrPromise;
}).then(function(allChallengeArr){
    console.log("Number of questions -> " + allChallengeArr.length);
})