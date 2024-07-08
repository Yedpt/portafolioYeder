# Portfolio

Portfolio Yeder pimentel 

clonar el portofolio para tenerlo en repositorio local:

**git clone https://github.com/Yedpt/portafolioYeder.git**

figma del portafolio diseñada por Ana:

**https://www.figma.com/design/zX7ACEM6yiIAyNy2uNVNTo/Portfolio-Yeder-Pimentel?node-id=1-2&t=4do2HG02FTSzQ8Ps-0**

## Índice
1. [Menu](#menu-encabezado)
2. [inicio](#inicio)
3. [Sobre mí](#sobre-mí)
4. [skills](#skills)
5. [portafolio](#portafolio)
6. [contacto](#contacto)
7. [footer](#footer)
8. [mediaQueries](#mediaQueries)


## Introduccion general:

En este portafolio presentaré los proyectos que he desarrollado, demostrando mis conocimientos y habilidades en diversas tecnologías de programación. En este caso se ha usado tanto HTML, CSS y JS

## menu-encabezado:

### html:

- hemos creado un contenedor principal (container-header) para aplicar estilos especificos a dicha cabecera
- tenemos el header que define la seccion de cabecera de la pagina, donde tendremos el logotipo y el menu de navegacion.
- tenemos la seccion de navegacion principal del portafolio en donde tenemos en una lista desordenada (ul) con los elementos del menu

### CSS: 
-En el contenerdor principal fijamos la posicion en la parte superior de la pantalla con position : fixed.
- con z-index definimos la superposicion con otros elementos asegurando que este por encima.
- damos un ancho maximo con max-width , utilizamos flexbox para el diseño interno. asi como tambien usamos display flex en la parte del diseño de las listas ul.
### JS : 
- en esta parte del menu de navegacion incluye un pequeño trozo de codigo JS , en él declaramos una variable "menuvisible" y la inicializamos a false , con esta variable rastrearemos el menu para ver si esta visible o no.
- en la funcion MostrarOcultarMenu añadimos una condicional if , con la intencion de que si la variable menuvisible es true el menu sea visible, asi, ejecuta el bloque de codigo dentro del if.
- en ese bloque if se obtiene el elemento con el id "nav" , establece su propiedad "classlist" como una cadena vacia, quitando cualquier clase previamente aplicada.
- al mismo tiempo en dicho bloque se cambia el estado de la variable a false para que el menu ya no este visible.
- en la parte del else se obtiene el elemento con el id "nav"  y establece su propiedad "classlist" con el valor "responsive" aplicando esta clase al elemento , cambia el estado de la variable a true indicando que el menú está ahora visible.

## inicio

 ### html:
 en la parte de inicio como en las demas secciones lo divido en sections y procedo a colocar mi imagen/logo, profesion y enlaces a github y linkedin.
 ### CSS:
 de igual manera en la parte de inicio uso flexbox con display:flex, añadimos los estilos de color de letra , alineamos los items en el centro, a la foto/imagen añado un border radius y un border de color verde.


##  sobre-mi
### html:
en la parte de sobre mi de igual manera añado un section para trabajar en dicho elemento y añado el texto , el h2 etc.

 ### CSS:
 añado el color de letra de los textos , en el contenedor section un maximo de ancho y un margin auto , añado los estilos al h2 y bueno añado un br con estilos a cada seccion para diferenciar las secciones.

## skills 

### html:
lo mismo en la parte de skills he dividido las skills tecnicas y profesionales en 2 columnas creando un div para cada una y añadiendo la class col para despues con el css darle estilo y dividirlo en colummna 

 ### CSS:
 añado color de letra de los textos , el hr le añado los estilos correspondientes , al contenedor principal le doy un maximo de ancho , a la clase fila uso flexbox , como tengo un boton le añado los estilos , como añadir un border radius , un cursor pointer , un tamaño al boton con witdh etc.

## portafolio

### html: 
en la seccion del portafolio añado divs con la class galeria en donde tendremos todas nuestras cards de proyectos, dentro de ella creamos divs con la clase proyecto para darle y cada una sera un card/imagen de nuestros proyectos

 ### CSS:
 em el contenedor principal le añado el maximo de ancho , luego añado color a los textos , estilos al hr , añado en el div de la clase galeria flexbox y flex-wrap para que los elementos hijos (div class proyecto)  sean obligados a permanecer en una misma línea o pueden fluir en varias líneas.

## contacto

### html: 
en contacto he añadidos mis inputs en un div , en este caso no use el form , y añadi un boton para dirigir el mensaje que se quiere enviar, añadi un mapa en imagen

 ### CSS:

 lo mismo que en las demás secciones , en el contenedor principal añado un maximo de ancho, luego color a los textos , estilo al hr etc , en la clase fila añado flexbox 

## footer

### html:
en el footer añado imagenes de redes sociales importada desde una libreria llamada fontawesome
 
 ### CSS:

añadi un bgcolor , use tambien flexbox , de igual manera añadi a las clases flexbox y los diferentes estilos para estilar las imagenes que descargue de fontawesome


## mediaQueries

en la mediaqueries he usado 2 , una con un maximo de ancho e 980px y la otra con un maximo de ancho de 700px , he añadido a cada clase de tipo y cada clase flexbox