//This function determines the type of value selected.
function my_Function() {
    var alpha = ("10" + 5);
   document.getElementById("white").innerHTML=(typeof alpha);
}

//This will show that this is a NaN
function test_One() {
    document.getElementById("test").innerHTML = 0/0;
}

//This will prove that the NaN is true.
function test_Two() {
    document.getElementById("test2").innerHTML = isNaN('happy birthday');
}

//This will prove that the NaN is false.
function test_Three() {
    document.getElementById("test3").innerHTML = isNaN('1020');
}

// this will make the element = to infinity.
function test_Four(){
    document.getElementById("test4").innerHTML = 1/0;
}

// this will make the element = to -infinity.
function test_Five(){
    document.getElementById("test5").innerHTML = -1.2E330;
}

// this will compare elements to see if it is greater than
function test_Six(){
    document.getElementById("test6").innerHTML = (10 > 6);
}

// this will compare elements to see if it is less than
function test_Seven(){
    document.getElementById("test7").innerHTML = (10 < 6);
}

// This will check to see if both elements are true
function test_Eight(){
    document.getElementById("test8").innerHTML = (10 > 8 && 6 < 8);
}

// This will check to see if both elements are true
function test_Nine(){
    document.getElementById("test9").innerHTML = (10 > 11 && 6 < 9);
}

// This will check to see if either element is true
function test_Ten(){
    document.getElementById("test10").innerHTML = (11 > 14 || 8 < 3);
}

// This will check to see if either element is true
function test_Eleven(){
    document.getElementById("test11").innerHTML = (11 > 14 || 8 < 13);
}

// This will check to see if the element is NOT equal to each other.
function test_Twelve(){
    document.getElementById("test12").innerHTML = (5!=7);
}

// This will check to see if the element is NOT equal to each other.
function test_Thirteen(){
    document.getElementById("test13").innerHTML = (7!=7);
}

// This will check to see if the element is  equal to each other.
function test_Fourteen(){
    document.getElementById("test14").innerHTML = (9==9);
}

// This will check to see if the element is  equal to each other.
function test_Fifteen(){
    document.getElementById("test15").innerHTML = (9==11);
}

// This will check to see if the element is greater than or equal to each other.
function test_Sixteen(){
    document.getElementById("test16").innerHTML = (9>=8);
}

// This will check to see if the element is greater than or equal to each other.
function test_Seventeen(){
    document.getElementById("test17").innerHTML = (9>=10);
}

// This will check to see if the element is less than or equal to each other.
function test_Eighteen(){
    document.getElementById("test18").innerHTML = (13<=19);
}

// This will check to see if the element is less than or equal to each other.
function test_Nineteen(){
    document.getElementById("test19").innerHTML = (23<=19);
}

// This will check to see if the element has the same type and value as eachother.
function test_Twenty(){
    X = 11;
    Y = 11;
    document.getElementById("test20").innerHTML = (X===Y);
}

// This will check to see if the element has the same type and value as eachother.
function test_TwentyOne(){
    X = "four";
    Y = 9;
    document.getElementById("test21").innerHTML = (X===Y);
}

// This will check to see if the element has the same type and value as eachother.
function test_TwentyTwo(){
    X = "one";
    Y = 1;
    document.getElementById("test22").innerHTML = (X===Y);
}

// This will check to see if the element has the same type and value as eachother.
function test_TwentyThree(){
    X = 3;
    Y = 7;
    document.getElementById("test23").innerHTML = (X===Y);
}

// This will check to see if the element has the same type and value as eachother.
function test_TwentyFour(){
    X = "six";
    Y = "two";
    document.getElementById("test24").innerHTML = (X===Y);
}

// This will check to see if the element is NOT more than the other.
function test_TwentyFive(){
    document.getElementById("test25").innerHTML = !(5 > 7);
}

// This will check to see if the element is NOT less than the other.
function test_TwentySix(){
    document.getElementById("test26").innerHTML = !(8 < 14);
}


console.log(2+2);