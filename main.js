const tabs = document.querySelectorAll('.tab');
const radios = document.querySelectorAll('input[name="step"]');

radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        tabs.forEach((tab, tabIndex) => {
            if (tabIndex === index) {
                tab.style.zIndex = '10';
            } else {
                tab.style.zIndex = '1';
            }
        });
    });
});

let nom = document.getElementById('Nom');
let email = document.getElementById('Email');
let options1 = document.getElementById("options1");
let options2 = document.getElementById("options2");
let datee = document.getElementById("datee");

let noom = document.getElementById("noom");
let eemail = document.getElementById("eemail");
let daate = document.getElementById("daate");
let arriiver = document.getElementById("arriiver");
let deepart = document.getElementById("deepart");

let prixt1 = document.getElementById("prixt1");
let prixt2 = document.getElementById("prixt2")
let prixt3 = document.getElementById("prixt3");
let prixt4 = document.getElementById("prixt4");

let countEl1 = document.getElementById("count-el1");
let countEl2 = document.getElementById("count-el2")
let count1 = 0;
let count2 = 0
let prix1 = 0;
let prix2 = 0;
let place = document.getElementById("place")

function ajouter(){
    noom.innerHTML = nom.value
    eemail.innerHTML = email.value
    deepart.innerHTML = options1.value
    arriiver.innerHTML = options2.value
    daate.innerHTML = datee.value 
}

function increment1() {
    count1 = count1 + 1
    prix1 = 500 * count1
    countEl1.innerText = count1
    prixt1.innerHTML = prix1
    prixt3.innerHTML = prix1 + prix2
    prixt4.innerHTML = prix1 + prix2
    place.innerHTML = count1 + count2
}

function decrement1() {
    if(count1 > 0){
        count1 = count1 -1
        prix1 = 500 * count1
        countEl1.innerText = count1
        prixt1.innerHTML = prix1 
        prixt3.innerHTML = prix1 + prix2
        prixt4.innerHTML = prix1 + prix2
        place.innerHTML = count1 + count2
    }  
}

function increment2() {
    count2 = count2 + 1
    prix2 = 100 * count2
    countEl2.innerText = count2
    prixt2.innerHTML = prix2
    prixt3.innerHTML = prix1 + prix2
    prixt4.innerHTML = prix1 + prix2
    place.innerHTML = count1 + count2
}

function decrement2() {
    if(count2 > 0){
        count2 = count2 -1
        prix2 = 100 * count2
        countEl2.innerText = count2
        prixt2.innerHTML = prix2
        prixt3.innerHTML = prix1 + prix2
        prixt4.innerHTML = prix1 + prix2
        place.innerHTML = count1 + count2
    } 
}

let cnt = 0;
function toggleColor(event) {
    let button = event.target;
    if (cnt < count1 + count2) {
        
        if (button.style.backgroundColor === "rgb(166, 205, 226)") {
            cnt++;
            button.style.backgroundColor = "#3da01f";
        } else {
            cnt--;
            button.style.backgroundColor = "#a6cde2";
        }
    }else{
        if(cnt > 0 && button.style.backgroundColor == "rgb(61, 160, 31)"){
            cnt--;
            button.style.backgroundColor = "#a6cde2"; 
        }
    }
}



