var randomNumber = Math.random() // 0-0.9
if (randomNumber > 0.5){
    document.getElementById("myimage").src="image/head.png";
    document.querySelector("h3").innerHTML = "It's Head 😄";
}
else{
    document.getElementById("myimage").src="image/tail.png";
    document.querySelector("h3").innerHTML = "It's Tail 😄";
}