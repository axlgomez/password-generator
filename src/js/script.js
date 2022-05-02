
const passwordDisplay = document.getElementById("password-display");
const passwordLength = document.getElementById("password-length");
const includeNumber = document.querySelector("#numbers");
const includeLowerCase = document.querySelector("#lowercase-letters");
const includeUpperCase = document.querySelector("#uppercase-letters");
const includeSymbols = document.querySelector("#symbols");

let CHARACTERS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let NUMBERS = "0123456789";
let LOWERCASE = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const generatePasswordRandom = document.getElementById("generate-password");

// create a random characters

generatePasswordRandom.addEventListener("click", ()=>{    
    let password = "";
    for (let i = 0; i < passwordLength.value; i++) {
        let randomPassword = CHARACTERS[Math.floor(Math.random()*CHARACTERS.length)];
        password += randomPassword;        
    }
    passwordDisplay.innerText = password;
});

