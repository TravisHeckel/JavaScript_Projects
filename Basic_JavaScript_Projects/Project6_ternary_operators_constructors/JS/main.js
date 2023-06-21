
//This is a function to ask for age and return a statement that represents true or false
function vote_Function() {
    var Age, Verify;
    Age = document.getElementById("Age").value;
    Verify = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Verify").innerHTML = Verify + " to vote.";
}

// This function verifies the vehicle owned by each person who confirms their age
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
   this.Vehicle_Color= Color;
}

//This is new customer instances created
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//This functions reads off the chosen instances information
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a "
    + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " 
    + Erik.Vehicle_Year;
}

//This function is a example of a class
class Soldier {
    constructor(Level, Armor, Primary_Weapon, Secondary_Weapon, Health_Points) {
        this.Soldier_Level = Level;
       this.Soldier_Armor = Armor;
        this.Soldier_Primary_Weapon = Primary_Weapon;
        this.Soldier_Secondary_Weapon = Secondary_Weapon;
        this.Soldier_Health_Points = Health_Points;
    }
}

var Gi_Joe = new Soldier(4, "Flak","Rifle", "Pistol", 500);

function Fighter() {
    document.getElementById("New_and_This").innerHTML = "G.I. Joe favorite weapon is " 
    + Gi_Joe.Soldier_Primary_Weapon;
}

 function Coin_Toss() {
    document.getElementById("nested_Function").innerHTML= tally();
        function tally() {
            var flip = (Math.random()* 11), call;
            call = (flip > 5) ? "You got heads":"you got tails";
            return call;
        }
 }