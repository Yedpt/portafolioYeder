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

function openInNewTab(url) { // al hacer click te abre otra pestaña re dirigiendote al sitio que indiques.
    window.open(url, '_blank');
}