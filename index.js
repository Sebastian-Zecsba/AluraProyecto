const textArea = document.querySelector('#textEncript');
const resultTextArea = document.querySelector('#result_text');
const buttonEncriptar = document.querySelector('#encriptar');
const buttonDesencriptar = document.querySelector('#desencriptar');
const buttonCopy = document.querySelector('#copy');
const errorMsg = document.querySelector('#error_message');

const containerResult = document.querySelector('.box_result')
const containerWithOut = document.querySelector('.box_with_out_result')
const boxImage = document.querySelector('.box_image')

eventListeners();

function eventListeners() {
    buttonEncriptar.addEventListener('click', encriptartext);
    buttonDesencriptar.addEventListener('click', desencriptartext);
    buttonCopy.addEventListener('click', copiarTexto);
}

function encriptartext() {
    let text = textArea.value;
    if (!validarTexto(text)) {
        errorMsg.textContent = "El texto contiene caracteres no permitidos: acentos, mayúsculas o 'ñ'.";
        return;
    }
    
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

    containerResult.style.display = 'block'
    containerWithOut.style.display = 'none'
    boxImage.style.display = 'none'
}

function desencriptartext() {
    let text = textArea.value;
    if (!validarTexto(text)) {
        errorMsg.textContent = "El texto contiene caracteres no permitidos: acentos, mayúsculas o 'ñ'.";
        return;
    }
    let desencriptedText = "";
    
    for (let i = 0; i < text.length; i++) {
        if (text.startsWith('enter', i)) {
            desencriptedText += 'e';
            i += 4;
        } else if (text.startsWith('imes', i)) {
            desencriptedText += 'i';
            i += 3;
        } else if (text.startsWith('ai', i)) {
            desencriptedText += 'a';
            i += 1;
        } else if (text.startsWith('ober', i)) {
            desencriptedText += 'o';
            i += 3;
        } else if (text.startsWith('ufat', i)) {
            desencriptedText += 'u';
            i += 3;
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

function validarTexto(text) {
    const regex = /^[a-z\s,?.!]*$/;
    return regex.test(text);
}