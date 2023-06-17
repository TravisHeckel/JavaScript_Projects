//This function will activate when the button is clicked. Upon clicking the variable x is made.
// Also the parameter is saved as well.
//The .getElementById will grab the value listed within the Id "para"
// Then it will take var x and change the color to whatever the parameter is set too.
function changeColor(newColor) {
    var x = document.getElementById("para") 
    x.style.color = newColor;
}

// THis function will activate upon the paragraph element (with id = concatenate) being clicked
//This is cause myFunction to run creating a variable called sentence and assigning it 1st string.
//the next line with sentence += will also add the 2nd string on.
// the third line will take the element assigned the concatenate and assign it the variable sentence.
// innerhtml allows access to html content and turn it into a string which can be set or changed.
function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}