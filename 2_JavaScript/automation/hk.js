const puppeteer = require("puppeteer");
const codeFile = require("./code");

const email = "fesagom584@chatich.com"
const password = "pepcoding123"

let browserPromise = puppeteer.launch({ headless: false,defaultViewport:null,rgs:['--start-maximized']});
let page;
let cPage;
let browser;
browserPromise.then(function(browserInstance){
    browser = browserInstance;
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
    return page.waitForSelector(".challenges-list .js-track-click.challenge-list-item");
}).then(function(){
    console.log("warmup has been selected");
    // querySelectorAll -> $$
    // querySelector    -> $
    let allChallengeArrPromise = page.$$(".challenges-list .js-track-click.challenge-list-item",{
        delay:100
    })
    return allChallengeArrPromise;
}).then(function(allChallengeArr){
    console.log("Number of questions -> " + allChallengeArr.length);
    let allUrlLinksPromise = page.evaluate(function(){
        let allEle = document.querySelectorAll(".challenges-list .js-track-click.challenge-list-item");
        let linksArr = [];
        for(let i=0;i<allEle.length;i++){
            linksArr.push("https://www.hackerrank.com/"+allEle[i].getAttribute("href"));
        }
        return linksArr;
    })
    return allUrlLinksPromise;
}).then(function(allLinks){
    console.log(allLinks);
    let questionWillBeSolvePromise = questionSolver(allLinks[0],codeFile.answers[0]);
    for(let i=1;i<allLinks.length;i++){
        questionWillBeSolvePromise = questionWillBeSolvePromise.then(function(){
            return questionSolver(allLinks[i],codeFile.answers[i]);
        })
    }
    return questionWillBeSolvePromise;
    // console.log("Question is solved");
}).then(function(){
    console.log("All the Questions have been solved");
})


function questionSolver(url,answer){
    return new Promise(function(resolve,reject){
        let pagePromise = browser.newPage();
        pagePromise.then(function(pageInstance){
            cPage = pageInstance;
            return cPage.goto(url);
        }).then(function(){
            return cPage.waitForSelector(".monaco-editor.no-user-select")
        }).then(function(){
            return cPage.click(".monaco-editor.no-user-select",{delay:200});
        }).then(function(){
            return cPage.waitForSelector(".checkbox-input");
        }).then(function(){
            return cPage.click(".checkbox-input",{delay:200})
        }).then(function(){
            return cPage.waitForSelector("#input-1");
        }).then(function(){
            return cPage.click("#input-1",{delay:200});
        }).then(function(){
            return cPage.type("#input-1",answer);
        }).then(function(){
            return cPage.keyboard.down('Control');
        }).then(function(){
            return cPage.keyboard.press('A');
        }).then(function(){
            return cPage.keyboard.press('X');
        }).then(function(){
            return cPage.keyboard.up('Control');
        }).then(function(){
            return cPage.click(".monaco-editor.no-user-select");
        }).then(function(){
            return cPage.keyboard.down('Control');
        }).then(function(){
            return cPage.keyboard.press('A');
        }).then(function(){
            return cPage.keyboard.press('V');
        }).then(function(){
            return cPage.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right");
        }).then(function(){
            return cPage.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right",{delay:200});
        }).then(function(){
            resolve();
        })
    })
}