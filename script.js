const grid = document.querySelector('.grid');
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
let reset = document.getElementById("reset");
reset.onclick = () => resetGrid();

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

// click mousedown works. Needed boolean value for mouseDown event.
function changeNum(e) {
    if(e.type == 'mouseover' && false != mouseDown) {
        return;
    }
    e.target.textContent = e.target.textContent * 2;
}

// click mousedown works. 
function changeColor(e) {
    if(e.type == 'mouseover' && !mouseDown) {
        return;
    }
    e.target.style.backgroundColor = 'black';
}

function resetGrid() {
    console.log("INSIDE RESET");
    let size = prompt("Please enter grid size", 16);
    fillGrid(size);
}



window.onload = () => {
    let size = prompt("Please enter grid size", 16);
    fillGrid(Number(size));
  }