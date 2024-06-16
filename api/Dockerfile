
# Usa una imagen base de Node.js para la construcción
FROM node AS build

# Crea el directorio de la aplicación
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Instala Angular CLI globalmente
RUN npm install -g @angular/cli

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .
COPY environmentLocal.ts ./environment.ts

# Construye la aplicación Angular en modo produccióncd api
RUN ng build
COPY .htaccess /usr/src/dist/
