let result_2 = document.getElementById("result");
let para_2 = document.getElementById("altPara");
//This function checks, what the user selected and selects the right function to go on
function check () {
    let selected = document.querySelector("select").value;
    if (selected === "Zahlen") {
        numberSettings();
    }
    if (selected === "Buchstaben") {
        abcSettings();
    }
    if (selected === "Benutzerdefiniert") {
        benSettings();
    }
}

function numberSettings () {
    deleteResultArea();
    let id = "genNum";
    display(id);
}

function abcSettings () {
    deleteResultArea();
    let id = "genAbc";
    display(id);
}

function benSettings () {
    deleteResultArea();
    let id = "genBen";
    display(id);
}

function display(id) {
    let abc = document.getElementById("genAbc");
    let num = document.getElementById("genNum");
    let benutzerdefiniert = document.getElementById("genBen");
    if (id === "genNum") {
        abc.style.display = "none";
        benutzerdefiniert.style.display = "none";
        num.style.display = "block";
    }
    if (id === "genAbc") {
        abc.style.display = "block";
        benutzerdefiniert.style.display = "none";
        num.style.display = "none";
    }
    if (id === "genBen") {
        abc.style.display = "none";
        benutzerdefiniert.style.display = "block";
        num.style.display = "none";
    }
}

function deleteResultArea () {
    result_2.innerHTML = "";
    para_2.innerHTML = "";
}


let showListCreater = document.getElementById("createListBtn");
showListCreater.addEventListener("click", showListCreaterPopup);

let closeListCreater = document.getElementById("closeListCreater");
closeListCreater.addEventListener("click", closeListCreaterPopup);

function showListCreaterPopup() {
    let newListPopup = document.getElementById("newListPopup");
    newListPopup.style.display = "block";
}

function closeListCreaterPopup() {
    let newListPopup = document.getElementById("newListPopup");
    newListPopup.style.display = "none";
}