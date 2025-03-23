var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6 )+ 1;

var randomImage = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";


document.querySelector(".img1").setAttribute("src",randomImage);
document.querySelector(".img2").setAttribute("src",randomImage2);

var winner;
if(randomNumber1>randomNumber2){
    winner = "🚩Player 1 Wins!";
}
else if(randomNumber1===randomNumber2) {
    winner = "Refresh Again its draw!";
}else {
    winner = "Player 2 Wins! 🚩";
}
document.querySelector("h1").textContent = winner;

