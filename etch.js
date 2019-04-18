let currentGrid = 16;

createGrid(currentGrid);

function createGrid(numberofSquares) {
    let gridContainer = document.createElement('div');
    gridContainer.className = "grid-container";
    for (let i = 0; i < numberofSquares; i++) {
        for (let j = 0; j < numberofSquares; j++) {
            let gridItem = document.createElement('div');
            gridItem.className = "item";
            gridItem.style.height  = `${100/(numberofSquares)}%`; //hardcode
            gridItem.style.width = `${100/(numberofSquares)}%`;
            gridContainer.appendChild(gridItem);
        }
    }
    document.body.appendChild(gridContainer);
    changeColor(document.querySelectorAll('.item'));
}

function destroyGrid() {
    let gridContainer = document.querySelector('.grid-container');
    gridContainer.parentNode.removeChild(gridContainer);

}

function changeColor(itemList) {
    itemList.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            e.target.style.background = 'black';
        });
    })
}
let btn = document.querySelector('#reset');

btn.addEventListener('click', function(e){
    destroyGrid();
    createGrid(16);
    changeColor(document.querySelectorAll('.item'));
});

btn = document.querySelector('#new-canvas');

btn.addEventListener('click', function(e){
    const newSize = prompt("Size?");
    destroyGrid();
    currentGrid = newSize;
    createGrid(currentGrid);
    changeColor(document.querySelectorAll('.item'));
});

btn = document.querySelector('#random-colors');

btn.addEventListener('click', function(e){
    destroyGrid();
    createGrid(currentGrid);
    setRandomColor(document.querySelectorAll('.item'));
});

function getRandomColor() {
    //color: hsl(0, 0%, 100%);
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function setRandomColor(itemList) {

    itemList.forEach((item) => {
        let firstRun = true;
        let colorH = Math.floor(Math.random() * 361);
        let colorS = Math.floor(Math.random() * 101);
        let colorL = 50;
        item.addEventListener('mouseover', (e) => {
            if (firstRun) {
                let colorL = 50;
                e.target.style.background = `hsl(${colorH}, ${colorS}%, ${colorL}%)`;
            } else {
                colorL = colorL + -10;
                e.target.style.background = `hsl(${colorH}, ${colorS}%, ${colorL}%)`;
            }
            console.log(colorL);
            firstRun = false;
        });
    })
  }

