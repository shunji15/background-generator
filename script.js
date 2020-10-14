var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "+ color1.value
	+ "," + color2.value + ")";

	css.textContent = body.style.background + ";";
}



function genRandom() {
	var rgb = 255;

	var col1 = "(" + Math.round(Math.random()*rgb) + "," 
	+ Math.round(Math.random()*rgb) + "," +
	Math.round(Math.random()*rgb) + ")";
	console.log(col1);

	var col2 = "(" + Math.round(Math.random()*rgb) + "," 
	+ Math.round(Math.random()*rgb) + "," +
	Math.round(Math.random()*rgb) + ")";
	console.log(col2);

	body.style.background = "linear-gradient(to right, rgb"+ col1 
	+ ", rgb" + col2 + ")";
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", genRandom);



