const puppeteer = require("puppeteer");
const code = require("./code");

const email = "fesagom584@chatich.com"
const password = "pepcoding123"

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
    await waitAndClick('a[data-event-action="Login"]',newPage);
    await waitAndClick('.fl-module.fl-module-button.fl-node-5bd106f71cbed .fl-button',newPage);
    await newPage.waitForSelector('input[name="username"]');
    await newPage.type('input[name="username"]',email);
    await newPage.waitForSelector('input[name="password"]')
    await newPage.type('input[name="password"]',password);
    await waitAndClick('button[data-analytics="LoginPassword"]',newPage);
    await waitAndClick('.topic-name',newPage);
    await waitAndClick('input[value="warmup"]',newPage);
    await newPage.waitForSelector('.challenges-list .js-track-click.challenge-list-item');
    let linkArr = await newPage.evaluate(function(){
        let allEle = document.querySelectorAll(".challenges-list .js-track-click.challenge-list-item");
        let linksArr = [];
        for(let i=0;i<allEle.length;i++){
            linksArr.push("https://www.hackerrank.com/"+allEle[i].getAttribute("href"));
        }
        return linksArr;
    })
    // console.log(linkArr);
    for(let i=0;i<linkArr.length;i++){
        await questionSolver(linkArr[i],code.answers[i],browserInstance);
    }
};

func();


async function waitAndClick(selector,page){
    await page.waitForSelector(selector);
    await page.click(selector,{delay:200});
}

async function questionSolver(url,answer,browser){
    let newPage = await browser.newPage();
    await newPage.goto(url);
    await waitAndClick(".monaco-editor.no-user-select",newPage);
    await waitAndClick(".checkbox-input",newPage);
    await waitAndClick("#input-1",newPage);
    await newPage.type("#input-1",answer);
    await newPage.keyboard.down('Control');
    await newPage.keyboard.press('A');
    await newPage.keyboard.press('X');
    await newPage.keyboard.up('Control');
    await newPage.click(".monaco-editor.no-user-select");
    await newPage.keyboard.down('Control');
    await newPage.keyboard.press('A');
    await newPage.keyboard.press('V');
    await waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right",newPage);
}