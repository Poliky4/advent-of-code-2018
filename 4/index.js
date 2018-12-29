const utils = require("../utils");

let inputStrings = utils.readFile(utils.makePath(__dirname, "input.txt")).split("\r\n")

function Input(inputStr) {
  const [date, time, ...actions] = inputStr.replace(/[\]\[]/g, "").split(" ")

  const year = date.slice(0, 4)
  const month = date.slice(5, 7)
  const day = date.slice(8, 10)

  const hour = time.slice(0, 2)
  const minute = time.slice(3, 5)

  this.date = `${year}${month}${day}`
  this.time = `${hour}${minute}`
  this.action = actions.join(" ")
}

function sortInputsByTime(a, b) {
  return b.time - a.time
}
function sortDaysByDate(a, b) {
  return a.date - b.date
}
function getGuardIdFromDay(day) {
  const input = day
    .inputs
    .find(i => {
      return i.action.includes("#")
    })
  if(!input) return "not found"
  return input.action.match(/\d+/g)[0]
}

const inputs = inputStrings
  // .slice(0, 2)
  .map(inputStr => new Input(inputStr))

// two()
function two() { }
one()
function one() {
  const days = inputs.reduce((days, input) => {
    days[input.date]
      ? days[input.date].inputs.push(input)
      : days[input.date] = { inputs: [input] }

    return days
  }, {})

  let dates = Object.keys(days)
  dates = dates.map(date => ({ ...days[date] }))

  const guardIds = new Set()
  const guards = {}

  dates
    // .slice(0, 2)
    .forEach(date => {
      const guardId = getGuardIdFromDay(date)
      guardIds.add(guardId)
      guards[guardId]
        ? guards[guardId].days.push(date)
        : guards[guardId] = { days: [date] }
    })

  console.log("guardIds", guardIds.size)
  console.log("guards", Object.keys(guards).length)

}
