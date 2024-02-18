//für zufällige Zahlen
let numButton = document.getElementById("createRandomNumberButton");
let abcButton = document.getElementById("createRandomLetter");
let randomInteger;


//für zufällige Buchstaben
const random_lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const random_upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const random_vowelMutation = ["ä", "ö", "ü"];
//let benButton = ...

numButton.addEventListener("click", createNumber);
abcButton.addEventListener("click", createAbc);

function createNumber () {
    let min = document.getElementById("numMin").value;
    let max = document.getElementById("numMax").value;
    let para = document.getElementById("altPara");
    let result = document.getElementById("result");
    result.innerHTML = "";
    para.innerHTML = "";
    let conditions = isNaN(Number(min)) || isNaN(Number(max)) || min.includes(".") || max.includes(".") || (Number(min) < 1) || (Number(min) > 10000) || (Number(max) < 1) || (Number(max) > 10000) || (Number(min) > Number(max));
    if (conditions) {
        para.innerHTML = "Bitte nur ganze Zahlen zwischen 1 und 10000 eingeben!";
    }

    if (Number(min) > Number(max)) {
        para.innerHTML = "Minimum kann nicht größer als Maximum sein."
    }
    if (Number(min) == Number(max)) {
        para.innerHTML = "Minimum und Maximum können nicht gleich sein."
    }
    min = Number(min);
    max = Number(max);
    if (!conditions && !(min == max)) {
        generate(min, max);
        result.innerHTML = randomInteger;
    }

}

function createAbc () {
    let lowerCase = document.getElementById("lowercase");
    let upperCase = document.getElementById("uppercase");
    let vowelMutation = document.getElementById("special");
    let minimum = 0;
    let maximum;
    let result = document.getElementById("result");
    const userArray = [];
    let para = document.getElementById("altPara");
    para.innerHTML = "";
    if (!lowerCase.checked && !upperCase.checked && !vowelMutation.checked) {
        para.innerHTML = "Bitte wählen Sie, wie sich die Zufallsmenge zusammensetzen soll."
    }
    if (lowerCase.checked) {
        createUserArray(userArray, random_lowerCase);
    }
    if (upperCase.checked) {
        createUserArray(userArray, random_upperCase);
    }
    if (vowelMutation.checked) {
        createUserArray(userArray, random_vowelMutation);
    }
    maximum = userArray.length;
    generate(0, maximum);
    console.log(userArray.length)
    if (userArray[randomInteger] == undefined) {
        createAbc();
    }
    result.innerHTML = userArray[randomInteger];
}

function createUserArray (Array, random_x) {
    let i = 0;
    for (i in random_x) {
        Array.push(random_x[i]);
    }
    return Array;
}

function generate(minimum, maximum) {
    randomInteger = Math.floor(Math.random() * ((maximum) - (minimum) + 1)) + (minimum);
    return randomInteger;
}