AOS.init()

// bool
let name_check = false;
let email_check = false;
let birthdate_check = false;

// label
const name_label = document.querySelector(".name_label")
const email_label = document.querySelector(".email_label")
const birthdate_label = document.querySelector(".birthdate_label")
const password_label = document.querySelector(".password_label")
const test_info = document.querySelector(".test_info")


// input
const name = document.querySelector(".name")
const email = document.querySelector(".email")
const birthdate = document.querySelector(".birthdate")
const password = document.querySelector(".password")
password.disabled = true;

const kezdes_btn = document.querySelector(".kezdes_btn")


function checkName(name){
    const pattern = /^[A-Z]{1}[a-z]{1,15}[" "]{1}[A-Z]{1}[a-z]{1,15}/gm;


    if (pattern.test(name.value)) {
        name.dataset.status = "correct"
        name_label.dataset.status = "normal"
        name_check = true;

    } else if (name.value == "") {
        name.dataset.status = "normal"
        name_label.dataset.status = "normal"
        name_check = false;

    } else {
        name.dataset.status = "incorrect"
        name_label.dataset.status = "incorrect"
        name_check = false;
    }

    checkAll()
}

function checkEmail(email){
    const pattern = /^[A-Z]{1}[a-z]{1,15}[" "]{1}[A-Z]{1}[a-z]{1,15}/gm;
    
    
    if (pattern.test(email.value)) {
        email.dataset.status = "correct"
        email_label.dataset.status = "normal"
        email_check = true;

    } else if (email.value == "") {
        email.dataset.status = "normal"
        email_label.dataset.status = "normal"
        email_check = false;
    
    } else {
        email.dataset.status = "incorrect"
        email_label.dataset.status = "incorrect"
        email_check = false;
    }

    checkAll()
}

function checkBirthdate(BirthDate){
    const pattern = /^[A-Z]{1}[a-z]{1,15}[" "]{1}[A-Z]{1}[a-z]{1,15}/gm;


    if (pattern.test(BirthDate.value)) {
        BirthDate.dataset.status = "correct"
        birthdate_label.dataset.status = "normal"
        birthdate_check = true;

    } else if (BirthDate.value == "") {
        birthdate.dataset.status = "normal"
        birthdate_label.dataset.status = "normal"
        birthdate_check = false;

    } else {
        BirthDate.dataset.status = "incorrect"
        birthdate_label.dataset.status = "incorrect"
        birthdate_check = false;
    }

    checkAll()
}

function checkAll() {
    if (name_check && email_check && birthdate_check) {
      password.disabled = false;

    } else {
      password.disabled = true;
    }
}

function checkPass(password){
    if (name_check && email_check && birthdate_check) {
        if (password.value == "jelszo") {
            password.dataset.status = "correct"
            password_label.dataset.status = "normal"
            kezdes_btn.dataset.status = "enabled"

            name.disabled = true;
            email.disabled = true;
            birthdate.disabled = true;  
            

        } else if (password.value == ""){
            password.dataset.status = "normal"
            password_label.dataset.status = "normal"
            kezdes_btn.dataset.status = "disabled"

            name.disabled = false;
            email.disabled = false;
            birthdate.disabled = false;  

        } else if (password.value != "jelszo") {            
            password.dataset.status = "incorrect"
            password_label.dataset.status = "incorrect"
            kezdes_btn.dataset.status = "disabled"

            name.disabled = false;
            email.disabled = false;
            birthdate.disabled = false;
        }
    }
}

function kezdesbtn_click() {
    name.disabled = true;
    email.disabled = true;
    birthdate.disabled = true;
    password.disabled = true;
    test_info.dataset.status = "hidden"
}

