let addBtn = document.querySelector(".add-btn");
let addModal = true;
let modal = document.querySelector(".modal-cont");

addBtn.addEventListener("click",function(){
    //Display a Modal
    if(addModal){
        modal.style.display = "flex";
    }else{
        modal.style.display = "none";
    }
    addModal = !addModal
})


