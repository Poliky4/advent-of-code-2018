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

module.exports = {
  readFile,
  makePath
}
