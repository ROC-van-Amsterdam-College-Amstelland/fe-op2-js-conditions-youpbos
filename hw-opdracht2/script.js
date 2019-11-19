function zoekUit() {
    var aantal = document.getElementById("aantal").value;
    var duur =  document.getElementById("duur").value;
    var streaming = document.getElementById("streaming").value;

    var abonnement ="eenvoudig";
//als je met meer dan 2 personen kijkt en meer dan 3 uur per dag, dan is het beste abonnement familie
//pseudocode: als (aantal==3 en duur>3 dan abonnement ="familie")
if(aantal == 3 && duur > 3){
 abonnement = "familie";
 document.getElementById("resultaat").innerHTML = abonnement;
}
//als je met 2 of meer personen kijkt of al een abonnement hebt, dan is het beste abonnement uitgebreid
//pseudocode: aantal > 2 en streaming == ja dan ="uitgebreid"
if( aantal > 2 || streaming == true ){
    abonnement = "uitgebreid";
    document.getElementById("resultaat").innerHTML = abonnement;
}
//als je met 2 personen kijkt of meer dan 4 uur per dag dan is het abonnement standaard
//pseudocode: 
if( aantal ==2 || duur > 4){
    abonnement = "standaart";
    document.getElementById("resultaat").innerHTML = abonnement;
}

// als je met 1 persoon kijkt en 6 of meer uur per dag dan is het abonnement uitgebreid
//pseudocode: 
if( aantal ==1 && duur >= 6){
    abonnement = "uitgebreid";
    document.getElementById("resultaat").innerHTML = abonnement;
}

//toon het type abonnement op het scherm

}