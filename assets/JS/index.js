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

// Detecta la preferencia del sistema operativo
const OSTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Selecciona el botón de cambio de tema
const switchBtn = document.getElementById("switch_btn");

// Función para establecer el tema
let setTheme = (theme) => {
    localStorage.setItem("theme", theme); // Guarda el tema en localStorage
    document.documentElement.setAttribute("data-theme", theme); // Aplica el tema al atributo data-theme
};

// Función para alternar el tema
let getTheme = () => {
    let currentTheme = localStorage.getItem("theme") === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
};

// Inicializa el tema al cargar la página
let initializeTheme = () => {
    let savedTheme = localStorage.getItem("theme"); // Recupera el tema guardado en localStorage
    if (!savedTheme) {
        savedTheme = 'dark'; // Si no hay tema guardado, establece "dark" por defecto
    }
    setTheme(savedTheme);
};

// Escucha el clic en el botón para alternar el tema
switchBtn.addEventListener("click", getTheme);

// Llama a la función de inicialización
initializeTheme();


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
