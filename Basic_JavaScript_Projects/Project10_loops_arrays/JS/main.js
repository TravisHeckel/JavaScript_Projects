
//This gives the length of a chosen word.
function find_Length() {
    var stuff = ["Guitar", "drums", "Piano", "bass", "Violin", "Trumpet", "Flute"];
    let length = stuff.length;
    document.getElementById("world").innerHTML = length;
}

//This calls for a while loop
function Call_Loop() {
    var i = 0
    var X = ["yellow", "green", "brown", "red", "black"];
    while ( X[i]) {
        document.getElementById("Loop").innerHTML= X;
        i++;
    }
}

//This calls for a for loop

function for_Loop(){
    var Instruments = ["Guitar", "drums", "Piano", "bass", "Violin", "Trumpet", "Flute"];
    var Content="";
    var Y;
    for (Y=0; Y < Instruments.length; Y++) {
        Content += INstruments[Y] + "<br>";
     }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//This is an array function and includes the first let.
function array_Function() {
   let video_Games = [];
    video_Games[0] = "Halo 3";
    video_Games[1] = "Call of Duty: MW2";
    video_Games[2] = "Gears of War 2";
    video_Games[3] = "Assassins Creed";
    video_Games[4] = "Minecraft";
    document.getElementById("games").innerHTML= "Game of the year goes too: " + video_Games[0];
}

//This is a function that contains a constant
function constant_Function() {
    const vehicle = {brand: "Hyundai ", type:"Sonata ", style: "Luxury ", year: "2008 "}
    vehicle.color = "green ";
    vehicle.price = "$5,000 ";
    document.getElementById("Constant").innerHTML = "I am selling a " + vehicle.year + vehicle.brand +
        vehicle.type + "that is " + vehicle.color + "for " + vehicle.price;
}

//This is using a return statement
let m = myFunction(4, 3); 
document.getElementById("demo").innerHTML = m;

function myFunction(a, b) {
  return a * b;   
}  

//This is used to create an object
let party = {
    who:'Chelsey Barns',
    why: '16th birthday',
    what: 'sleepover',
    when: 'this friday',
    where: 'Barns home',
    invitation: function () {
        return "You have been formally invited to " + party.who + " " + party.why + "! <br>" + 
        "This will be a " + party.what + " " + party.when + "  at the " + party.where; 
    }
};

document.getElementById("object_create").innerHTML = party.invitation();

//this includes a break statement
function finding_Game() {
    let Find = ["Halo 3","Call of Duty: MW2", "Gears of War 2", "Assassins Creed", "Minecraft"];
    for (let i = 0; i < 5; i++) {
        if (Find[i] === "Gears of War 2") break;
        document.getElementById("finding_Game").innerHTML = Find[i] + " is not the game I want. <br>";
    }
    document.getElementById("finding_Games").innerHTML = Find[2] + " is the one I am looking for!";
}

//this includes a continue statement
function finding_Game2() {
    let Find = ["Halo 3","Call of Duty: MW2", "Gears of War 2", "Assassins Creed", "Minecraft"];
    for (let i = 0; i < 5; i++) {
        if (Find[i] === "Gears of War 2") continue;
        document.getElementById("finding_Game2").innerHTML = Find[i] + " is not the game I want. <br>";
    }
    document.getElementById("finding_Games2").innerHTML = Find[2] + " is the one I forgot!";
}