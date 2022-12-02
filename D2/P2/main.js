const fs = require("fs");
var path = require("path");

let inputPath = path.join(__dirname, "input.csv");
let data = fs.readFileSync(inputPath, "utf8");
let list = data.split("\n");

let h = 0;
let v = 0;

for (let i = 0; i < list.length; i++) {
  let instruction = list[i];
  let direction = instruction[0];
  let distance = parseInt(instruction[instruction.length - 1]);
  switch (direction) {
    case "f":
      h += distance;
      break;
    case "b":
      h -= distance;
      break;
    case "u":
      v -= distance;
      break;
    case "d":
      v += distance;
      break;

    default:
      break;
  }
}

console.log(`${v}, ${h}`);
console.log(v * h);
