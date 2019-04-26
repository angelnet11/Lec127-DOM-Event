var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// ******************************
// create initial

// let InT1 = document.createElement("li");
// 	InT1.appendChild(document.createTextNode("Notebook"));
// 	ul.appendChild(InT1);
// 	let InT2 = document.createElement("li");
// 	InT2.appendChild(document.createTextNode("Jello"));
// 	ul.appendChild(InT2);
// 	let InT3 = document.createElement("li");
// 	InT3.appendChild(document.createTextNode("Spinach"));
// 	ul.appendChild(InT3);
// 	let InT4 = document.createElement("li");
// 	InT4.appendChild(document.createTextNode("Rice"));
// 	ul.appendChild(InT4);
// 	let InT5 = document.createElement("li");
// 	InT5.appendChild(document.createTextNode("Birthday Cake"));
// 	ul.appendChild(InT5);
// 	let InT6 = document.createElement("li");
// 	InT6.appendChild(document.createTextNode("Candles"));
// 	ul.appendChild(InT6);
// --> not working cuz need to add Event listener to every one
// ******************************

function inputLength() {
	return input.value.length;
}

function crossDoneItem() {
	this.classList.toggle("done");
}


let initial = ["Notebook", "Jello", "Spinach", "Rice", "Birthday Cake", "Candles"];

for (i=0; i < 6; i++) {
	let li = document.createElement("li");
	let but = document.createElement("button");
	but.classList.add("delBtn");
	// but.setAttribute('class', 'btn'); -> for class
	// but.value = 'Delete'; -> doesn't work for value
	but.innerHTML = 'Delete';
	li.appendChild(document.createTextNode(initial[i] + " "));
	li.appendChild(but);
	but.addEventListener("click", () => li.remove());
	// Remove this line. Can't use this.remove() cuz this here means 'but'. Can't use callback func here cuz li only defined in this for loop.
	li.addEventListener("click", crossDoneItem);
	// li.addEventListener("click", () => li.classList.toggle("done"));
	// Crossover done item.
	ul.appendChild(li);
}


function createListElement() {
		let li = document.createElement("li");
		let but = document.createElement("button");
		but.innerHTML = 'Delete';
		li.appendChild(document.createTextNode(input.value + " "));
		li.appendChild(but);
		but.addEventListener("click", () => li.remove());
		li.addEventListener("click", crossDoneItem);
		ul.appendChild(li);
		input.value = "";
}

function addListAfterClick() {
		if (inputLength() > 0) {
			createListElement();
		}
}


function addListAfterKeypress(event) {
		if (inputLength() > 0 && event.keyCode === 13) {
			createListElement();
		}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);







