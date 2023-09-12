
const btnKnapp = document.getElementById("knapp")
const inpAlder = document.getElementById("inpAlder")

btnKnapp.addEventListener("click", sjekkAlder)

function sjekkAlder() {
    alder = inpAlder.value
    if(alder<18){
        document.getElementById('oi').innerText = 'du er ikke myndig'
    } else {
        document.getElementById('oi').innerText = 'du er myndig'
    }

}


