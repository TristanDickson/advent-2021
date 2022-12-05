const fs = require("fs");
var path = require("path");

let inputPath = path.join(__dirname, "input.csv");
let data = fs.readFileSync(inputPath, "utf8");
let list = data.split("\n\n");

const splitLine = (line) => {
  let lineArray = [];
  for (let i = 0; i < line.length; i += 3) {
    lineArray.push(parseInt(line.slice(i, i + 2)));
  }
  return lineArray;
};

const checkLine = (numbers, line) => {
  for (const element of line) {
    if (!numbers.includes(element)) {
      return false;
    }
  }
  return true;
};

const checkSubBoard = (numbers, board) => {
  for (const line of board) {
    if (checkLine(numbers, line)) {
      return true;
    }
  }
};

const checkBoard = (numbers, board) => {
  let tBoard = [...board[0]].map((col, i) => board.map((row) => row[i]));
  if (checkSubBoard(numbers, board)) return true;
  if (checkSubBoard(numbers, tBoard)) return true;
  return false;
};

const findWinner = (draws, boards) => {
  for (let i = 5; i < draws.length; i++) {
    _draws = draws.slice(0, i);
    for (const board of boards) {
      if (checkBoard(_draws, board)) return { winner: board, numbers: _draws };
    }
  }
};

const checkScore = (board, numbers) => {
  const unmarked = board
    .flat()
    .reduce((acc, curr) => (!numbers.includes(curr) ? acc + curr : acc), 0);

  return unmarked * numbers[numbers.length - 1];
};

let draws = list[0].split(",").map((x) => parseInt(x));
let boards = list.slice(1).map((x) => x.split("\n").map((y) => splitLine(y)));

while (boards.length > 1) {
  boards.splice(boards.indexOf(findWinner(draws, boards).winner), 1);
}

const { winner, numbers } = findWinner(draws, boards);
console.log(winner);
console.log(checkScore(winner, numbers));
