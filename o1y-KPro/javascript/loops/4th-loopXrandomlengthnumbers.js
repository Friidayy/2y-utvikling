let numbers = "1234567890"

let length = 3 + Math.floor(Math.random() * 11);

let randomNumber= ""
for (let i = 0; i < length; i++) {
    bIdx = Math.floor(Math.random() *numbers.length)
    let number = numbers[bIdx]
    randomNumber += number
}
console.log("", randomNumber)
