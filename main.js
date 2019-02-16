const numberInput = document.querySelector(".numberInput");
const buttonGenerate = document.querySelector(".buttonGenerate");
const buttonReset = document.querySelector(".buttonReset");
const buttonShuffle = document.querySelector(".buttonShuffle");
const elements = document.querySelector(".elements");
const results = document.querySelector(".results");

let lg = (txt) => console.log(txt); // shortcut for console.log()
numberInput.focus();
function getRandom(min, max) {
    // return a random number between min and max. (including both)
    return (Math.floor( Math.random()*(max - min + 1) ) + min);
  }

function createInput(num) { // create inputs in desired number
    for (let i = 0; i < num; i++) {
        let newElement = document.createElement("input");
        newElement.type = "text";
        newElement.display = "block";
        newElement.style.margin = "10px";
        newElement.className = "elementForm";
        let newLi = document.createElement("li");
        newLi.appendChild(newElement);
        elements.appendChild(newLi);
    }  
    
}
function shuffle(array, clear="clr") { // select random one from array
    // clear arg. is decider to clear previous result texts
    if (clear === "clr") {
        results.textContent = "";
    }
    let maxIndex = array.length - 1;
    let indexOfSelected = getRandom(0, maxIndex);
    let selectedInput = array[indexOfSelected];
    printResults(`Winner is ${selectedInput}. (Number ${indexOfSelected+1})`);
}
function getElementValues() {
    // elements is the array of all form objects
    let elements = document.getElementsByClassName("elementForm");
    let elementValues = [];
    for(let i=0; i<elements.length; i++) {
        // get value of each form object
        elementValues.push(elements[i].value);
    }
    return elementValues;
}
function resetForm() {
    let confirmReset = confirm("Are you sure to reset all?");
    if (confirmReset === true) {
        results.textContent = "";
        numberInput.value = "";
        numberInput.focus();
        elements.textContent = "";
        buttonGenerate.style.display = "inline"; 
        buttonReset.style.display = "none";
        buttonGenerate.style.display = "none";

    }
    else {
    }
    
}
function printResults(txt) {
    let h1Result = document.createElement("h1");
    h1Result.className = "resultText";
    h1Result.textContent = txt;
    results.appendChild(h1Result);
}

buttonGenerate.onclick = function() {
    let number = numberInput.value;
    if(number > 0) {
        buttonGenerate.style.display = "none"; 
        buttonReset.style.display = "inline";
    }
    createInput(number);
    buttonShuffle.style.display = "inline";
    lg("blcoked");
}

buttonReset.onclick = function() {
    resetForm();
}

buttonShuffle.onclick = function() {
    let inputArray = getElementValues();
    shuffle(inputArray);
}