const grid = document.querySelector(".grid--squares");
const btnGenerate = document.querySelector("#button--generate");
const userInputField = document.querySelector("#gridSizeNumber");

//Defines initial/default Grid-Size
let gridSize = 10;

//Based on passed argument Function calculates new grid size and generate the grid
const generateGrid = (gridSizeInput) => {
  grid.innerHTML = "";
  console.log(gridSizeInput);
  let gridHeight = 700 / gridSizeInput;
  let gridWidth = 700 / gridSizeInput;
  let amountOfSquares = gridSizeInput * gridSizeInput;
  console.log(amountOfSquares);
  for (let i = 1; i <= amountOfSquares; i++) {
    const square = document.createElement("div");
    // square.textContent = i;
    square.style.cssText = `height: ${gridHeight}px; width: ${gridWidth}px;`;
    square.classList.add("square");
    grid.appendChild(square);
  }
};

//Gets user input to calculate new grid size
const getNewGridSize = (event) => {
  const number = event.target.value;
  if (number > 100) {
    gridSize = 10;
  } else {
    gridSize = number;
  }
};

//Generates new grid based on user input
const generateNewGrid = (event) => {
  generateGrid(gridSize);
  event.preventDefault();
};

//Generates a random rgb color
const generateRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256) + 1}, ${Math.floor(Math.random() * 256) + 1}, ${Math.floor(Math.random() * 256) + 1})`;
};

//Colors square when hovered over it
const colorSquare = (event) => {
  if (event.target.classList.contains("square")) {
    event.target.style.backgroundColor = generateRandomColor();
  }
};

//Adds event listener to input, button, and uses event delegation to add listeners to all squares
userInputField.addEventListener("input", getNewGridSize);
btnGenerate.addEventListener("click", generateNewGrid);
grid.addEventListener("mouseover", colorSquare);
//Sets up the initial grid 10x10
generateGrid(gridSize);
