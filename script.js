const grid = document.querySelector('.grid');


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function fillGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(var i = 0; i < size * size; i++) {
        const ele = document.createElement('div');
        ele.classList.add('grid-item');
        ele.textContent = i;
        ele.addEventListener('mouseover', changeColor);
        ele.addEventListener('mousedown', changeColor);
        grid.appendChild(ele);
    }
}

// click mousedown works. 
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
    e.target.style.backgroundColor = 'red';
}

window.onload = () => {
    fillGrid(4);
  }