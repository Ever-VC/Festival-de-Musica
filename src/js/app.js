document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
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
    const URL_IMAGENES = 'src/img/gallery/thumb/';
    for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        // Crear imagen
        const imagen = document.createElement('PICTURE');
        imagen.innerHTML = `
            <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
        `;

        // Agregar evento click a la imagen (Event Handler) para mostrar la imagen en el modal
        imagen.onclick = function() {
            mostrarImagen(i);
        }

        // Agregar imagen a la galeria
        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id) {
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
    const imagen = document.createElement('PICTURE');
    imagen.innerHTML = `
        <source srcset="build/img/gallery/full/${id}.avif" type="image/avif">
        <source srcset="build/img/gallery/full/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${id}.jpg" alt="imagen galeria">
    `;

    // Agregar imagen al modal
    modal.appendChild(imagen);

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

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const section = document.querySelector(e.target.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
}