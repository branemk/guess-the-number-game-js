/* jshint browser: true */
/*jshint devel:true */ 
/*global $ */
var numberrandom = Math.floor((Math.random() * 9000) + 1000);
var div = document.getElementById("prikaz");
var obid = document.getElementById("obid");
var number = numberrandom.toString();
//number = "6561";
var numberarray = [];
var userarray = [];
var obidi = 1;
var pom = [];
var odpocetok = document.getElementById("odpocetok");
var b = document.getElementById("b");

b.onclick = function () {
    obid.innerHTML = "Обиди " + obidi;

    var usernumber = document.getElementById("guess").value;
    userarray.length = 0;
    numberarray.length = 0;
    pom.length = 0;
    var pogodeni = 0;
    var namesto = 0;

    //console.log(number);
    for (var i = 0; i < number.length; i++) {
        numberarray.push({
            number: number.charAt(i),
            namesto: false,
            vekeproveren: false
        });
    }
    for (var n = 0; n < usernumber.length; n++) {

        userarray.push({
            number: usernumber.charAt(n),
            color: "white",
            namesto: false,
            vekeproveren: false
        });


    }

    var namesto2 = presmetajnamesto();
    var pogodeni2 = presmetajpogodeni();


    var p = document.createElement("p");
    var text = "Погодени " + pogodeni2 + ",на место " + namesto2 + "        ";

    p.appendChild(document.createTextNode(text));

    for (var index = 0; index < userarray.length; index++) {
        var s = document.createElement("span");

        s.style.color = userarray[index].color;
        s.appendChild(document.createTextNode(userarray[index].number));
        p.appendChild(s);
    }

    div.appendChild(p);
    $(p).hide().show("slow");

    if (namesto == numberarray.length) {
        alert("Честитки. Го погодивте бројот " + number);
        b.style.display = 'none';
    }
    if (obidi === 10) {
        if (namesto < numberarray.length) {
            b.style.display = 'none';
            alert("Жалам, не успеавте да го погодите бројот. Бараниот број е " + number);

        }
    }
    obidi++;


    // funkciite

    function presmetajpogodeni() {
        for (var n = 0; n < userarray.length; n++) {

            for (var i = 0; i < numberarray.length; i++) {


                if (numberarray[i].number === userarray[n].number) {


                    //izbrisi si go brojot i stavi bukva na negovo mesto, ili so bi rekol fipe gotov si so toj broj ,ne go sporeduvaj veke 

                    //Ako ne e namesto, togas broi
                    if ((userarray[n].namesto === false) && (numberarray[i].namesto === false)) {
                        if ((userarray[n].vekeproveren === false) && (numberarray[i].vekeproveren === false)) {
                            pogodeni++;


                            numberarray[i].vekeproveren = true;


                            userarray[n].color = "#03A9F4";
                            userarray[n].vekeproveren = true;



                        }
                    }
                    // console.log(userarray[n].number);

                }
            }
        }
        return pogodeni;
    }

    function presmetajnamesto() {

        for (var n = 0; n < userarray.length; n++) {


            for (var i = 0; i < numberarray.length; i++) {
                //console.log(numberarray.indexOf(numberarray[i]));
                if (numberarray[i].number === userarray[n].number) {



                    if (n == i) {
                        namesto++;

                        userarray[i].color = "#4CAF50";
                        userarray[i].namesto = true;

                        numberarray[i].namesto = true;



                    }




                }
            }
        }
        return namesto;
    }
};

odpocetok.onclick = function () {
    numberrandom = Math.floor((Math.random() * 9000) + 1000);

    number = numberrandom.toString();

    obidi = 1;
    b.style.display = "inline";
    obid.innerHTML = "Обиди 1";
    div.innerHTML = "";
    document.getElementById("guess").value = "";
};
