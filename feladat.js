AOS.init()

let opcio1 = ['valasz1','valasz2','valasz3','asd'];
let opcio2 = ['valasz4','valasz5','valasz6','asd1'];
const select1 = document.querySelector('[name=opcio1]')
const select2 = document.querySelector('[name=opcio2]')


function shuffleArray(array) {
    let len = array.length,
        currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
        let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
        var temp = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = temp;
    }
}

shuffleArray(opcio1)
shuffleArray(opcio2)


function init(){
    opcio1.forEach(m => {
        select1.innerHTML += `<option value="${m}">${m}</option>`
    });
    opcio2.forEach(m => {
        select2.innerHTML += `<option value="${m}">${m}</option>`
    });
}


let pontszam = 0;

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
const test_container = document.querySelector(".test_vis")

const masodik_label = document.querySelector(".masodik_label")
const harmadik_label = document.querySelector(".harmadik_label")


// input
const name = document.querySelector(".name")
const email = document.querySelector(".email")
const birthdate = document.querySelector(".birthdate")
const password = document.querySelector(".password")
password.disabled = true;

const kezdes_btn = document.querySelector(".kezdes_btn")
const ellenorzes_btn = document.querySelector(".ellenorzes_btn")

// qs

const elso_kerdes = document.querySelector("#elso_kerdes")

// test
const r1_1 = document.querySelector("#r1_1")
const r1_2 = document.querySelector("#r1_2")
const r1_3 = document.querySelector("#r1_3")

const t3_1 = document.querySelector("#t3_1")
const t4_1 = document.querySelector("#t4_1")

const result = document.querySelector(".result")

// test check
const pontszam_label = document.querySelector("#pontszam_label")
const pontszam_result = document.querySelector("#pontszam_result")


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
    kezdes_btn.dataset.status = "hidden"
    test_info.dataset.status = "hidden"
    test_container.dataset.status = "visible"
}

let invalid_checkBox = false;
let invalid_TextInput = false;

let checked_count = 0;
function BoxCheck(element) {

    if (element.checked) {
        checked_count++;
    } else {
        checked_count--;
    }

    console.log(checked_count)

    if (checked_count > 2) {
        masodik_label.dataset.status = "incorrect"
        invalid_checkBox = true;
        // ellenorzes_btn.disabled = true
        // ellenorzes_btn.dataset.status = "invalid"
    } else if (checked_count <= 2) {
        masodik_label.dataset.status = "normal"
        invalid_checkBox = false;
        // ellenorzes_btn.disabled = false
        // ellenorzes_btn.dataset.status = "enabled"
    }
    validCheck()
}

function checkTextAnswer(text) {
    const pattern = /^[a-zA-Z]{1,}$/gm;

    if (pattern.test(text.value)) {
        t3_1.dataset.status = "normal"
        harmadik_label.dataset.status = "normal"
        invalid_TextInput = false;
        // ellenorzes_btn.dataset.status = "enabled"
        // ellenorzes_btn.disabled = false;

    } else if (text.value == "") {
        t3_1.dataset.status = "normal"
        harmadik_label.dataset.status = "normal"
        invalid_TextInput = false;
        // ellenorzes_btn.dataset.status = "enabled"
        // ellenorzes_btn.disabled = false;


    } else {
        t3_1.dataset.status = "incorrect"
        harmadik_label.dataset.status = "incorrect"
        invalid_TextInput = true;
        // ellenorzes_btn.dataset.status = "invalid"
        // ellenorzes_btn.disabled = true;

    }
    validCheck()
}

function validCheck() {
    if (invalid_TextInput || invalid_checkBox) {
        ellenorzes_btn.dataset.status = "invalid"
        ellenorzes_btn.disabled = true;
    } else {
        ellenorzes_btn.dataset.status = "enabled"
        ellenorzes_btn.disabled = false;
    }
}


function ellenorzesbtn_click() {
    let t3_1_value = t3_1.value.toLowerCase()


    if (r1_3.checked) {
        pontszam++;
    }

    if (c2_2.checked) {
        pontszam++;
    }

    if (c2_3.checked) {
        pontszam++;
    }

    if (t3_1_value.includes("bing")){
        pontszam++;
    }

    let t4_value = t4_1.value.toLowerCase()
    let t4_split = t4_value.split(' ')
    console.log(t4_split)

    if (t4_split.includes("world")) {
        pontszam++
    }
    
    if (t4_split.includes("wide")) {
        pontszam++
    }

    if (t4_split.includes("web")) {
        pontszam++
    }

    if (select1.value == "valasz2") {
        pontszam++
    }

    if (select2.value == "valasz5") {
        pontszam++
    }

    test_container.dataset.status = "hidden"
    result.dataset.status = "visible"

    pontszam_result.innerHTML = `${pontszam} / 9; ${Math.round((pontszam/9)*100)}%`
    ellenorzes_btn.disabled = true
}

