// JavaScript Document

var knoppen = document.QuerySelector('.whiteborderbutton');

button.AddEventlistener('click' , handleEvent , false);
function handleEvent() {
    console.log ('ik werk');
}

// dit is uit de opdracht van mediaqueries en zag er uit alsof ik hier ook wat mee kon
var burgerMenu = document.querySelector("header nav img");

burgerMenu.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}

// haha wat een drama, Renske aan de JAVA