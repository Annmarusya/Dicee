
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var source1 = "./images/"+ randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", source1)


var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var source2 = "./images/"+ randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", source2)

if (randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML = "<img src='./images/heart-svgrepo-com.svg'> Player 1 won"
}

if (randomNumber2>randomNumber1){
document.querySelector("h1").innerHTML = " Player 2 won<img src='./images/heart-svgrepo-com.svg'>"
}

if (randomNumber2===randomNumber1){
    document.querySelector("h1").innerHTML = "Draw!"
}