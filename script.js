const grid = document.querySelector('.grid');

function fillGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(var i = 0; i < size * size; i++) {
        const ele = document.createElement('div');
        ele.classList.add('grid-element');
        ele.textContent = i;
        ele.addEventListener('mouseover', changeNum);
        ele.addEventListener('mousedown', changeNum);
        grid.appendChild(ele);
    }
}

// click mousedown works. 
function changeNum(e) {
    if(e.type == 'mouseover' && e.type != 'mousedown') {
        return;
    }
    // e.target.textContent = e.target.textContent * 2;
}

window.onload = () => {
    fillGrid(4)
  }