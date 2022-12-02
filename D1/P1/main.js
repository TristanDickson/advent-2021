const fs = require("fs");
var path = require("path");

let inputPath = path.join(__dirname, "input.csv");
let data = fs.readFileSync(inputPath, "utf8");
let list = data.split("\n");
let increased = 0;
for (let i = 1; i < list.length; i++) {
  const element = list[i];
  const lastElement = list[i - 1];
  if (element > lastElement) increased++;
  if (i < 10) {
    console.log(lastElement);
    console.log(element);
    console.log(element > lastElement);
    console.log();
  }
}
console.log(increased);
