"use strict";
(function(){
    const buttonEl = document.querySelector(".menu__icon");
    const demoEl = document.querySelector(".header__menu");
    buttonEl.addEventListener("click", function() {
    demoEl.classList.toggle("header__menu--close");
    });
})();

(function(){
    const modalEl = document.querySelector('.modal');
    let openElList = document.querySelectorAll('.open');
    const closeEl = document.querySelector('.close');

    openElList.forEach(openEl => {
        openEl.addEventListener('click', (e) => {
            e.preventDefault();
            modalEl.showModal();
        });
    })
    
    closeEl.addEventListener('click', () => {
        modalEl.close();
    });
})();

(function(){
    let isInValid = false;

    const emailInput = document.querySelector("#email");
    const confirmEmailInput = document.querySelector("#confirm-email");

    const emailError = document.querySelector(".email__error");
    const confirmEmailError = document.querySelector(".confirm-email__error");
    
    console.log(emailInput);
    console.log(confirmEmailInput);
    console.log(emailError);
    console.log(confirmEmailError);

    const checkEmail = function(){
        if (!emailInput.value) {
            emailError.classList.add("email__error--invalid");
            emailInput.classList.add("invalid");
            isInValid = true;
        } else {
            emailError.innerHTML = "";
            emailInput.classList.remove("invalid");
            emailError.classList.remove("email__error--invalid");
        }

        if (!confirmEmailInput.value) {
            confirmEmailError.classList.add("confirm-email__error--invalid");
            confirmEmailInput.classList.add("invalid");
            isInValid = true;
        } 
        else if (confirmEmailInput.value !== emailInput.value) {
            confirmEmailError.innerHTML = "this field must match the email";
            confirmEmailError.classList.add("confirm-email__error--invalid");
            confirmEmailInput.classList.add("invalid");
            isInValid = true;
        }
        else {
            confirmEmailError.innerHTML = "";
            confirmEmailInput.classList.remove("invalid");
            confirmEmailError.classList.remove("confirm-email__error--invalid");
        }
    };


    emailInput.addEventListener("focus", checkEmail);
    emailInput.addEventListener("change", checkEmail);

    confirmEmailInput.addEventListener("focus", checkEmail);
    confirmEmailInput.addEventListener("change", checkEmail);

    const form = document.querySelector("#form");
    form.addEventListener("submit", function (e) {
        isInValid = false;
        checkEmail();
        checkEmail();
        if (isInValid) {
            e.preventDefault();
        }
    });


})();