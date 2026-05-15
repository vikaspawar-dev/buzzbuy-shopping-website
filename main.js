const list = document.querySelector(".navlist");
const hamburger = document.querySelector(".hamburger i");

hamburger.addEventListener("click", () => {

    list.classList.toggle("active");

    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-xmark");

});