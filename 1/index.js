
const utils = require("../utils");

let input = utils.readFile(utils.makePath(__dirname, "input.txt")).split("\r\n")

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
}
// one()
function one() {
  const result = input.reduce((sum, n) => {
    return parseInt(n) + sum
  }, 0)

  console.log(result)
}
