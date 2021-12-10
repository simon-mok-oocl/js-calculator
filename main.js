var val1 = 0;
var val2 = 0;

function updateDisplay()
{
	document.getElementById("val1Display").innerHTML = val1;
	document.getElementById("val2Display").innerHTML = val2;
	document.getElementById("sumDisplay").innerHTML = "sum: " + (val1 + val2);
}

function dec(target)
{
	window[target]--;
	updateDisplay();
}

function inc(target)
{
	window[target]++;
	updateDisplay();
}

updateDisplay();
