# Portfolio

Portfolio Yeder pimentel 

clonar el portofolio para tenerlo en repositorio local:

**git clone https://github.com/Yedpt/portafolioYeder.git**

figma del portafolio:

**https://www.figma.com/design/zX7ACEM6yiIAyNy2uNVNTo/Portfolio-Yeder-Pimentel?node-id=1-2&t=4do2HG02FTSzQ8Ps-0**

## Índice
1. [Menu](#menu-encabezado)
2. [inicio](#inicio)
3. [Sobre mí](#sobre-mí)
4. [skills](#skills)
5. [portafolio](#portafolio)
6. [contacto](#contacto)
7. [footer](#footer)

## Introduccion general:

En este portafolio presentaré los proyectos que he desarrollado, demostrando mis conocimientos y habilidades en diversas tecnologías de programación. En este caso se ha usado tanto HTML, CSS y JS

## menu-encabezado:

# html:

- hemos creado un contenedor principal (container-header) para aplicar estilos especificos a dicha cabecera
- tenemos el header que define la seccion de cabecera de la pagina, donde tendremos el logotipo y el menu de navegacion.
- tenemos la seccion de navegacion principal del portafolio en donde tenemos en una lista desordenada (ul) con los elementos del menu

# CSS: 
-En ell contenerdor principal fijamos la posicion en la parte superior de la pantalla con position : fixed.
- con z-index definimos la superposicion con otros elementos asegurando que este por encima.
- damos un ancho maximo con max-width , utilizamos flexbox para el diseño interno. asi como tambien usamos display flex en la parte del diseño de las listas ul.
# JS : 
- en esta parte del menu de navegacion incluye un pequeño trozo de codigo JS , en él declaramos una variable "menuvisible" y la inicializamos a false , con esta variable rastrearemos el menu para ver si esta visible o no.
- en la funcion MostrarOcultarMenu añadimos una condicional if , con la intencion de que si la variable menuvisible es true el menu sea visible, asi, ejecuta el bloque de codigo dentro del if.
- en ese bloque if se obtiene el elemento con el id "nav" , establece su propiedad "classlist" como una cadena vacia, quitando cualquier clase previamente aplicada.
- al mismo tiempo en dicho bloque se cambia el estado de la variable a false para que el menu ya no este visible.
- en la parte del else se obtiene el elemento con el id "nav"  y establece su propiedad "classlist" con el valor "responsive" aplicando esta clase al elemento , cambia el estado de la variable a true indicando que el menú está ahora visible.

## inicio
 # html:
 # CSS:


##  sobre-mi
# html:
 # CSS:

## skills 

# html:
 # CSS:

## portafolio

# html:
 # CSS:

## contacto

# html:
 # CSS:

## footer

# html:
 # CSS:
<!-- <header>:

Esta es la sección de navegación principal del sitio. El atributo id="nav" puede ser usado para aplicar estilos específicos o para hacer referencia a este elemento en scripts.
<ul>:

Define una lista desordenada que contiene los elementos del menú de navegación.
<li>:

Cada elemento de la lista (<li>) contiene un enlace (<a>) que apunta a diferentes secciones de la página mediante identificadores (href="#inicio", href="#sobreMi", etc.).
<li><a href="#inicio">home</a></li>: Enlace a la sección "inicio".
<li><a href="#sobreMi">Sobre mi</a></li>: Enlace a la sección "Sobre mi".
<li><a href="#skills">skills</a></li>: Enlace a la sección "skills".
<li><a href="#portafolio">portafolio</a></li>: Enlace a la sección "portafolio".
<li><a href="#contacto">contacto</a></li>: Enlace a la sección "contacto".
<div class="nav-responsive" onclick="mostrarOcultarMenu()">:

Este div es probablemente utilizado para la versión móvil del sitio web. El atributo onclick="mostrarOcultarMenu()" indica que se ejecutará una función de JavaScript llamada mostrarOcultarMenu() cuando se haga clic en este elemento.
<i class="fa-solid fa-bars"></i>: Este es un elemento de icono (usando la biblioteca de Font Awesome). El icono de barras (fa-bars) suele representar un menú hamburguesa, común en las interfaces móviles para abrir o cerrar el menú de navegación. -->


