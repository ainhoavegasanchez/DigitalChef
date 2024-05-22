FROM node:18


RUN mkdir -p /usr/src/app


WORKDIR /usr/src/app


RUN npm install -g @angular/cli

COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install


COPY . .

# Expone el puerto que usa Angular (por defecto 4200)
EXPOSE 4200

# Comando para iniciar la aplicación
CMD ["ng", "serve", "--host", "0.0.0.0"]
