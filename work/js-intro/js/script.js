"use strict";
(function(){
    const buttonEl = document.querySelector(".Header__menu__button");
    const demoEl = document.querySelector(".Header__menu__wrap");
    buttonEl.addEventListener("click", function() {
    demoEl.classList.toggle("Header__menu__open");
    });
})();