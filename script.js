var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var button = document.getElementById("btn1");

function setGradient(){
    body.style.background = "Linear-gradient(to right, "
    + color1.value
    +", "
    +color2.value
    +")";

    css.textContent = body.style.background + ";";
}

setGradient();

function ColorRandomizer1(){
    Math.random().toString(16).slice(2,8);
    var randomizer1 = "#" + Math.random().toString(16).slice(2,8);
    color1.value = randomizer1;
    return randomizer1
}



function ColorRandomizer2(){
    Math.random().toString(16).slice(2,8);
    var randomizer2 = "#" + Math.random().toString(16).slice(2,8);
    color2.value = randomizer2;
    return randomizer2
}



function colorRandomize(){

    body.style.background = "Linear-gradient(to right, "
    + ColorRandomizer1()
    +", "
    + ColorRandomizer2()
    +")";



    css.textContent = body.style.background + ";";
}

button.addEventListener("click", colorRandomize);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
