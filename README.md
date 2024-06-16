# Digitalchef

DigitalChef es una aplicación web dedicada a la creación de menús digitales interactivos para restaurantes. Esta herramienta proporciona una solución innovadora que mejora la eficiencia operativa y la satisfacción del cliente en el sector de la restauración. Los menús digitales permiten actualizaciones instantáneas, personalización de ofertas y promociones en tiempo real, lo que hace la experiencia en el restaurante más agradable y eficiente.

## Índice

- [Introducción](#Introduccion)
- [Instalación](#Instalacion)

## Instalacion

Requisitos:
    Docker (Docker Desktop para local)
    GitHub (si se despliega en un servidor)
    
Pasos:
    - Descargar el repositorio desde GitHub.
    - Crear ficheros de entorno para la conexión a la base de datos:
    - En back/php/Conexion, crear un archivo .envLocal:

        HOST=127.0.0.1
        USER=root
        PASSWORD=root
        BD=MENU
    - En api/, crear un archivo environmentLocal.ts:

        export const environment = {
        production: false,
        API_URL: 'https://{nombre_de_servidor}/Recursos',
        mapBoxToken: 'pk.eyJ1IjoiYWluaG9hdmVnYTk5IiwiYSI6ImNsd3o4OXoxNDA0c2o...'
        };

    - Ejecutar el comando:

        docker-compose up --build

