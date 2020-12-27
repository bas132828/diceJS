var randomNumber = Math.floor((Math.random() * 6) + 1);
var randomImage = "images/dice" + randomNumber + ".png";
var imageRandom = document.querySelectorAll("img")[0];
imageRandom.setAttribute("src", randomImage); //for the first image


var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var imageRandom1 = document.querySelectorAll("img")[1];
imageRandom1.setAttribute("src", randomImage1); //for the first image


if (randomNumber > randomNumber1) {
  document.querySelector("h1").innerHTML = "🇨🇦 Player 1 wins!";
} else if (randomNumber < randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🇨🇦";
} else {
  document.querySelector("h1").innerHTML = "🇨🇦Draw!🇨🇦";
}
