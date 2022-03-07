const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results"

request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const scorecardLinks = document.querySelectorAll('a[data-hover="Scorecard"]')
        for(let i=0;i<scorecardLinks.length;i++){
            let linkOfOneMatch = "https://www.espncricinfo.com"+scorecardLinks[i].href;
            // console.log(linkOfOneMatch)
            request(linkOfOneMatch,cb2);
        }
    }
}

function cb2(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        
    }
}