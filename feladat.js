AOS.init()

// bool
let name_check = false;
let email_check = false;
let birthdate_check = false;
let password_check = true;



const name = document.querySelector(".name")
const email = document.querySelector(".email")
const birthdate = document.querySelector(".birthdate")


const kezdes_btn = document.querySelector(".kezdes_btn")


function checkName(name){
    const pattern = /^[A-Z]{1}[a-z]{1,15}[" "]{1}[A-Z]{1}[a-z]{1,15}/gm;


    if (pattern.test(name.value)) {
        name.dataset.status = "correct"
        name_check = true;
    } else {
        name.dataset.status = "incorrect"
        name_check = false;
    }
}

function checkEmail(email){
    const pattern = /^[A-Z]{1}[a-z]{1,15}[" "]{1}[A-Z]{1}[a-z]{1,15}/gm;
    
    
    if (pattern.test(email.value)) {
        email.dataset.status = "correct"
        email_check = true;
    } else {
        email.dataset.status = "incorrect"
        email_check = false;
    }
}

function checkBirthdate(BirthDate){
    const pattern = /^[A-Z]{1}[a-z]{1,15}[" "]{1}[A-Z]{1}[a-z]{1,15}/gm;


    if (pattern.test(BirthDate.value)) {
        BirthDate.dataset.status = "correct"
        birthdate_check = true;
    } else {
        BirthDate.dataset.status = "incorrect"
        birthdate_check = false;
    }
}

function checkPass(password){

    if (name_check && email_check && birthdate_check) {
        if (password.value == "jelszo") {
            password.dataset.status = "correct"
            password_check = true;    
        } else if (password.value == ""){
            password.dataset.status = "normal"
            password_check = false;
        } else if (password.value != "jelszo") {
            password.dataset.status = "incorrect"
        }
    }
}



