var a = "Giant Pandas eat approximately 28 pounds of bamboo a day – that’s over 5 tons per year!"; 

var b = "Cats are not able to taste anything that is sweet.";

var c = "Snails take the longest naps with some lasting as long as three years.";

var d = "The average person spends two weeks of their life waiting at traffic lights.";

var e = "Kangaroos can not walk backwards.";

document.querySelector('#facta').addEventListener("click",showfacta);

function showfacta(){
	document.getElementById('facts').innerHTML = "<h3>" + a + "</h3>" + "<img src='images/panda.gif' alt='panda'>";
}

document.querySelector('#factb').addEventListener("click",showfactb);


function showfactb(){
	document.getElementById('facts').innerHTML = "<h3>" + b + "</h3>" + "<img src='images/cat.gif' alt='cat'>";
}

document.querySelector('#factc').addEventListener("click",showfactc);


function showfactc(){
	document.getElementById('facts').innerHTML = "<h3>" + c + "</h3>" + "<img src='images/snail.gif' alt='snail'>";
}

document.querySelector('#factd').addEventListener("click",showfactd);


function showfactd(){
	document.getElementById('facts').innerHTML = "<h3>" + d + "</h3>" + "<img src='images/light.gif' alt='light'>";
}

document.querySelector('#facte').addEventListener("click",showfacte);


function showfacte(){
	document.getElementById('facts').innerHTML = "<h3>" + e + "</h3>" + "<img src='images/kangaroo.gif' alt='kangaroo'>";;

}

document.querySelector('#lighttheme').addEventListener("click",showLight);

function showLight(){
	document.body.style.backgroundColor = "#BFDBF7";
}

document.querySelector('#darktheme').addEventListener("click",showDark);

function showDark(){
	document.body.style.backgroundColor = "#022B3A";
}

document.querySelector('#othertheme').addEventListener("click",showOther);

function showOther(){
	document.body.style.backgroundColor = "#9D44B5";
}