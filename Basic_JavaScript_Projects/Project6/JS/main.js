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