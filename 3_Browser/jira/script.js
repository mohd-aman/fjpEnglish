let addBtn = document.querySelector(".add-btn");
let addModal = true;
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let taskAreaCont = document.querySelector(".textarea-cont")
let removeBtn = document.querySelector(".remove-btn");
let removeFlag = false;
let allPriorityColors = document.querySelectorAll(".priority-color");
let colors = ['ligthpink','blue','green','black'];
let modalPriorityColor = colors[colors.length-1];

//Showing modal
addBtn.addEventListener("click",function(){
    //Display a Modal
    if(addModal){
        modalCont.style.display = "flex";
    }else{
        modalCont.style.display = "none";
    }
    addModal = !addModal
})

//priorityColors change
for(let i=0;i<allPriorityColors.length;i++){
    let priorityDivOneColor = allPriorityColors[i];
    priorityDivOneColor.addEventListener("click",function(){
        for(let j=0;j<allPriorityColors.length;j++){
            allPriorityColors[j].classList.remove('active');
        }
        priorityDivOneColor.classList.add("active");
        modalPriorityColor = priorityDivOneColor.classList[0];
    })
}



//Generating Ticket
modalCont.addEventListener('keydown',function(e){
    // console.log(e);
    let key = e.key;
    if(key == 'Enter'){
        createTicket(modalPriorityColor,taskAreaCont.value);
        taskAreaCont.value = "";
        modalCont.style.display = "none";
        addModal = !addModal
    }
})


function createTicket(ticketColor,task){
    // <div class="ticket-cont">
            // <div class="ticket-color"></div>
            // <div class="ticket-id"></div>
            // <div class="task-area"></div>
    //     </div>
    let ticketCont = document.createElement('div');
    ticketCont.setAttribute('class','ticket-cont');
    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
                            <div class="ticket-id"></div>
                            <div class="task-area">${task}</div>`;
    mainCont.appendChild(ticketCont);
    handleRemoval(ticketCont);
    handleColor(ticketCont);
}

removeBtn.addEventListener("click",function(){
    if(removeFlag){
        removeBtn.style.color = 'black'
    }else{
        removeBtn.style.color = 'red'
    }
    removeFlag = !removeFlag;
})

function handleRemoval(ticket){
    ticket.addEventListener("click",function(){
        if(removeFlag){
            ticket.remove();
        }
    })
}

function handleColor(ticket){
    let ticketColorBand = ticket.querySelector('.ticket-color');
    ticketColorBand.addEventListener("click",function(){
        let currentTicketColor = ticketColorBand.classList[1];
        let currentTicketColorIdx = colors.findIndex(function(color){
            return currentTicketColor === color
        })
        newIdx = (currentTicketColorIdx+1)%colors.length;
        newColor = colors[newIdx];
        ticketColorBand.classList.remove(currentTicketColor);
        ticketColorBand.classList.add(newColor);
    })
}