let homeCount=0;
let guestCount=0;

function newGame () {
    homeCount=0;
    guestCount=0;  
    document.getElementById("Leader").innerText = "LEADER"
    document.getElementById("home-score").innerText = homeCount 
    document.getElementById("guest-score").innerText = guestCount
}

function singlePoint(scorer) {
    if (scorer=="Home") {
        homeCount++
        document.getElementById("home-score").innerText = homeCount 
    } else {
        guestCount++
        document.getElementById("guest-score").innerText = guestCount 
    }
    (homeCount > guestCount) ? document.getElementById("Leader").innerText = "WINNING: HOME" : document.getElementById("Leader").innerText = "WINNING: GUEST"
}

function doublePoint(scorer) {
    if (scorer=="Home") {
        homeCount+= 2
        document.getElementById("home-score").innerText = homeCount 
    } else {
        guestCount += 2
        document.getElementById("guest-score").innerText = guestCount 
    }
    (homeCount > guestCount) ? document.getElementById("Leader").innerText = "WINNING: HOME" : document.getElementById("Leader").innerText = "WINNING: GUEST"
}

function triplePoint(scorer) {
    if (scorer=="Home") {
        homeCount+= 3
        document.getElementById("home-score").innerText = homeCount 
    } else {
        guestCount += 3
        document.getElementById("guest-score").innerText = guestCount 
    }
    (homeCount > guestCount) ? document.getElementById("Leader").innerText = "WINNING: HOME" : document.getElementById("Leader").innerText = "WINNING: GUEST"
}