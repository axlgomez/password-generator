/*---- Global variables ----*/

const passwordDisplay = document.getElementById("password-display");
const passwordLength = document.getElementById("password-length");
const includeNumber = document.querySelector("#numbers");
const includeLowerCase = document.querySelector("#lowercase-letters");
const includeUpperCase = document.querySelector("#uppercase-letters");
const includeSymbols = document.querySelector("#symbols");
const generateBtn = document.getElementById("generate-password");

/*---- Configuration ----*/

const NUMBERS = "0123456789";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SYMBOLS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

/*---- Initialization ----*/

//// Function responsible to generate password and then returning it.

const generatePassword = () =>{
    let characters = "";
    let passwordLengthValue = passwordLength.value;
    includeNumber.checked ? (characters += NUMBERS) : "";
    includeLowerCase.checked ? (characters += LOWERCASE) : "";
    includeUpperCase.checked ? (characters += UPPERCASE) : "";
    includeSymbols.checked ? (characters += SYMBOLS) : "";

    const password = generateRandomPassword(passwordLengthValue, characters);
    passwordDisplay.innerText = password;

    //password animation

    const splitPassword = password.split("");
    passwordDisplay.innerText = "";
    // console.log(splitPassword);
    for (let i = 0; i < splitPassword.length; i++) {
        passwordDisplay.innerHTML += `<span>${splitPassword[i]}</span>`;        
    }

    let char = 0;
    let timer = setInterval(animationPassword, 50);

    function animationPassword(){
        let span = document.querySelectorAll('span')[char];
        span.classList.add("fade");
        char++;
        if (char == splitPassword.length) {
            completeAnimation();
            return;
        }
    }

    function completeAnimation() {
        clearInterval(timer);
        timer = null;
    }
};

const generateRandomPassword = (length, characters) =>{
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random()*characters.length)];
    }
    return password;
};

//// function that handles the checkboxes state, so at least one needs to be selected. The last checkbox will be disabled.

const disableOnlyCheckbox = () =>{
    let totalChecked = [includeNumber, includeUpperCase, includeLowerCase, includeSymbols].filter(el => el.checked)
    totalChecked.forEach(el => {
        if (totalChecked.length == 1) {
            el.disabled = true;
        } else{
            el.disabled = false;
        }
    });
};

[includeNumber, includeUpperCase, includeLowerCase, includeSymbols].forEach(el => {
    el.addEventListener('click', () => {
        disableOnlyCheckbox();
    })
});

//Using Events Listeners

generateBtn.addEventListener("click", generatePassword);
window.addEventListener("load", generatePassword);
includeNumber.addEventListener("click", generatePassword);
includeLowerCase.addEventListener("click", generatePassword);
includeUpperCase.addEventListener("click", generatePassword);
includeSymbols.addEventListener("click", generatePassword);