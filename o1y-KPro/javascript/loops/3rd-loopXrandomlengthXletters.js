let alfabet = "abcdefghijklmnopqrstuvwxyzæøå"

let length = 3 + Math.floor(Math.random() *8)

let randomWord= ""
for (let i = 0; i < length; i++) {
    bIdx = Math.floor(Math.random() *alfabet.length)
    let bokstaven = alfabet[bIdx]
    randomWord += bokstaven
}
console.log("", randomWord)
