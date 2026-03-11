let searchButton = document.querySelector(".Search-icon");
let searchBox = document.querySelector(".Search-input");
let cartButton = document.querySelector(".nav-cart");
let signInSection = document.querySelector(".nav-singin");
let backToTop = document.querySelector(".foot-panel1");

searchButton.onclick = function () {

    let text = searchBox.value;

    if (text === "") {
        alert("Please type something to search.");
    } 
    else {
        alert("You searched for: " + text);
    }

};


cartButton.onclick = function () {
    alert("Your cart is currently empty.");
};


signInSection.onclick = function () {
    alert("Sign in feature will be added soon.");
};


backToTop.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};


let seeMoreButtons = document.querySelectorAll(".box p");

for (let i = 0; i < seeMoreButtons.length; i++) {

    seeMoreButtons[i].onclick = function () {
        alert("More products will be available soon.");
    };

}