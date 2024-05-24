let input_password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm_password")
let passwordErrorMsg = document.querySelector("#passwordError")
let passwordErrorPlaceholder = document.querySelector("#passwordErrorPlaceholder")

confirm_password.addEventListener('input', (e) => {
    if(input_password.value !== e.target.value) {
        passwordErrorMsg.style.display = 'block';
        passwordErrorPlaceholder.style.height = '0';
        input_password.style.borderColor = 'red';
        confirm_password.style.borderColor = 'red';
    }else {
        passwordErrorMsg.style.display = 'none';
        passwordErrorPlaceholder.style.height = '18px';
        input_password.style.borderColor = 'blue';
        confirm_password.style.borderColor = 'blue';
    }
});