<?php
// Mostrar todas las cabeceras recibidas
$headers = getallheaders();
echo '<pre>';
print_r($headers);
echo '</pre>';

