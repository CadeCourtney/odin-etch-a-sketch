// variables
let size = 16;
const grid = document.querySelector('.grid');
let boolMouseDown = false;
let boolRainbow = false;
let boolEraser = false;
let color = "black";

document.body.onmousedown = () => (boolMouseDown = true);
document.body.onmouseup = () => (boolMouseDown = false);

let colorSetting = document.getElementById("color");
colorSetting.oninput = (e) => setColor(e.target.value);

let resetButton = document.getElementById("reset");
reset.onclick = () => resetGrid();

let clearButton = document.getElementById("clear");
clear.onclick = () => clearGrid();

let rainbowButton = document.getElementById("rainbow");
rainbowButton.onclick = () => toggleColor();

let eraserButton = document.getElementById("eraser");
eraserButton.onclick = () => toggleEraser();

// functions
function fillGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(var i = 0; i < size * size; i++) {
        const ele = document.createElement('div');
        ele.classList.add('grid-item');
        ele.addEventListener('mouseover', changeColor);
        ele.addEventListener('mousedown', changeColor);
        grid.appendChild(ele);
    }
}

// click mousedown works. 
function changeColor(e) {
    if(e.type == 'mouseover' && !boolMouseDown) {
        return;
    }
    if(!boolRainbow && !boolEraser) {
    e.target.style.backgroundColor = color;
    }
    else if(boolEraser) {
        e.target.style.backgroundColor = "beige";
    }
    else if(boolRainbow) {
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
    // setColor("rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")");
    boolRainbow = !boolRainbow;
    if(boolRainbow) {
        rainbowButton.classList.add("toggle-color");
    }
    else if(!boolRainbow) {
        rainbowButton.classList.remove("toggle-color");
    }
}

function setColor(value) {
    color = value;
}

function toggleEraser() {
    boolEraser = !boolEraser;
    if(boolEraser) {
        eraserButton.classList.add("toggle-eraser");
        document.body.style.cursor = "url('./imgs/cursor.cur'), auto";
    }
    else if(!boolEraser) {
        eraserButton.classList.remove("toggle-eraser");
        document.body.style.cursor = "default";
    }
}

window.onload = () => {
    size = prompt("Please enter grid size", 16);
    if(size > 100) {
        size = 100;
    }
    if (size < 1) {
        size = 16;
    }
    fillGrid(Number(size));
}