//assignment *

//This function connects all the variable values together into one sentence.
function connect_together() {
    var one = "I do ";
    var two = "not know ";
    var three = "my first ";
    var four = "name.";
    var complete = one.concat(two,three,four);
    document.getElementById("connect").innerHTML = complete;
}

//This function will copy a specific set of characters designated by the slice method
function slice() {
    var sentence = "I am a boss at this work";
    var section = sentence.slice(7,11);
    document.getElementById("slice").innerHTML =  section;
}

//This function capitalizes all the letters in the string

var statement = "It was a rainy day today and I stayed inside and drank hot cocoa.";

function capital() {
  var capitalize = statement.toUpperCase();
  document.getElementById("capital").innerHTML = statement;
  document.getElementById("capital").innerHTML = "With the upper case method I can make the sentence look like this " + capitalize;
}

//This function searches for specific strings and shows its position
function find() {
    var seek = statement.search("drank")
    document.getElementById("find").innerHTML = "with the search method i can find the position of any character in a string. for example drank starts at position: " + seek;
}

//This function searches for specific strings and shows its position
function change() {
    var number =955;
    document.getElementById("change").innerHTML = "This method turns a number like 955 into: " + number.toString();
}

//This function gives the exact number up to the requested decimal point
function precision() {
    var decimal =186548.456862108;
    document.getElementById("precision").innerHTML = "This method will print the exact number up to a chosen decimal: " + decimal.toPrecision(12);
}

//This function will give the exact number up to the requested decimal point AND round off
function fixed_Number() {
    var number =186548.456862108;
    document.getElementById("fixed_Number").innerHTML = "This method will print to a specific decimal and round the rest: " + number.toFixed(3);
}

//This function will change an object string to just a string (its a standard method automatically used in javascript)
function value_of() {
    var text = "This is it!";
    var result = text.valueOf();
    document.getElementById("value_of").innerHTML= result;
}