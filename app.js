const puzzleContainer = document.querySelector(".grid-puzzle-container");
const newGameBtn = document.querySelector('.new-puzle')
let puzzle = [];
let sizeFirst = 3;
let flag = 0;
generatorPuzzle();
radomizePuzzle()
renderPuzzle();

newGameBtn.addEventListener('click',radomizePuzzle)

function getRow(pos) {
  return Math.ceil(pos / 3);
}
function getCol(pos) {
  const col = pos % 3;
  if (col === 0) {
    return sizeFirst;
  } else {
    return col;
  }
}
function generatorPuzzle() {
  for (let i = 1; i <= sizeFirst * sizeFirst; i++) {
    puzzle.push({
      value: i,
      position: i,
      x: (getCol(i) - 1) * 200,
      y: (getRow(i) - 1) * 200,
      disabled:false,
    });
  }
  console.log(puzzle);
}

function renderPuzzle() {

  puzzleContainer.innerHTML = "";
  puzzle.forEach((puzzleItem) => {
    if(puzzleItem.value !== 9){
      puzzleContainer.innerHTML += `
      <div class="ceil-puzzle" style="left: ${puzzleItem.x}px; top: ${puzzleItem.y}px">
      ${puzzleItem.value}
      </div>
`;
    }


  });

}


function radomizePuzzle(){
    if(flag ==  0){
        renderPuzzle()
    }
    const randomValues = getRandomValues()
    console.log(randomValues)
    i = 0;
    puzzle.map((puzzleItem) => {
        
        puzzleItem.value = randomValues[i]
        i++
    })

    const puzzleWithValueOfNine = puzzle.find(item => item.value === sizeFirst * sizeFirst )
    puzzleWithValueOfNine.disabled = true
}

function getRandomValues(){
    const values = [];
    for(let i =1; i<= sizeFirst * sizeFirst; i++){
        values.push(i)
    }
    const randomValues = values.sort(() => Math.random() - 0.5)
    return randomValues
}


function getEmptyPuzzle(){
  return puzzle.find((e)=> e.disabled === true)
}
function getPositionPuzzle(pos){
  return puzzle.find((i)=> i.position === pos)
}

function getRightPuzzle(){
  const emptyPuzzle = getEmptyPuzzle();

  getEmptyPuzzle()
  getPositionPuzzle(emptyPuzzle.position + 1)

}


console.log(getRightPuzzle())