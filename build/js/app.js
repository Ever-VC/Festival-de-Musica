document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
});

function navegacionFija() {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', function() {
        const scroll = window.scrollY;
        const sobreFestivalTop = sobreFestival.getBoundingClientRect().top;

        if(sobreFestivalTop <= 0) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    // Crear 16 imagenes y agregarlas a la galeria
    const CANTIDAD_IMAGENES = 16;
    const URL_IMAGENES = 'src/img/gallery/full/';
    for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        // Crear imagen
        const imagen = document.createElement('IMG');
        imagen.src = `${URL_IMAGENES}${i}.jpg`;
        imagen.alt = 'Imagen Galeria';

        // Agregar evento click a la imagen (Event Handler) para mostrar la imagen en el modal
        imagen.onclick = function() {
            mostrarImagen(imagen);
        }

        // Agregar imagen a la galeria
        galeria.appendChild(imagen);
    }
}

function mostrarImagen(imagen) {
    // Crear modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');

    // Evento click para cerrar el modal
    modal.onclick = cerrarModal;

    // Agregar boton para cerrar el modal
    const btnCerrar = document.createElement('BUTTON');
    btnCerrar.textContent = 'X';
    btnCerrar.classList.add('btn-cerrar');
    btnCerrar.onclick = cerrarModal;

    // Crear imagen en el modal
    const imagenModal = document.createElement('IMG');
    imagenModal.src = imagen.src;
    imagenModal.alt = imagen.alt;

    // Agregar imagen al modal
    modal.appendChild(imagenModal);

    // Agregar boton al modal
    modal.appendChild(btnCerrar);

    // Agregal al body
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);
}

function cerrarModal(e) {
    const modal = document.querySelector('.modal');
    
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal?.remove();
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    }, 500);
    
}

function resaltarEnlace() {
    document.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');

        let actual = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${actual}`) {
                link.classList.add('active');
            }
        });
    });

}