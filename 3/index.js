
const utils = require("../utils")

let inputStrings = utils.readFile(utils.makePath(__dirname, "input.txt")).split("\r\n")
const inputs = inputStrings.map(input => new Input(input))

function Input(inputString) {
  const [id, x, y, width, height] = inputString
    .split(/[ ]*[@:,x]+[ ]*/g)

  this.id = id
  this.x = parseInt(x)
  this.y = parseInt(y)
  this.width = parseInt(width)
  this.height = parseInt(height)
  this.collidedInputs = new Set()
}
Input.prototype.addCollision = function (otherInput) {
  console.log("this?", this === otherInput)
}

two()
function two() {

  const map = {}

  const testPos = `${inputs[0].x},${inputs[0].y}`
  map[testPos] = { inputs: new Set([inputs[0]]) }
  inputs.forEach(input => {
    const endX = input.x + input.width
    const endY = input.y + input.height
    for(let x = input.x; x < endX; x++) {
      for(let y = input.y; y < endY; y++) {
        let pos = `${x},${y}`
        if(!map[pos]) {
          map[pos] = { inputs: new Set([input]) }
        } else {
          
          map[pos].inputs.forEach(otherInput => {
            input.collidedInputs.add(otherInput)
            otherInput.collidedInputs.add(input)
          })
          map[pos].inputs.add(input)
        }
      }
    }
  })

  inputs.forEach(input => {
    if(input.collidedInputs.size === 0) {
      console.log("Found!", input.id.slice(1), inputStrings[input.id.slice(1)-1])
    }
  })

}
// one()
function one() {
  function convertInputToObject(inputString) {
    const [id, x, y, width, height] = inputString
      .split(/[ ]*[@:,x]+[ ]*/g)


    return {
      id,
      x: parseInt(x),
      y: parseInt(y),
      width: parseInt(width),
      height: parseInt(height)
    }
  }
  const map = {}
  let count = 0

  inputs = inputs.map(convertInputToObject)

  for (let i = 0; i < inputs.length; i++) {

    const input = inputs[i]

    const startX = input.x
    const endX = input.x + input.width
    const startY = input.y
    const endY = input.y + input.height

    for (let x = startX; x < endX; x++) {
      for (let y = startY; y < endY; y++) {
        let pos = `${x},${y}`
        if (!map[pos]) {
          map[pos] = 1
        } else {
          if (map[pos] === 1) {
            map[pos]++
            count++
          }
        }
      }
    }
  }
  console.log("count", count)
}

