
const utils = require("../utils")

let input = utils.readFile(utils.makePath(__dirname, "input.txt")).split("\r\n")
const nbrOfInputs = input.length
const idLength = 26

two()
function two() {
  for (let i = 0; i < nbrOfInputs; i++) {
    const a = input[i]
    for (let j = i+1; j < nbrOfInputs; j++) {
      const b = input[j]
      let diffs = 0
      let testA = ""
      let testB = ""
      for (let k = 0; k < idLength; k++) {
        // console.log()
        if(a[k] !== b[k]) {
          diffs += 1
          testA += "_"+a[k].toUpperCase()+"_"
          testB += "_"+b[k].toUpperCase()+"_"
        } else {
          testA += a[k]
          testB += b[k]
        }
      }
      if(diffs < 2) {
        console.log("diffs", diffs)
        console.log("testA", testA)
        console.log("testB", testB)
      }
    }
  }
}
// one()
function one() {
  let twos = 0
  let threes = 0
  try {
    input.forEach(n => {
      let counts = {}
      n.split("").forEach(c => {
        if (!counts[c]) counts[c] = 1
        else counts[c] += 1
      })
      let hasFoundTwo = false
      let hasFoundThree = false
      Object.entries(counts).forEach(([_, value]) => {
        if (!hasFoundTwo && value === 2) {
          twos += 1
          hasFoundTwo = true
        } else if (!hasFoundThree && value === 3) {
          threes += 1
          // hasFoundThree = true
        }
      })
    })
  } catch (err) {
    console.log("Error:", err)
  }
  console.log("Twos:", twos)
  console.log("Threes:", threes)
  console.log("Checksum:", twos * threes)
}
