const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let includeNumbers = false;
let includeSymbols = false;
let numberInput = "";
const toggleNumbersButton = document.getElementById("toggleNumbers");
const toggleSymbolsButton = document.getElementById("toggleSymbols");

function getNumberInput() {
    let numberInput = document.getElementById("passwordlength").value;
    return parseFloat(numberInput);
}



toggleNumbersButton.addEventListener("click", function() {
    includeNumbers = !includeNumbers;
    this.classList.toggle("toggle-on");
    this.classList.toggle("toggle-off");

});

toggleSymbolsButton.addEventListener("click", function() {
    includeSymbols = !includeSymbols;
    this.classList.toggle("toggle-on");
    this.classList.toggle("toggle-off");

});

function isNumber(character) {
    return /[0-9]/.test(character);
}

function isSymbol(character) {
    return /[~`!@#$%^&*()_\-+={}[\],|:;<>./?]/.test(character);
}


let GenButton = document.getElementById("btn-generate");
let pwd1el = document.getElementById("gened-pwd1");
let pwd2el = document.getElementById("gened-pwd2");

GenButton.addEventListener("click", function() {
    pwd1el.textContent = "";
    pwd2el.textContent = "";
    let filteredArray = characters.filter(item => {
        if (!includeNumbers && isNumber(item)) {
            return false;
        }
        if (!includeSymbols && isSymbol(item)) {
            return false;
        }
        return true;
    });
    
const passwordLength = getNumberInput();

if (isNaN(passwordLength) || passwordLength <= 0) {
    alert("Please enter a valid password length");
    return;
    }
        
   for (let i = 0; i < passwordLength; i++) {
        let charNum = Math.floor(Math.random() * filteredArray.length);
        pwd1el.textContent += filteredArray[charNum];
    }

    for (let i = 0; i < passwordLength; i++) {
        let charNum = Math.floor(Math.random() * filteredArray.length);
        pwd2el.textContent += filteredArray[charNum];
    }
});
// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard: " + text);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

// Add event listeners to <p> elements for copying text
pwd1el.addEventListener("click", function() {
    copyToClipboard(pwd1el.textContent);
});

pwd2el.addEventListener("click", function() {
    copyToClipboard(pwd2el.textContent);
});