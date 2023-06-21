//this function has our local variable.
function add () {
    var b = 5;
    b+=1;
    document.getElementById("add").innerHTML = b;
    return b;
}

//this is my global variable set to since we cannot pull var b. 
var a = add();

//this function is used to creat our error.
function sub() {
    a -= 100;
    document.getElementById("sub").innerHTML = a;
}

//-------------This system has been corrected for all errors.----------------------




//here is the function for greeting if it is before 4pm
function get_Date() {
    if (new Date().getHours() < 16) {
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

//here is a function for flipping a coin --for fun!
var C = document.getElementById("Coin").value;

function flip() {
    var X = (Math.random() * 11); 
    var Y;
    if (X > 5 && (C = "heads") ) {
        Y ="The coin landed heads up, you where right!";
    } 
    else if (X < 5 && (C = "tails") ) {
        Y ="The coin landed tails up, you where right!";
    }
    else if (X < 5 && (C = "heads") ) {
        Y ="The coin landed tails up, you lost this round!";
    }
    else if (X > 5 && (C = "tails") ) {
        Y ="The coin landed tails up, you lost this round!";
    } 
    else {
        "Apologies, please input an actual option and try again."
    }
    document.getElementById("Heads_Tails").innerHTML= Y;
}

//This function will work thru what time of day it is and input out the correct message.
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply="It is afternoon.";
    }
    else {
        Reply= "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}