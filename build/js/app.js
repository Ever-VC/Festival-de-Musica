function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival");window.addEventListener("scroll",(function(){window.scrollY;t.getBoundingClientRect().top<=0?e.classList.add("fixed"):e.classList.remove("fixed")}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=16;t++){const c=document.createElement("IMG");c.src=`src/img/gallery/full/${t}.jpg`,c.alt="Imagen Galeria",c.onclick=function(){mostrarImagen(c)},e.appendChild(c)}}function mostrarImagen(e){const t=document.createElement("DIV");t.classList.add("modal"),t.onclick=cerrarModal;const c=document.createElement("BUTTON");c.textContent="X",c.classList.add("btn-cerrar"),c.onclick=cerrarModal;const o=document.createElement("IMG");o.src=e.src,o.alt=e.alt,t.appendChild(o),t.appendChild(c);const n=document.querySelector("body");n.classList.add("overflow-hidden"),n.appendChild(t)}function cerrarModal(e){const t=document.querySelector(".modal");t.classList.add("fade-out"),setTimeout((()=>{t?.remove();document.querySelector("body").classList.remove("overflow-hidden")}),500)}function resaltarEnlace(){document.addEventListener("scroll",(()=>{const e=document.querySelectorAll("section"),t=document.querySelectorAll(".navegacion-principal a");let c="";e.forEach((e=>{const t=e.offsetTop,o=e.clientHeight;window.scrollY>=t-o/3&&(c=e.id)})),t.forEach((e=>{e.classList.remove("active"),e.getAttribute("href")===`#${c}`&&e.classList.add("active")}))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))}document.addEventListener("DOMContentLoaded",(function(){navegacionFija(),crearGaleria(),resaltarEnlace(),scrollNav()}));