
const { readFile, makePath, testEqual } = require("../utils");

let input = readFile(makePath(__dirname, "input.txt")).split("\r\n")

two()
function two() {
  const freqs = {}
  let freq = 0
  let rounds = 0
  const startTime = Date.now()
  try {
    while (true) {
      console.log('rounds', ++rounds)
      input.forEach(n => {
        freq += parseInt(n)
        freqs[freq] = freqs[freq] ? freqs[freq] + 1 : 1
        if (freqs[freq] === 2)
          throw freq
      })
    }
  } catch (res) {
    const endTime = Date.now()
    console.log("result", res, endTime-startTime + "ms")
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

