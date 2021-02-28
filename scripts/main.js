let miImagen = document.querySelector('img');

miImagen.onclick = function(){
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === 'images/image.jpg'){
        miImagen.setAttribute('src', 'images/image2.jpg');
    } else{
        miImagen.setAttribute('src', 'images/image.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es genial, ' + miNombre;
}

if(!localStorage.getItem('nombre')){
    estableceNombreUsuario();
}else{
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado;
}

miBoton.onclick = function(){
    estableceNombreUsuario();
}

