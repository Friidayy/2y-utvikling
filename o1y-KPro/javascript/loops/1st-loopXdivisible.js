for (var i = 0; i < 20; i++) {
    if (i%3==0 && i%5==0) {
        console.log(i + " er delelig på 3 og 5")
    }
    else if (i%3 == 0) {
        console.log(i + " er delelig på 3")
    }
    else if (i%5 == 0) {
        console.log(i + " er delelig på 5")
    }
    else{
        console.log(i + " er ikke delelig på 3")
    }
}