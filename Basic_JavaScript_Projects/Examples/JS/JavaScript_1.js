//this will ask for input of a candy and output a message. (a switch)
function chosen_Candy() {
    var Candy = document.getElementById("Candy_Input").value;
    var candy_chosen;
    var choice = "You chose "
    var approval = ", that is a good choice!";
    switch (Candy) {
        case "Snickers":
            candy_chosen = choice + "Snickers" + approval;
        break;
        case "Twix":
            candy_chosen = choice + "Twix" + approval;
        break;
        case "Skittles":
            candy_chosen = choice + "Skittles" + approval;
        break;
        case "Starburst":
            candy_chosen = choice + "Starburst" + approval;
        break;
        case "Kit Kat":
            candy_chosen = choice + "Kit Kat" + approval;
        break;
        case "Reeses":
            candy_chosen = choice + "Reeses" + approval;
        break;
        default:
            candy_chosen = "please enter a viable candy choice from the above list.";
        }
    document.getElementById("Output").innerHTML = candy_chosen;
}

//This will change  specific index CLASS
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//this creates a box with a gradient

function Gradient() {
    var d = document.getElementById("myCanvas");
    var context = d.getContext("2d");

    //create gradient
    var grd = context.createLinearGradient(0, 0, 400, 0);
    grd.addColorStop(0, "green");
    grd.addColorStop(1,"white");

    //Fill with gradient
    context.fillStyle= grd;
    context.fillRect(0, 0, 800, 400);
}
