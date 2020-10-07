// JavaScript Document

// haha wat een drama, Renske aan de JAVA

var burgerMenu = document.querySelector("header nav");

burgerMenu.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("noShow");
}