function validateForm() {
    let x = document.getElementById("fname", "lname").value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}