let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
let arr15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let win = document.querySelector(".win");
let newArr15 = arr15.sort(() => Math.random() - 0.5);
let coun = document.querySelector(".count");
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  // добавить проверку согласны ли вы начать новую игру
  newArr15 = arr15.sort(() => Math.random() - 0.5);
  for (let i = 0; i <= 15; i++) {
    drawTag(i, newArr15[i]);
  }
} )
function drawSquare(x, y, value) {
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, 100, 100);
  if (value === 0) {
    ctx.fillStyle = "white";
  } else {
    ctx.fillStyle = "rgb(148, 106, 52)";
  }
  ctx.fillRect(x + 5, y + 5, 90, 90);
  ctx.font = "60px Arial";
  ctx.fillStyle = "white";
  if (value < 10) {
    ctx.fillText(value, x + 35, y + 70);
  } else {
    ctx.fillText(value, x + 15, y + 70);
  }
}

function drawTag(pos, value) {
  switch (pos) {
    case 0:
      drawSquare(0, 0, value);
      break;
    case 1:
      drawSquare(100, 0, value);
      break;
    case 2:
      drawSquare(200, 0, value);
      break;
    case 3:
      drawSquare(300, 0, value);
      break;
    case 4:
      drawSquare(0, 100, value);
      break;
    case 5:
      drawSquare(100, 100, value);
      break;
    case 6:
      drawSquare(200, 100, value);
      break;
    case 7:
      drawSquare(300, 100, value);
      break;
    case 8:
      drawSquare(0, 200, value);
      break;
    case 9:
      drawSquare(100, 200, value);
      break;
    case 10:
      drawSquare(200, 200, value);
      break;
    case 11:
      drawSquare(300, 200, value);
      break;
    case 12:
      drawSquare(0, 300, value);
      break;
    case 13:
      drawSquare(100, 300, value);
      break;
    case 14:
      drawSquare(200, 300, value);
      break;
    case 15:
      drawSquare(300, 300, value);
      break;
  }
}

for (let i = 0; i <= 15; i++) {
  drawTag(i, newArr15[i]);
}
function checkPlace(eventX) {
  if (eventX < 110) {
    return 1;
  }
  if (eventX < 210) {
    return 2;
  }
  if (eventX < 310) {
    return 3;
  }
  if (eventX < 410) {
    return 4;
  }
}

canvas.addEventListener("click", function (event) {
  console.log(event);
  if (event.clientY < 110) {
    let place = checkPlace(event.clientX);
    var clickPos = 0;
    switch (place) {
      case 1:
        clickPos = 0;
        break;
      case 2:
        clickPos = 1;
        break;
      case 3:
        clickPos = 2;
        break;
      case 4:
        clickPos = 3;
        break;
    }
  }
  if (event.clientY > 110 && event.clientY < 210) {
    let place = checkPlace(event.clientX);
    switch (place) {
      case 1:
        clickPos = 4;
        break;
      case 2:
        clickPos = 5;
        break;
      case 3:
        clickPos = 6;
        break;
      case 4:
        clickPos = 7;
        break;
    }
  }
  if (event.clientY > 210 && event.clientY < 310) {
    let place = checkPlace(event.clientX);
    switch (place) {
      case 1:
        clickPos = 8;
        break;
      case 2:
        clickPos = 9;
        break;
      case 3:
        clickPos = 10;
        break;
      case 4:
        clickPos = 11;
        break;
    }
  }
  if (event.clientY > 310 && event.clientY < 410) {
    let place = checkPlace(event.clientX);
    switch (place) {
      case 1:
        clickPos = 12;
        break;
      case 2:
        clickPos = 13;
        break;
      case 3:
        clickPos = 14;
        break;
      case 4:
        clickPos = 15;
        break;
    }
  }

  if (newArr15[clickPos - 4] === 0) {
    newArr15[clickPos - 4] = newArr15[clickPos];
    newArr15[clickPos] = 0;
    for (let i = 0; i <= 15; i++) {
      drawTag(i, newArr15[i]);
    }
    test();
  }
  if (newArr15[clickPos + 4] === 0) {
    newArr15[clickPos + 4] = newArr15[clickPos];
    newArr15[clickPos] = 0;
    for (let i = 0; i <= 15; i++) {
      drawTag(i, newArr15[i]);
    }
    test();
  }
  if (
    newArr15[clickPos + 1] === 0 &&
    clickPos !== 3 &&
    clickPos !== 7 &&
    clickPos !== 11
  ) {
    newArr15[clickPos + 1] = newArr15[clickPos];
    newArr15[clickPos] = 0;
    for (let i = 0; i <= 15; i++) {
      drawTag(i, newArr15[i]);
    }
    test();
  }
  if (
    newArr15[clickPos - 1] === 0 &&
    clickPos !== 4 &&
    clickPos !== 8 &&
    clickPos !== 12
  ) {
    newArr15[clickPos - 1] = newArr15[clickPos];
    newArr15[clickPos] = 0;
    for (let i = 0; i <= 15; i++) {
      drawTag(i, newArr15[i]);
    }
    test();
  }
});

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

let count = 0;
coun.innerHTML = `count 0`;
function test() {
  count++;

  if (
    arr15[0] === testArr[0] &&
    arr15[1] === testArr[1] &&
    arr15[2] === testArr[2] &&
    arr15[3] === testArr[3] &&
    arr15[4] === testArr[4] &&
    arr15[5] === testArr[5] &&
    arr15[6] === testArr[6] &&
    arr15[7] === testArr[7] &&
    arr15[8] === testArr[8] &&
    arr15[9] === testArr[9] &&
    arr15[10] === testArr[10] &&
    arr15[11] === testArr[11] &&
    arr15[12] === testArr[12] &&
    arr15[13] === testArr[13] &&
    arr15[14] === testArr[14] &&
    arr15[15] === testArr[15]
  ) {
    win.style.display = "block";
  } else {
    win.style.display = "none";
  }

  coun.innerHTML = `count ${count}`;
}


function newGame(){
  for (let i = 0; i <= 15; i++) {
    drawTag(i, newArr15[i]);
  }
}