const tall =[]

function init() {
for (let i=-10; i<=10; i++) {
    let etTall = Math.floor(Math.random()*100)
    if (Math.random() < 0.5) {
        etTall = etTall*(-1)
    }
    tall.push(etTall)
}
}

function findMax() {
    let highest = tall[0]
        for (let i=0; i<tall.length; i++) {
            if (tall[i] > highest) {
                highest = tall[i]
            }
        }
        return highest
}

init()
console.log(tall)
let highest = findMax()
console.log(highest)