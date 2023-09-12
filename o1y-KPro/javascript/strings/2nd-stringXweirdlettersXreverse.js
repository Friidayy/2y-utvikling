let theSentence = "This is not a weird sentence";

let weirdSentence = weird(theSentence)
console.log(weirdSentence)

function weird(sentence){
    let consonants = "bcdfghjklmnpqrstvwxz";
    let weirdSentence = ""
    for (let i = 0; i < sentence.length; i++){
        let letter = sentence[i];
        if (consonants.indexOf(letter.toLowerCase())> -1){
            //letter er en konsonant
            weirdSentence += letter + 'o' + letter
        }
        else {
            weirdSentence += letter
        } 
    }
    return weirdSentence

}

let normalSentence = unWeird(weirdSentence)
console.log(normalSentence)

function unWeird(weirdSentence){
    let consonants = "bcdfghjklmnpqrstvwxz";
    let normalSentence = ""

    let i = 0;
    while (i < weirdSentence.length){
        let letter = weirdSentence[i];
        if (consonants.indexOf(letter.toLowerCase())> -1){
            normalSentence += letter
            i+=3
        }
        else{
            normalSentence += letter
            i++
        }
    }
    return normalSentence
}


