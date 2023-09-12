let cryptic1 = "Denne setningen skal krypteres kun for å gjøre livet hardt for elevene i 2ITKB. Den skal krypteres ved hjelp av Cæsar-kryptering, og elevene må skrive en funksjon for å dekryptere. Den tar utgangspunkt i Unicode-tabellen."
let cryptic2 = "Du skal ikkje tru det skrivne og ikkje alt som er sagt.Dåren har ofte tala, og mang ein vismann har tagt. Ingen ting skal du godtaka utan rimeleg grunn, for ovtrui veks på nyo av sin rothogde runn. Verdi er myrk, og livet er fullt av lygn og rot. Tanken er blakrande ljoset for vår snåvande fot."

// Dere skal dekryptere de to viktige meldingene over. Husker dere en krypteringsmåte?
// Nå skal vi bruke UniCode, og funksjonene 
// enKode = enString.charCodeAt(i) og 
// enChar = String.fromCharCode()
let message = encrypt(cryptic1)
console.log(message)

function encrypt(message) {
    //encrypt

    let encrypted = "";
    let shift = 1;
    for (let i = 0; i < message.length; i++) {
        let unikoden = message.charCodeAt(i);
        let nyUnikode = unikoden + shift;
        let nyBokstav = String.fromCharCode(nyUnikode);
        encrypted += nyBokstav;
    }
    return encrypted;
}