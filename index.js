aStringVar = "Hey im a string";//This is a global variable, it can be accessed by all scripts
var anotherStringVar = "Me too!", count = 0;//This is a local variable, it can only be accessed in this script, vars are weird
//Basic function, just write it like this
function HelloWorld()
{
	document.getElementById("text_change").innerHTML = ++count;
}


function collectStar(player, star)
{
	//Remove the stars...Oh god katamari all over again
	star.kill();
}

function additionalCheck(player, star)
{
	//Weird it's not registering changes
	console.log("DAYUMMMMMM");
	return true;
}