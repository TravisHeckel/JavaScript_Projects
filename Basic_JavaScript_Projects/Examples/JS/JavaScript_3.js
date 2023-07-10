//this will operate as a function that requires a text input.
function displayType(character) {
    var characterType= character.getAttribute("data-character-type");
    alert(characterType + "Is in the " + character.innerHTML + " universe!");
}

document.body.classList.add('fade-out');

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
  });