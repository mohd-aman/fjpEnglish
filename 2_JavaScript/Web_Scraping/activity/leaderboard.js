const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results"

request(link,cb);

leaderBoard = [];

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
        let rows = document.querySelectorAll(".table.batsman tbody tr");
        for(let i=0;i<rows.length;i++){
            let detail = rows[i];
            let cell = detail.querySelectorAll("td");
            if(cell.length == 8){
                let name = cell[0].textContent;
                let runs = cell[2].textContent;
                let balls = cell[3].textContent;
                let fours = cell[5].textContent;
                let six = cell[6].textContent;
                // console.log(name,runs,balls,fours,six);
                processLeaderBoard(name,runs,balls,fours,six);
            }
        }
    }
}

function processLeaderBoard(name,runs,balls,fours,six){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    six = Number(six);
    if(leaderBoard.length>0){
        for(let i=0;i<leaderBoard.length;i++){
            if(leaderBoard[i].Batsman == name){
                leaderBoard[i].Matches+=1;
                leaderBoard[i].Balls+=balls;
                leaderBoard[i].Runs+=runs;
                leaderBoard[i].Fours+=fours;
                leaderBoard[i].Sixes+=six;
                return;
            }
        }
    }
    let obj = {
        Batsman:name,
        Matches: 1,
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:six
    }
    leaderBoard.push(obj);
}