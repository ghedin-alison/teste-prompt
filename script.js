//variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var itemList = document.querySelectorAll("li");


// check for input length
function inputLength() {
	return input.value.length;
}

//function to create li element and append to ul
function createListElement() {
	var li = document.createElement("li");
	var spanLi = document.createElement("span");
	var btn = document.createElement("button");
	btn.addEventListener("click", delLi);
	btn.appendChild(document.createTextNode("Delete"));
	spanLi.appendChild(document.createTextNode(input.value));
	// spanTx.className = "done";
	// spanTx.classList.toggle("done");
	spanLi.addEventListener("click", toggle);
	li.appendChild(spanLi);
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

//function to run createElement() triggered by eventListener click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//function to run createElement() triggered by eventListener keypress #13
//keyCode === 13(significa que o enter foi pressionado)
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//function to toggle done class
function toggle() {
	this.classList.toggle("done");
}

//funtion to delete parent element
function delLi() {
	this.parentElement.remove();
}

// comentado pois nao é necessário se a lista iniciar vazia no html
//creates button element appends text node and then appends button to each default li element
//  for (var i = 0; i < itemList.length; i++) {
// 	var btn = document.createElement("button");
// 	btn.appendChild(document.createTextNode("Delete"));
// 	btn.addEventListener("click", delLi);
// 	itemList[i].appendChild(btn);
// }

// comentado pois nao é necessário se a lista iniciar vazia no html
//adds done class to created span elements 
// function addClass() {
// 	var spanFind = document.getElementsByTagName("span");
// 	for (var i = 0; i < itemList.length; i++) {
// 		spanFind[i].className = "done";
// 		spanFind[i].classList.toggle("done");
// 		spanFind[i].addEventListener("click", toggle);
// 	}
// }

// comentado pois nao é necessário se a lista iniciar vazia no html
// addClass();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);