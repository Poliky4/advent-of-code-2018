const fs = require("fs");
const path = require("path");

function makePath(...paths){
  return path.join(...paths);
}

function readFile(filePath) {
  if(!fs.existsSync(filePath)) return "Error: File not found"
  const contents = fs.readFileSync(filePath, 'utf8').toString();
  return contents
}

function testEqual(name, actual, expected) {
  if(actual !== expected) console.error(`\nTest "${name}" failed, should be ${expected}, got ${actual}\n`)
}

module.exports = {
  readFile,
  makePath,
  testEqual
}
