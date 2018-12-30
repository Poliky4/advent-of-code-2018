
const { readFile, makePath, testEqual } = require("../utils");

let input = readFile(makePath(__dirname, "input.txt")).split("\r\n")

// console.log(two(input))
// testTwo()
function testTwo() {
  testEqual("gives correct answer", two(input), 563)
}
function two(input) {
  const uniqueFrequencies = new Set()
  let freq = 0
  let match = null
  while (!match) {
    input.forEach(n => {
      if (!!match) return

      freq += parseInt(n)

      if (uniqueFrequencies.has(freq))
        match = freq
      else
        uniqueFrequencies.add(freq)
    })
  }

  return match
}

// console.log(one(input))
// testOne()
function testOne() {
  testEqual("gives correct answer", one(input), 561)
}
function one(input = []) {
  const result = input.reduce(function sumInputs(sum, input) {
    return parseInt(input) + sum
  }, 0)

  return result
}

