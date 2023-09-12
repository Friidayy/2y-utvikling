let numbers = "01"

let length = 1 + Math.floor(Math.random() *8)

let randomNumber= ""
for (let i = 0; i < length; i++) {
    bIdx = Math.floor(Math.random() *numbers.length)
    let number = numbers[bIdx]
    randomNumber += number
}
console.log("", randomNumber)