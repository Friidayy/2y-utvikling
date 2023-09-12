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

function findMinst() {
    let lowest = tall[0]
        for (let i=0; i<tall.length; i++) {
            if (tall[i] < lowest) {
                lowest = tall[i]
            }
        }
        return lowest
}

init()
console.log(tall)
let lowest = findMinst()
console.log(lowest)