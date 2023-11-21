const passwordbox = document.getElementById("Password"); 

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTVWXYZ"
const lowerCase = "abcdefghijklmnopqrstvwxyz"
const number = "0123456789";
const symobl = "@#$%^&*()_+~|{}[]<>/-=";

const alChar = upperCase + lowerCase + number + symobl

function generatePassword(){
    let Password = "";
    Password = Password+upperCase[Math.floor(Math.random() * upperCase.length)];
    Password = Password+lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password = Password+number[Math.floor(Math.random() * number.length)];
    Password = Password+symobl[Math.floor(Math.random() * symobl.length)];

    while (length > Password.length){
        Password = Password + alChar[Math.floor(Math.random() * alChar.length)];
    }
    passwordbox.value = Password;
}

function copyPass(){
    passwordbox.select();
    document.execCommand("Copy");
    alert("Copied")
}

