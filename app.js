'use strict';

const getPassword = document.querySelector("input");
const copyBtn = document.querySelector(".bx-copy");
const generateBtn = document.querySelector("button");
const inputUpper = document.querySelector(".uppercase");
const inputLower = document.querySelector(".lowercase");
const inputNumbers = document.querySelector('.numbers');
const inputSymbols = document.querySelector(".symbols");
const chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '#', '$', '%', '^', '&', '*', '~'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
const symbols = ['!', '#', '$', '%', '^', '&', '*', '~', '/', '|', '{', '}', '[', ']'];

let randomPass;
generateBtn.addEventListener('click', () => {
    randomPass = '';
    if(inputUpper.checked && inputLower.checked && inputNumbers.checked && inputSymbols.checked){
        passwordOption(chars);
        getPassword.value = randomPass;
        return;
    }
    if(inputUpper.checked && inputLower.checked && inputSymbols.checked){
        passwordOption([...upperCase, ...lowerCase, ...symbols]);
        getPassword.value = randomPass;
        return;
    }
    if(inputUpper.checked && inputLower.checked && inputNumbers.checked){
        passwordOption([...upperCase, ...lowerCase, ...numbers]);
        getPassword.value = randomPass;
        return;
    }
    if(inputUpper.checked && inputLower.checked){
        passwordOption([...upperCase, ...lowerCase]);
        getPassword.value = randomPass;
        return;
    }
    if(inputUpper.checked && inputNumbers.checked && inputSymbols.checked){
        passwordOption([...upperCase, ...lowerCase, ...symbols]);
        getPassword.value = randomPass;
        return;
    }
    if(inputNumbers.checked && inputSymbols.checked){
        passwordOption([...numbers, ...symbols]);
        getPassword.value = randomPass;
        return;
    }
    if(inputUpper.checked && inputNumbers.checked){
        passwordOption([...upperCase, ...numbers]);
        getPassword.value = randomPass;
        return;
    }
    if(inputUpper.checked && inputSymbols.checked){
        passwordOption([...upperCase, ...symbols]);
        getPassword.value = randomPass;
        return;
    }
    if(inputLower.checked && inputSymbols.checked){
        passwordOption([...lowerCase, ...symbols]);
        getPassword.value = randomPass;
        return;
    }
    if(inputLower.checked && inputNumbers.checked){
        passwordOption([...lowerCase, ...numbers]);
        getPassword.value = randomPass;
        return;
    }
    if(inputUpper.checked){
        passwordOption(upperCase);
        getPassword.value = randomPass;
        return;
    }
    if(inputLower.checked){
        passwordOption(lowerCase);
        getPassword.value = randomPass;
        return;
    }
    if(inputNumbers.checked){
        passwordOption(numbers);
        getPassword.value = randomPass;
        return;
    }
    if(inputSymbols.checked){
        passwordOption(symbols);
        getPassword.value = randomPass;
        return;
    }
    if(!inputUpper.checked && !inputLower.checked && !inputNumbers.checked && !inputSymbols.checked){
        getPassword.value = '';
    }
});

function passwordOption(option){
    for(let i = 0; i < 12; i++){
        randomPass += option[Math.floor(Math.random() * option.length)];
    }
}

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(getPassword.value);
});

