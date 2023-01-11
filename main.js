let firstName; 
let lastName;

function displayMessage() {
  
firstName = document.getElementById("first").value;
  
lastName = document.getElementById("last").value;

document.getElementById("message").innerHTML = "Congrats on your first experience on this website " + firstName + " " + lastName + "!";
}

