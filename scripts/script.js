
var navElement = document.querySelector("header nav");
var hamburgerMenuButton = document.querySelector("header nav a");
var burgerMenu = document.querySelector("header nav img");

function showMenu(event) {
	event.preventDefault(); //zorgt dat die link niet actief is maar dat de code daaronder het afhandeld
	navElement.classList.toggle("showMenu");
		if (navElement.classList.contains("showMenu")) {
		burgerMenu.src = "images/ICONS/clear-24px.svg";
		} else {
		burgerMenu.src = "images/ICONS/menu-24px.svg";
		}
}

hamburgerMenuButton.addEventListener("click", showMenu);

