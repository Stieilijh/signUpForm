window.onload=function(){
    const password=document.querySelector("#passwordInput");
    const confirmPassword = document.querySelector
    ("#confirmPasswordInput");
    const submitbtn = document.querySelector("#submitbtn");
    const warning = document.querySelector("#passwordWarning");
    function validatePassword(){
        if(password.value != confirmPassword.value) {
            warning.textContent="Passwords Don't Match";
            submitbtn.disabled=true;
        } else {
            warning.textContent='';
            submitbtn.disabled=false;
        }
    }
    
    password.onchange = validatePassword;
    confirmPassword.onkeyup = validatePassword;

}
