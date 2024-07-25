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
            a: 'm', b: 'n', c: 'b', d: 'v', e: 'c', f: 'x', g: 'z', h: 'a', i: 's', j: 'd', k: 'f', l: 'g', 
            m: 'h', n: 'j', o: 'k', p: 'l', q: 'q', r: 'w', s: 'e', t: 'r', u: 't', v: 'y', w: 'u', x: 'i', 
            y: 'o', z: 'p', ' ': ' '
        };
        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            if (substitution[char]) {
                encryptedText += substitution[char];
            }
            
        }
        return encryptedText;
        
    }

    // Desencriptar
    function decryptSimpleSubstitution(text) {
        const reverseSubstitution = {
            m: 'a', n: 'b', b: 'c', v: 'd', c: 'e', x: 'f', z: 'g', a: 'h', s: 'i', d: 'j', f: 'k', g: 'l', 
            h: 'm', j: 'n', k: 'o', l: 'p', q: 'q', w: 'r', e: 's', r: 't', t: 'u', y: 'v', u: 'w', i: 'x', 
            o: 'y', p: 'z', ' ': ' '
        };
        
        let decryptedText = '';
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            if (reverseSubstitution[char]) {
                decryptedText += reverseSubstitution[char];
            }
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
function aparecer(){
document.getElementById ("copiar").style.display ="show"
document.getElementById ("copiar").style.display = "inherit"

}
//Funcion para mostrar lightbox
function alerta (){
swal("Texto copiado");

}
//funcion para copiar el texto encriptado o desencriptado
function copiandoando () {
    let ingreseElTexto = document.getElementById("textoencrip");
    let botoncopiar=document.getElementById("copiar")
    
    navigator.clipboard.writeText(ingreseElTexto.textContent);
    botoncopiar.textContent='Copiado';
    }
   