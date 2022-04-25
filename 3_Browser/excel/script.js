let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topLeftCell = document.querySelector(".top-left-cell");
let allCells = document.querySelectorAll(".cell");
let addressInput = document.querySelector("#address");

cellsContentDiv.addEventListener("scroll",function(e){
    let top = e.target.scrollTop;
    let left = e.target.scrollLeft;
    topRow.style.top = top+"px";
    topLeftCell.style.top = top+"px";
    topLeftCell.style.left = left+"px";
    leftCol.style.left = left+"px";
})

for(let i=0;i<allCells.length;i++){
    allCells[i].addEventListener("click",function(e){
        // console.log(e.target);
        let rowId = Number(e.target.getAttribute("rowid"));
        let colId = Number(e.target.getAttribute("colid"));
        // console.log(rowId+" "+colId);
        let address = String.fromCharCode(65+colId)+(rowId+1)+"";
        // console.log(address);
        addressInput.value = address;
    })
    
}