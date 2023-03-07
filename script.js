const container = document.querySelector(".container");
const sizeEle = document.querySelector(".size");
const color = document.querySelector(".color");
const button = document.querySelector(".btn");
const erser = document.querySelector(".ers");
let x= sizeEle.value;
let drow=false;

function addGride(){
    let x = prompt("Enter gird(24X24) number");
    container.style.setProperty("--size",x);
    for (let i = 0; i < x*x; i++) {
        const div = document.createElement("div");
        div.classList.add("box");
       
        div.addEventListener("mouseover",()=> onMouseOver(div));
        div.addEventListener("mousedown",()=> onMouseDown(div));

        container.appendChild(div);
    }
}

function onMouseOver(div) {
  if (!drow) return;
  div.style.backgroundColor = color.value;
}
function onMouseDown(div) {
    div.style.backgroundColor = color.value;
}

window.addEventListener("mousedown",function() {
    drow=true;
});
window.addEventListener("mouseup",function() {
    drow=false;
});

function reset() {
    container.innerHTML =" ";
}
button.addEventListener("click",reset);

sizeEle.addEventListener("keyup",function () {
    x= sizeEle.value;
    reset();
});