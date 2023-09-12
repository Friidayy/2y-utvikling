let by1 = "Llanfairpwllgwyngyllgogerychwyrndrobwyllllantysiliogogogoch"
let by2 = "Taumatawhakatangihangakoauauotamateapokaiwhenuakitanatahu"

let teller1 = tellBokstaver(by1, 'a')
let teller2 = tellBokstaver(by2, 'a')
console.log(by1 + ":" + teller1)
console.log(by2 + ":" + teller2)

function tellBokstaver(ordet, bokstaven){
    let teller = 0
    for (let i = 0; i < ordet.length; i++) {
        if (ordet[i] === bokstaven) {
            teller++
        }
    }
    return teller
}

if (teller1 > teller2) {
    console.log("by1 har flest a'er" + teller1)
}
else if (teller2 > teller1) {
    console.log("by2 har flest a'er" + teller2)
}
else {
    console.log("Likt antall av " + bokstaven)

}