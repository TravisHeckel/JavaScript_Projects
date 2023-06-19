//These functions is called for with a requirement of a parameter called math. these are pre-set numbers.


//addition
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition;
}

//subtraction
function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
}

//multiply
function multiply_Function() {
    var multiply = 2 * 3;
    document.getElementById("Math3").innerHTML = "2 * 3 = " + multiply;
}

//divide
function divide_Function() {
    var divide = 4 / 2;
   document.getElementById("Math4").innerHTML = "4 / 2 = " + divide;
}

//remainder is given for a set of numbers
function remainder_Function() {
    var remainder= 25 % 6;
    document.getElementById("Math5").innerHTML = "25 % 6 = " + remainder;
}

//combination of operations.
function more_Math() {
    var simple_Math= (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math6").innerHTML = "1 plus 2, multiplied by 10, " 
    + "divided in half and then subtracting 5 equals " + simple_Math;
}

//this shares the opposite vlaue for a number
function negation_Operator() {
    var x= 10;
    document.getElementById("Math7").innerHTML = "The opposite of 10 is " + -x;
}

//this will incrementally increase and decrease the value

function increment() {
    var A = 4;
    var B = 6;
    A++;
    B--;
    document.getElementById("Math8").innerHTML = "We will increase A to " + A + " and decrease B to " + B;
}

//this is a random number generator


function Random_function() {
    document.getElementById("Math9").innerHTML = Math.random();
}