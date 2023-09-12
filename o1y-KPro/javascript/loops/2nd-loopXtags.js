let length = 3 + Math.floor(Math.random() *7)

let figurTall = ""
for(var i = 0; i <= length; i++) {
    if (i < length) {
        figurTall = figurTall + generateString(i) + '-'
    }
    else {
        figurTall += generateString(i)
    }
}

console.log(figurTall)
function generateString(n) {
    theString = ""
    for (var i = 0; i < n; i++) {
        theString+="#"
    }
    return theString
}
