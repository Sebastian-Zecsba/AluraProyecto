const textArea = document.querySelector('#textEncript');
const resultTextArea = document.querySelector('#result_text');
const buttonEncriptar = document.querySelector('#encriptar');
const buttonDesencriptar = document.querySelector('#desencriptar');
const buttonCopy = document.querySelector('#copy');

eventListeners();

function eventListeners() {
    buttonEncriptar.addEventListener('click', encriptartext);
    buttonDesencriptar.addEventListener('click', desencriptartext);
    buttonCopy.addEventListener('click', copiarTexto);
}

function encriptartext() {
    let text = textArea.value;
    let encriptedText = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'e') {
            encriptedText += 'enter';
        } else if (text[i] === 'i') {
            encriptedText += 'imes';
        } else if (text[i] === 'a') {
            encriptedText += 'ai';
        } else if (text[i] === 'o') {
            encriptedText += 'ober';
        } else if (text[i] === 'u') {
            encriptedText += 'ufat';
        } else {
            encriptedText += text[i];
        }
    }

    resultTextArea.value = encriptedText;
}

function desencriptartext() {
    let text = textArea.value;
    let desencriptedText = "";
    
    for (let i = 0; i < text.length; i++) {
        if (text.startsWith('enter', i)) {
            desencriptedText += 'e';
            i += 4; // Saltar los siguientes 4 caracteres ('nter')
        } else if (text.startsWith('imes', i)) {
            desencriptedText += 'i';
            i += 3; // Saltar los siguientes 3 caracteres ('mes')
        } else if (text.startsWith('ai', i)) {
            desencriptedText += 'a';
            i += 1; // Saltar el siguiente carácter ('i')
        } else if (text.startsWith('ober', i)) {
            desencriptedText += 'o';
            i += 3; // Saltar los siguientes 3 caracteres ('ber')
        } else if (text.startsWith('ufat', i)) {
            desencriptedText += 'u';
            i += 3; // Saltar los siguientes 3 caracteres ('fat')
        } else {
            desencriptedText += text[i];
        }
    }

    resultTextArea.value = desencriptedText;
}

function copiarTexto() {
    resultTextArea.select();
    document.execCommand('copy');
}
