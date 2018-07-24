"use strict";

function toggleHamburger(x) {
    x.classList.toggle("change");
    myFunction();
}

function myFunction() {
    let x = document.getElementById("top-nav");
    if (x.className === "main-nav") {
        x.className += " responsive";
    } else {
        x.className = "main-nav";
    }
}
