fighting = true 
youHit = Math.floor(Math.random()*2)
damageThisRound = Math.floor(Math.random()*5 + 1) 
totalDamage = 0 
opponent = 16 

while (fighting) {
    console.log("Die you scaly bastard!");
    totalDamage += damageThisRound
    
    if (youHit) {
        console.log("Got em!");
        
        if ( totalDamage >= opponent ) {
        console.log ("Oh crap you really killed it!? Dude it was just trying to tell you something!?")
        fighting = false
        
        } else {
            youHit = Math.floor(Math.random()*2)
        }
        
    } else {
        console.log("Crap he died...close though")
    }
    fighting = false 
}