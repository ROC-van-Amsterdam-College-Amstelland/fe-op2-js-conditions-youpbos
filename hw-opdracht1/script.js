function bereken(){
    var getal1;
    var getal2;

    getal1 = document.getElementById("invoerveld1").value;
    getal2 = document.getElementById("invoerveld2").value;


    // alert(getal1);
    // alert(getal2);

    if(getal1 > getal2){
        var totaal = Number(getal1) + Number(getal2);
    }

    if(getal1 <= getal2){
        var totaal = Number(getal1) - Number(getal2);
    }

    if(getal1 == 10 && getal1 <= getal2){
        var totaal = Number(getal1) + Number(getal2);
    }

    if(getal2 == 5 && getal1 >= getal2){
        var totaal = Number(getal1) - Number(getal2);
    }



    alert(totaal);
}