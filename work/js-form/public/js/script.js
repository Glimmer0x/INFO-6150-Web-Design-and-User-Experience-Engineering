"user restrict";
(function(){
    let isInValid = false;
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const confirmEmailInput = document.querySelector("#confirm-email");

    const nameError = document.querySelector(".field__name__error");
    const emailError = document.querySelector(".field__email__error");
    const confirmEmailError = document.querySelector(".field__confirm-email__error");
    
    console.log(emailError.innerHTML);
    
    const checkName = function(){
        if (!nameInput.value) {
            nameError.classList.add("field__name__error--invalid");
            nameInput.classList.add("invalid");
            isInValid = true;
        } else {
            nameError.classList.remove("field__name__error--invalid");
            nameInput.classList.remove("invalid");
        }
    };

    const checkEmail = function(){
        if (!emailInput.value) {
            emailError.innerHTML = "you need to fill out the email field";
            emailInput.classList.add("invalid");
            isInValid = true;
        } else {
            emailError.innerHTML = "";
            emailInput.classList.remove("invalid");
        }

        if (!confirmEmailInput.value) {
            confirmEmailError.innerHTML = "you need to fill out the confirm email field";
            confirmEmailInput.classList.add("invalid");
            isInValid = true;
        } 
        else if (confirmEmailInput.value !== emailInput.value) {
            confirmEmailError.innerHTML = "this field must match the email";
            confirmEmailInput.classList.add("invalid");
            isInValid = true;
        }
        else {
            confirmEmailError.innerHTML = "";
            confirmEmailInput.classList.remove("invalid");
        }
    };

    
    nameInput.addEventListener("focus", checkName);
    nameInput.addEventListener("change", checkName);

    emailInput.addEventListener("focus", checkEmail);
    emailInput.addEventListener("change", checkEmail);

    confirmEmailInput.addEventListener("focus", checkEmail);
    confirmEmailInput.addEventListener("change", checkEmail);

    const form = document.querySelector("#form");
    form.addEventListener("submit", function(e){
        isInValid = false;
        checkName();
        checkEmail();
        if (isInValid) {
            e.preventDefault();
        }
    });

})();