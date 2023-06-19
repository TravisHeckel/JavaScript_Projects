//This function is a superhuman entity saved as a object(or dictionary) and allows for specific
//characteristics to be used.
function my_Function() {
    var Superhuman = {
        gender: "Male",
        Age: 25,
        Ethnicity: "White",
        Power: "fly",
        Weakness: "women"
    };
    delete Superhuman.Weakness;
    document.getElementById("Dictionary").innerHTML = "His weakness is " + Superhuman.Weakness;
}