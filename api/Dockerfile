FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY package*.json .

RUN npm install

COPY . .
COPY environmentLocal.ts ./enviroment.ts

CMD ["ng", "serve", "--host", "0.0.0.0"]