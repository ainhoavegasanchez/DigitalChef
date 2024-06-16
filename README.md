# Digitalchef

DigitalChef es una aplicación web dedicada a la creación de menús digitales interactivos para restaurantes. Esta herramienta proporciona una solución innovadora que mejora la eficiencia operativa y la satisfacción del cliente en el sector de la restauración. Los menús digitales permiten actualizaciones instantáneas, personalización de ofertas y promociones en tiempo real, lo que hace la experiencia en el restaurante más agradable y eficiente.

## Índice
- [Digitalchef](#digitalchef)
  - [Índice](#índice)
  - [Objetivo](#objetivo)
  - [Tecnologías](#tecnologías)
  - [Instalacion](#instalacion)
  - [Despliegue](#despliegue)

## Objetivo
El objetivo principal de DigitalChef es mejorar la eficiencia operativa y la experiencia del cliente en el sector de la restauración mediante la implementación de un menú digital interactivo y actualizable en tiempo real.

## Tecnologías
DigitalChef utiliza Angular para el front-end, PHP y MySQL para el back-end, junto con Docker para el entorno de desarrollo y despliegue. La interfaz se basa en NZ Zorro y Bootstrap para garantizar una experiencia de usuario optimizada y adaptable.

## Instalacion

Requisitos:
    Docker (Docker Desktop para local)
    GitHub (si se despliega en un servidor)

Pasos:

Descargar el repositorio desde GitHub.

En back/php/Conexion, crear un archivo .envLocal:

        HOST=127.0.0.1
        USER=root
        PASSWORD=root
        BD=MENU

En api/, crear un archivo environmentLocal.ts:

        export const environment = {
        production: false,
        API_URL: 'https://{nombre_de_servidor}/Recursos',
        mapBoxToken: 'pk.eyJ1IjoiYWluaG9hdmVnYTk5IiwiYSI6ImNsd3o4OXoxNDA0c2o...'
        };

Ejecutar el comando:

        docker-compose up --build


Si fallan los puertos modificarlos en el docker-compose a uno que no esté en uso.


## Despliegue
Para desplegar la aplicación tenemos que entrar en el directorio api y ejecutar el comando ng serve.

Si lo que queremos es compilarla con el comando ng build en el mismo directorio