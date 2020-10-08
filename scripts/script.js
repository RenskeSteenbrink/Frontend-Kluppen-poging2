var navElement = document.querySelector("header nav");
var hamburgerMenuButton = document.querySelector("header nav a");
var burgerMenu = document.querySelector("header nav img");

function showMenu() {
	navElement.classList.toggle("showMenu");
	if (navElement.classList.contains("showMenu")) {
	burgerMenu.src = "images/ICONS/clear-24px.svg";
	} else {
	burgermenu.src = "images/ICONS/clear-24px.svg";
	}
}

hamburgerMenuButton.addEventListener("click", showMenu);