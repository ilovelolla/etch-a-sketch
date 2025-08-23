const container = document.querySelector(".container")
const ranColor = document.querySelector("#ranColor")
const pink = document.querySelector("#pink")
const blue = document.querySelector("#blue")
const userValue = document.querySelector("#userValue")
const submit = document.querySelector("#submitBtn")
const mode = document.querySelector("#mode")
const resetBtn = document.querySelector("#resetBtn")
const eraseBtn = document.querySelector("#eraseBtn")
let numItems = 16


//AddEventListener 
submit.addEventListener("click", inputValue);
resetBtn.addEventListener("click", clearGrid)
eraseBtn.addEventListener("click", erasecells)
ranColor.addEventListener("click", rainbowColor)
pink.addEventListener("click", pinkColor)
blue.addEventListener("click", blueColor)

//Input Grid Value

function inputValue() {
    numItems = parseInt(document.querySelector("#userValue").value);
    
    if(numItems > 100) {
        document.querySelector(".gridtext").textContent = `Grid size should be 100 or less`
    } else{
        createGrid();
    }
}

// Create the grid
function createGrid() {
    container.replaceChildren();
    for(let i = 0; i < (numItems * numItems); i++) {
    const square = document.createElement("div");
    square.classList.add('cells');
    container.appendChild(square); 
   }
document.documentElement.style.setProperty('--number', numItems);
};
createGrid();

//Colors

function rainbowColor() {
   const gridcells = document.querySelectorAll(".cells")
   gridcells.forEach(cell => {
    cell.addEventListener ("mouseover",randomColor)}
  )};

function pinkColor() {
  const gridcell = document.querySelectorAll(".cells")
  gridcell.forEach( element => {
    element.addEventListener("mouseover",() =>{
      element.style.backgroundColor = "#FFD1DC"
    })
  })
};

function blueColor() {
  const grids = document.querySelectorAll(".cells")
  grids.forEach( cells => {
    cells.addEventListener("mouseover",() =>{
      cells.style.backgroundColor = "#B0C4DE"
    })
  })
};


//RandomColor - ok

function random (number) {
  return Math.floor(Math.random() * (number +1));
}
function randomColor (e) {
    const rndCol= 'rgb(' + random(255) + ',' + random(255) +',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
}

// Erase
function erasecells() {
  const erasecell = document.querySelectorAll(".cells")
  erasecell.forEach(ecell => {
    ecell.addEventListener("mouseover",() =>{
      ecell.style.backgroundColor = ""
    })
  })
}


//Clear Grid - ok
function clearGrid () {
  const cleargrid = document.querySelectorAll(".cells")
  cleargrid.forEach(grid => {
    grid.style.backgroundColor = ""
  })
}