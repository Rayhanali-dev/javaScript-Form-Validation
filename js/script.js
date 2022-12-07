var username = document.getElementById("username")
var user_err = document.getElementById("user_err")

var email = document.getElementById("email")
var email_err = document.getElementById("email_err")
var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var pass = document.getElementById("pass")
var pass_err = document.getElementById("pass_err")
var pass_regex = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/

var password = document.getElementById("rkpass")
var password_err = document.getElementById("rk_err")

var gender_msg = document.getElementById("msg")

function signin(){
    if(username.value == ""){
        user_err.innerHTML = 'Please Enter your username';
        username.style.border = "1px solid red"
        username.focus()
        return false
    }
    else if(email.value == ""){
        email_err.innerHTML = "Please enter your email"
        email.style.border = "1px solid red"
        email.focus()
        return false
    }
    else if(!email_regex.test(email.value)){
        email_err.innerHTML = "Enter your valid gamil"
        email.style.border = "1px solid red"
        email.focus()
        return false
    }
    else if(pass.value == ""){
        pass_err.innerHTML = "Please enter your password"
        pass.style.border = "1px solid red"
        pass.focus()
        return false
    }

    else if(!pass_regex.test(pass.value)){
        pass_err.innerHTML = "Password need 8 characters and also special chracters"
        pass.style.border = "1px solid red"
        pass.focus()
        return false
    }

    else if (pass.value != password.value){
        password_err.innerHTML = "Password Incorrect"
        password.style.border = "1px solid red"
        password.focus()
        return false
    }
    else if (gnder_1.checked != true && gnder_2.checked != true && gnder_3.checked != true){
        gender_msg.innerHTML = "You must select your gender!"
        gender_msg.style.color = "red"
        return false
    }
}

function passshow(){
    if(pass.type === "password"){
        pass.type = "text";
        document.getElementById("a").innerHTML = '<i class="fa-solid fa-eye"></i>'
    }
    else {
        pass.type = "password"
        document.getElementById("a").innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    }
}


function valid(){
    if(username.value != ""){
        user_err.innerHTML = ""
        username.style.border = "3px solid green";
    }
}

username.addEventListener('blur', valid)

function valida(){
    if(email.value != ""){
        email_err.innerHTML = ""
        email.style.border = "3px solid green"
    }
}

email.addEventListener("blur", valida)

function validb(){
    if(pass.value != ""){
        pass_err.innerHTML = ""
        pass.style.border = "3px solid green"
    }
}

pass.addEventListener("blur", validb)



