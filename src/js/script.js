
const passwordDisplay = document.getElementById("password-display");
const passwordLength = document.getElementById("password-length");
const includeNumber = document.querySelector("#numbers");
const includeLowerCase = document.querySelector("#lowercase-letters");
const includeUpperCase = document.querySelector("#uppercase-letters");
const includeSymbols = document.querySelector("#symbols");

const NUMBERS = "0123456789";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SYMBOLS = "!@#$%^&*_-+=";

const button = document.getElementById("generate-password");

// create a random password

const generatePassword = () =>{
    let characters = "";
    let passwordLengthValue = passwordLength.value;
    includeNumber.checked ? (characters += NUMBERS) : "";
    includeLowerCase.checked ? (characters += LOWERCASE) : "";
    includeUpperCase.checked ? (characters += UPPERCASE) : "";
    includeSymbols.checked ? (characters += SYMBOLS) : "";

    const password = generateContraseña(passwordLengthValue, characters);
    passwordDisplay.innerText = password;
};

const generateContraseña = (length, characters) =>{
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random()*characters.length)];
    }
    return password;
};

button.addEventListener("click", generatePassword);
window.addEventListener("load", generatePassword);
