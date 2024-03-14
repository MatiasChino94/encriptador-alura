const btnEncriptar = document.querySelector('.boton__encriptar');
const btnDesencriptar = document.querySelector('.boton__desencriptar');
const btnCopiar = document.querySelector('.boton__copiar')
const divParrafos = document.querySelector('.caja__parrafos');
const divImagen = document.querySelector('.caja__logo');
const divResultado = document.querySelector('.caja__resultado')

btnEncriptar.addEventListener('click', () => {
    encriptarTexto();
})

btnDesencriptar.addEventListener('click', () => {
    desencriptarTexto();
})

btnCopiar.addEventListener('click', () => {
    copiarTexto();
})


function encriptarTexto(){
    
    const texto =  document.querySelector('#texto').value.toLowerCase();
    const resultado = document.querySelector('.resultado__texto');
    let textoEncriptado = '';

    if (texto !== '') {      
        for (let i = 0; i < texto.length; i++) {
            // recorrer el texto
            switch(texto[i]){
                case 'a': 
                    textoEncriptado += 'ai';
                    break;
                case 'e':
                    textoEncriptado += 'enter';
                    break;
                case 'i':
                    textoEncriptado += 'imes';
                    break;
                case 'o':
                    textoEncriptado += 'ober';
                    break;
                case 'u':
                    textoEncriptado += 'ufat';
                    break;
                default:
                    textoEncriptado += texto[i];
                    break;
    
            }
            
        }
    
        alert('Texto Encriptado con exito');
        resultado.textContent = textoEncriptado;
        divResultado.style.display = 'flex';
    
        divImagen.style.display = 'none';
        divParrafos.style.display = 'none';

    }else {
        alert('Ingrese el texto que desea Encriptar o Desencriptar');
    }

}

function desencriptarTexto(){

    let textoEncriptado =  document.querySelector('#texto').value.toLowerCase();    
    const resultado = document.querySelector('.resultado__texto');
    let textoDesencriptado = '';

    if(textoEncriptado !== ''){

        textoEncriptado = textoEncriptado.replace(/ai/g, 'a');
        textoEncriptado = textoEncriptado.replace(/enter/g, 'e');
        textoEncriptado = textoEncriptado.replace(/imes/g, 'i');
        textoEncriptado = textoEncriptado.replace(/ober/g, 'o');
        textoEncriptado = textoEncriptado.replace(/ufat/g, 'u');
        
        
        alert('Texto Desencriptado con exito')
        textoDesencriptado = textoEncriptado
        resultado.textContent = textoDesencriptado;
        divResultado.style.display = 'flex';
    
        divImagen.style.display = 'none';
        divParrafos.style.display = 'none';
        
    }else{
        alert('Ingrese el texto que desea Encriptar o Desencriptar' )
    }


    
}

function copiarTexto() {
    const texto = document.querySelector('.resultado__texto').value;
    if (texto.trim() !== '') { // Verificar si hay texto en el textarea
        navigator.clipboard.writeText(texto)
            .then(function() {
                alert('Texto copiado');
            })
            .catch(function(error) {
                console.error('Error al copiar texto: ', error);
                alert('Error al copiar texto');
            });
    } 
    }


