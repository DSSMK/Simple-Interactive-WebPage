function welcomeMessage() {
  alert("Welcome to JS Task!");
}
function changeParagraph() {
  document.getElementById("myParagraph").innerText = "Hello my interactive webpage!";
}
function turnOn() {
  document.getElementById("bulbImage").src = "images/bulb-on.png";
}
function turnOff() {
  document.getElementById("bulbImage").src = "images/bulb-off.png";
}
function hideParagraph() {
  document.getElementById("myParagraph").style.display = "none";
}
function showParagraph() {
  document.getElementById("myParagraph").style.display = "block";
}
function displayName() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("displayNameResult").innerText = `Hello, ${name}!`;
}
var age = 25;
let name = "Ali";
const country = "Egypt";
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("variablesOutput").innerHTML =
    "Age: " + age + "<br>Name: " + name + "<br>Country: " + country;
});
function addNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const sum = num1 + num2;
  document.getElementById("calcResult").innerHTML = "Result: " + sum;
}
