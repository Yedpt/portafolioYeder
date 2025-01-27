// codigo para ocultar y mostrar el menu 

let menuVisible = false
//funcion que oculta y muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList =""   /*classList: propiedad del objeto Element que nos permite acceder y manipular los datos de nodos HTML en el DOM. Esta propiedad en particular nos devuelve un listado de los valores del atributo class de un elemento (DOMTokenList). En este sentido es una propiedad de solo lectura. */
        menuVisible = false
    }else{
        document.getElementById("nav").classList ="responsive"
        menuVisible = true
    }
}
/* dark theme and light theme */

const OSTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const switchBtn = document.getElementById("switch_btn")

let setTheme = (theme) => {
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
}

let getTheme = () => {
    let switchTheme = localStorage.getItem("theme") === 'dark' ? "light" : "dark"
    setTheme(switchTheme)
}

switchBtn.addEventListener("click", getTheme)

setTheme(localStorage.getItem("theme" ||OSTheme))

/* funcion para cambiar de idioma */

// Función para cambiar el idioma
function cambiarIdioma(idioma) {
    // Selecciona todos los elementos con atributos `data-es` y `data-en`
    const elementos = document.querySelectorAll('[data-es], [data-en]');

    // Recorre cada elemento y cambia el texto según el idioma seleccionado
    elementos.forEach(elemento => {
        const texto = elemento.getAttribute(`data-${idioma}`); // Obtiene el texto para el idioma
        if (texto) {
            elemento.textContent = texto; // Cambia el texto visible
        }
    });

    // Cambia el atributo `lang` del HTML para accesibilidad
    document.documentElement.setAttribute('lang', idioma);
}

// Establecer el idioma predeterminado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cambiarIdioma('es'); // Idioma por defecto: español
});

// funcion que al hacer click te abre otra pestaña redirigiendote al link que indiques
function openInNewTab(url) { 
    window.open(url, '_blank');
}
