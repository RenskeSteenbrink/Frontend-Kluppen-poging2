// JavaScript Document

var navElement = document.querySelector("header nav"); // navigatie element
var hamburgerMenuButton = document.querySelector("header nav a"); // a tag voor hamburger menu
var burgerMenu = document.querySelector("header nav img"); // hamburger menu icon

hamburgerMenuButton.addEventListener("click", toggleMenu); // als er op hamburgerMenu icon wordt geklikt, voer 'toggleMenu' uit

function toggleMenu() {​​​​
   navElement.classList.toggle("showMenu");
   if (navElement.classList.contains("showMenu")) {​​​​ // check of showMenu aan staat bij navigatie element
       burgerMenu.src = "images/ICONS/clear-24px.svg"; // als showMenu wel aan staat dan moet hamburgerMenu icon kruisje zijn
   }​​​​ else {​​​​
       burgerMenu.src = "images/ICONS/menu-24px.svg"; // als showMenu niet aan staat dan moet hamburgerMenu icon hamburger zijn
   }​​​​
}​​​​