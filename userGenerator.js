let createListBtn = document.getElementById("createList");
let area = document.getElementById("listCreaterArea");
let errP = document.getElementById("errP");
let newListName = "";
let userArray = [];

createListBtn.addEventListener("click", createElement);

function createElement() {
    let selectListName = document.getElementById("selectListName");
    let listName = selectListName.value;
    if (selectListName.value == "" || selectListName.value.length < 3 || selectListName.value.length > 20) {
        errP.innerHTML = "Der Listenname muss mindestens 3 Zeichen lang und nicht größer als 20 Zeichen sein.";
        setTimeout(function () {
            errP.innerHTML = "<br>";
        }, 4000);
    } else {
        let x = prompt("...");
        alert(localStorage.getItem(x));
        showNewElements(listName);
        createList(newListName);
    }
}

function showNewElements(name) {
    area.innerHTML = "<h3 id='showListName'>Der Listenname lautet: " + "<font id='showListName2'>" + name + "</font>" + " <button onclick='renameBtn()'>Umbenennen</button></h3";
    let element = document.createElement("input");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    element.id = "addElement";
    btn1.id = "moreElements";
    btn2.id = "createFinishedList";
    element.placeholder = "Element hinzufügen";
    btn1.innerHTML = "Weiteres Element hinzufügen";
    btn2.innerHTML = "Liste fertig stellen";
    area.appendChild(element);
    area.innerHTML += "<br><br>";
    area.appendChild(btn1);
    area.innerHTML += "<br><br>";
    area.appendChild(btn2);
    let btnEl = document.getElementById("moreElements");
    btnEl.addEventListener("click", addNewElement);
}

function renameBtn (name) {
    listName = prompt("Neuen Listenamen wählen:");
    if(listName != name) {
        let showListName2 = document.getElementById("showListName2");
        showListName2.innerHTML = listName;
    }
    newListName = listName;
    return newListName;
}

function addNewElement(list) {
    let element = document.getElementById("addElement");
    element = element.value;
    if (element.trim() == "") {
        errP.innerHTML = "Kein Inhalt für ein neues Listenelement hinzugefügt. Bitte fügen Sie einen Text für ein Listenelement hinzu.";
        setTimeout(function () {
            errP.innerHTML = "<br>";
        }, 4000);
    } else {
        userArray.push(element)
        element = "";
    }
    return userArray;
}

function createList(lname) {
    let element = document.getElementById("addElement");
    element = element.value.trim();
    if (element == "") {
        ""
    } else {
        userArray.push(element.value);
    }
    localStorage.setItem(lname, userArray);
}