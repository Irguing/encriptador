// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el textarea y los botones usando querySelector
    const inputText = document.querySelector('#ingresar');
    const submitButton = document.querySelector('#submitButton');
    const decodeButton = document.querySelector('#desencriptar');
    const outputSection = document.querySelector('#textoencrip');
    const botoncopiar = document.querySelector('#ningunTexto');

    // Encriptar
    function encryptSimpleSubstitution(text) {
        const substitution = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            if (substitution[char]) {
                encryptedText += substitution[char];
            } else {
                encryptedText += char;
            }
        }
        return encryptedText;
    }

    // Desencriptar
    function decryptSimpleSubstitution(text) {
        const reverseSubstitution = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        let decryptedText = text;
        for (let [key, value] of Object.entries(reverseSubstitution)) {
            let regex = new RegExp(key, 'g');
            decryptedText = decryptedText.replace(regex, value);
        }
        return decryptedText;
    }

    // Añade un evento 'click' al botón de encriptación
    submitButton.addEventListener('click', () => {
        const text = inputText.value.toLowerCase(); // Convierte a minúsculas

        // Encripta el texto capturado
        const encryptedText = encryptSimpleSubstitution(text);

        // Imprime el texto encriptado en la sección de salida
        outputSection.textContent = encryptedText;

        //Mostrar el boton "copiar"
        let copy = aparecer();
        botoncopiar.textContent = copy;
    });

    // Añade un evento 'click' al botón de desencriptación
    decodeButton.addEventListener('click', () => {
        // Captura el valor del textarea
        const text = inputText.value.toLowerCase(); // Convierte a minúsculas

        // Desencripta el texto capturado
        const decryptedText = decryptSimpleSubstitution(text);

        // Imprime el texto desencriptado en la sección de salida
        outputSection.textContent = decryptedText;
        //Mostrar el boton copiar
        let copy = aparecer()
        botoncopiar.textContent = copy;
    });
});

//Funcion para mostrar el boton "copiar"
function aparecer() {
    document.getElementById("copiar").style.display = "show"
    document.getElementById("copiar").style.display = "inherit"
}

//Funcion para mostrar lightbox
function alerta() {
    swal("Texto copiado");
}

//funcion para copiar el texto encriptado o desencriptado
function copiandoando() {
    let ingreseElTexto = document.getElementById("textoencrip");
    let botoncopiar = document.getElementById("copiar")
    navigator.clipboard.writeText(ingreseElTexto.textContent);
}