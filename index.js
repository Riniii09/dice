function randomGenerator() {
    var randomNumber1 = Math.floor((Math.random()*6) +1); 
    var randomNumber2 = Math.floor((Math.random()*6) +1);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player2 wins! 🚩";
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    } else {
        alert("Error in heading message");
    }

    if (randomNumber1 === 1) {
        var image = document.querySelector(".img1")
        image.src = "./images/dice1.png";
    } else if (randomNumber1 === 2) {
        var image = document.querySelector(".img1")
        image.src = "./images/dice2.png";
    } else if (randomNumber1 === 3) {
        var image = document.querySelector(".img1")
        image.src = "./images/dice3.png";
    } else if (randomNumber1 === 4) {
        var image = document.querySelector(".img1")
        image.src = "./images/dice4.png";
    } else if (randomNumber1 === 5) {
        var image = document.querySelector(".img1")
        image.src = "./images/dice5.png";
    } else if (randomNumber1 === 6) {
        var image = document.querySelector(".img1")
        image.src = "./images/dice6.png";
    } else {
        alert("Error in image 1");
    }

    if (randomNumber2 === 1) {
        var image = document.querySelector(".img2")
        image.src = "./images/dice1.png";
    } else if (randomNumber2 === 2) {
        var image = document.querySelector(".img2")
        image.src = "./images/dice2.png";
    } else if (randomNumber2 === 3) {
        var image = document.querySelector(".img2")
        image.src = "./images/dice3.png";
    } else if (randomNumber2 === 4) {
        var image = document.querySelector(".img2")
        image.src = "./images/dice4.png";
    } else if (randomNumber2 === 5) {
        var image = document.querySelector(".img2")
        image.src = "./images/dice5.png";
    } else if (randomNumber2 === 6) {
        var image = document.querySelector(".img2")
        image.src = "./images/dice6.png";
    } else {
        alert("Error in image 2");
    }
}