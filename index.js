

let miImagen = document.querySelector('img');
miImagen.onclick = function() {
    let src = miImagen.getAttribute('src');
    if(src === 'imagen/Benja jugando.png') {
        miImagen.setAttribute('src', 'imagen/Benja jugando 2.jpg');
    } else {
        miImagen.setAttribute('src', 'imagen/Benja jugando.png');
    }
}


let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function establecerNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre de usuario');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Página de Benjamín, ' + miNombre;
}

if(!localStorage.getItem('nombre')){
    establecerNombreUsuario();
} else {
    let nombreUsuario = localStorage.getItem('nombre');
    miTitulo.textContent = 'Pagina de Benjamín, ' + nombreUsuario;
}

miBoton.onclick = function() {
    establecerNombreUsuario();
}