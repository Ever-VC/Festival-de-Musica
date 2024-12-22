document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    // Crear 16 imagenes y agregarlas a la galeria
    const CANTIDAD_IMAGENES = 16;
    const URL_IMAGENES = 'src/img/gallery/full/';
    for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `${URL_IMAGENES}${i}.jpg`;
        imagen.alt = 'Imagen Galeria';
        galeria.appendChild(imagen);
    }
}

const obtenerURLImagen = (imagen) => {
    return imagen.src;
}