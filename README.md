# Proyecto Angular - Almacenamiento de Pokemons

Este es un proyecto en Angular que consiste en un sistema para almacenar pokemons y generar una aplicación móvil. La aplicación permite buscar pokemons por nombre, número de pokemon, tipo de pokemon y tipo.

## Almacenamiento de Datos

En este proyecto, he tomado la decisión de almacenar los datos en el local storage del navegador. Esto me permite guardar y recuperar los datos de manera sencilla sin necesidad de utilizar una base de datos.

## Maquetación

Antes de iniciar el desarrollo, realicé la maquetación del proyecto teniendo en cuenta el requisito de ser una aplicación móvil first. Esto significa que el diseño está optimizado para dispositivos móviles, pero también es responsive y se adapta a pantallas de mayor tamaño.

## Desarrollo en Angular

El proyecto fue inicializado en Angular 15 y se utilizaron varios conceptos y características de este framework.

### Servicio de Datos

Para manejar la lógica de almacenamiento y manipulación de los pokemons, creé un archivo service donde definí todos los métodos necesarios. Estos métodos son síncronos y se encargan de insertar y seleccionar pokemons en el local storage.

### Codificación de Vistas

Una vez que los métodos de datos estaban funcionales, procedí a la codificación de las vistas de la aplicación. Estas vistas están diseñadas de manera responsive y se adaptan a dispositivos móviles. Se utilizó Angular para la generación dinámica de contenido y la interacción con los datos almacenados.

### Uso de Observables y Suscripciones

Para asegurar la sincronía y evitar conflictos en el futuro, decidí implementar métodos rxjs en mi proyecto. Estos métodos hacen que las operaciones dependan de Observables y se suscriban a ellos. Esta implementación permite una mejor integración si se desea consumir una API en el futuro.

### Estilos y Formulario

Una vez que las funcionalidades principales estaban implementadas, me enfoqué en los estilos de la aplicación para pantallas de escritorio. Además, agregué un formulario para agregar nuevos pokemons al sistema. Estas dos tareas fueron completadas con éxito.

### Refactorización y Estándares

Finalmente, realicé una refactorización del código para asegurar que cumpla con los estándares y buenas prácticas. También realicé ajustes adicionales en los estilos para mejorar la apariencia de la aplicación.

## Implementación de una Base de Datos

En este proyecto, no se implementó un gestor de bases de datos. Sin embargo, si se desea utilizar una base de datos en el futuro, se deben seguir las siguientes instrucciones:

1. Descargar e instalar el gestor de bases de datos de tu elección.
2. Crear una nueva base de datos para el proyecto.
3. Actualizar la configuración de la conexión a la base de datos en el archivo de configuración del proyecto.
4. Ejecutar los scripts de creación de tablas y/o importar los datos iniciales necesarios.
5. Actualizar el código del servicio de datos para utilizar la nueva conexión a la base de datos.

## Instrucciones de Ejecución

Sigue estos pasos para ejecutar el proyecto:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias del proyecto.
4. Ejecuta el comando `ng serve` para iniciar el servidor de desarrollo.
5. Abre tu navegador web y ve a `http://localhost:4200` para ver la aplicación en funcionamiento.

¡Disfruta de la aplicación para almacenar y buscar pokemons en Angular!
