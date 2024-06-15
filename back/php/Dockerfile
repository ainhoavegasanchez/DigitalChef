FROM php:8.3-apache

RUN a2enmod rewrite  
RUN a2enmod headers
RUN docker-php-ext-install pdo_mysql
RUN apt-get update && apt-get install -y \
    libxml2-dev \
    && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install xml

WORKDIR /var/www/html/php

COPY --from=prueba-angular:latest /usr/src/dist /var/www/html/dist

COPY . /var/www/html/php
COPY /Conexion/.envLocal /var/www/html/php/Conexion/.env
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf
COPY apache2.conf /etc/apache2/apache2.conf

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');" && \
    mv composer.phar /usr/local/bin/composer


RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html
RUN chown -R www-data:www-data /var/www/html/php
RUN chmod -R 755 /var/www/html/php

RUN composer dump-autoload