// variables
let size = 16;
const grid = document.querySelector('.grid');
let mouseDown = false;
let rainbow = false;
let color = "black";
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
let colorSetting = document.getElementById("color");
colorSetting.oninput = (e) => setColor(e.target.value);
let resetButton = document.getElementById("reset");
reset.onclick = () => resetGrid();
let clearButton = document.getElementById("clear");
clear.onclick = () => clearGrid();
let rainbowButton = document.getElementById("rainbow");
rainbowButton.onclick = () => toggleColor();
let eraserButton = document.getElementById("eraser");
eraserButton.onclick = () => setColor("beige");

// functions
function fillGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    // grid.style.backgroundColor = "beige";
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(var i = 0; i < size * size; i++) {
        const ele = document.createElement('div');
        ele.classList.add('grid-item');
        // ele.textContent = i;
        ele.addEventListener('mouseover', changeColor);
        ele.addEventListener('mousedown', changeColor);
        grid.appendChild(ele);
    }
}

// click mousedown works. 
function changeColor(e) {
    if(e.type == 'mouseover' && !mouseDown) {
        return;
    }
    if(!rainbow) {
        e.target.style.backgroundColor = color;
    }
    else if(rainbow) {
        // console.log("rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")");
        e.target.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"
    }
}

function resetGrid() {
    console.log("INSIDE RESET");
    size = prompt("Please enter grid size", 16);
    fillGrid(size);
}

function clearGrid() {
    console.log("CLEAR");
    fillGrid(size);
}

function toggleColor() {
    rainbow = !rainbow;
    if(rainbow == true) {
        rainbowButton.classList.add("toggle-color");
    }
    else if(rainbow == false) {
        rainbowButton.classList.remove("toggle-color");
    }
}

function toggleEraser() {
    eraser = !eraser;
    if(eraser == true) {

    }
}

function setColor(value) {
    color = value;
}

window.onload = () => {
    size = prompt("Please enter grid size", 16);
    fillGrid(Number(size));
}