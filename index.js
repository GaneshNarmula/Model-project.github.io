
const model = document.querySelector(".model-overlay");
const openbtn = document.querySelector(".openbtn");
const crossbtn = document.querySelector(".crossbtn");

openbtn.addEventListener("click",function(){
    model.classList.add("newmodel");
});

crossbtn.addEventListener("click",function(){
    model.classList.remove("newmodel");
});