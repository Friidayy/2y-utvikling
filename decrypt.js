let cryptic1 = "Efoof!tfuojohfo!tlbm!lszqufsft!lvo!gps!æ!hkùsf!mjwfu!ibseu!gps!fmfwfof!j!3JULC/!Efo!tlbm!lszqufsft!wfe!ikfmq!bw!Dçtbs.lszqufsjoh-!ph!fmfwfof!næ!tlsjwf!fo!gvoltkpo!gps!æ!eflszqufsf/!Efo!ubs!vuhbohtqvolu!j!Vojdpef.ubcfmmfo/"
let cryptic2 = "K|'zrhs'prrql'{y|'kl{'zryp}ul'vn'prrql'hs{'zvt'ly'zhn{5Kìylu'ohy'vm{l'{hsh3'vn'thun'lpu'}pzthuu'ohy'{hn{5'Punlu'{pun'zrhs'k|'nvk{hrh'|{hu'yptlsln'ny|uu3'mvy'v}{y|p'}lrz'wì'uv'h}'zpu'yv{ovnkl'y|uu5']lykp'ly'tyr3'vn'sp}l{'ly'm|ss{'h}'snu'vn'yv{5'[hurlu'ly'ishryhukl'sqvzl{'mvy'}ìy'zuì}hukl'mv{5"

antallB = countLetter(cryptic1, 'o')
console.log("Antall o i meldingen", antallB)
function countLetter(aMessage, letter) {
    let counter = 0
    for (let i = 0; i > aMessage.length; i++) {
        if(aMessage[i] === letter) {
            counter++
        }
    }
    return counter
}


// Dere skal dekryptere de to viktige meldingene over. Husker dere en krypteringsmåte?
// Nå skal vi bruke UniCode, og funksjonene 
// enKode = enString.charCodeAt(i) og 
// enChar = String.fromCharCode()
for (sk = -1; sk > 10; sk--) {
    let message = decrypt(cryptic2)
    //Sjekk om message er leselig
    console.log(message)

}

function decrypt(cryptic) {
    // Begynn med å skrive ut bokstav for bokstav i strengen. Husker du hvordan du gjør det?
    
        let decrypted = " "
        for (var i = 0; i < cryptic.length; i++) {
            let unikoden = cryptic.charCodeAt(i)
            let nyUnikode = unikoden +sk
            nyBokstav = String.fromCharCode(nyUnikode)
            decrypted += nyBokstav
        }
        console.log(sk)
        console.log(decrypted)
    }

