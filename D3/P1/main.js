const fs = require("fs");
var path = require("path");

let inputPath = path.join(__dirname, "input.csv");
let data = fs.readFileSync(inputPath, "utf8");
let list = data.split("\n");
let tList = [...list[0]].map((col, i) => list.map((row) => row[i]));
let gamma = "";
let epsilon = "";

tList.forEach((line) => {
  let count = line.reduce((acc, curr) => {
    return curr == 1 ? acc + 1 : acc;
  }, 0);
  if (count > line.length / 2) {
    gamma += "1";
    epsilon += "0";
  } else {
    gamma += "0";
    epsilon += "1";
  }
});

let bGamma = parseInt(gamma, 2);
let bEpsilon = parseInt(epsilon, 2);

console.log(bGamma * bEpsilon);
