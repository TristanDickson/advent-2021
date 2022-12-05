const fs = require("fs");
var path = require("path");

let inputPath = path.join(__dirname, "input.csv");
let data = fs.readFileSync(inputPath, "utf8");

const filterOnIndex = (input, i, isMode) => {
  // console.log(`list = ${input}`);
  let indexDigits = input.reduce((acc, curr) => acc + curr[i], "");
  // console.log(`index digits = ${indexDigits}`);
  let count = [...indexDigits].reduce((acc, curr) => {
    return curr == 1 ? acc + 1 : acc;
  }, 0);
  // console.log(`count = ${count}`);
  let mode = count >= indexDigits.length / 2 ? "1" : "0";
  // console.log(`mode = ${mode}`);
  let fList = input.filter((x, i) =>
    isMode ? indexDigits[i] == mode : indexDigits[i] != mode
  );
  // console.log(`filtered list = ${fList}\n`);
  return fList;
};

const calcRating = (input, isMode) => {
  let list = input.split("\n");
  let len = list.length;
  let i = 0;
  while (list.length > 1 && i < len) {
    list = filterOnIndex(list, i, isMode);
    i++;
  }
  return parseInt(list[0], 2);
};

let oxygen = calcRating(data, true);
let co2 = calcRating(data, false);

console.log(oxygen * co2);
