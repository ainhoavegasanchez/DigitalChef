<?php declare(strict_types=1);
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');
date_default_timezone_set('Europe/Madrid');

require '../Conexion/ConexionPdo.php';

define('XML', '../products.xml');
$conexion = new ConexionPdo();
$pdo = $conexion::conectar();

$xml = simplexml_load_file(XML);
if ($xml === false) {
    exit('Error al cargar el archivo XML.');
}

$productos = $xml->producto;
foreach ($productos as $producto) {
    $stmt = $pdo->prepare("INSERT INTO PRODUCTO(id, nombre, descripcion,id_catego, foto, precio) VALUES(NULL,:nombre, :descripcion,:id_catego,  :foto, :precio)");
    $stmt->execute([
        ":nombre" => (string)$producto->nombre,
        ":descripcion" => (string)$producto->descripcion,
        ":id_catego"=>(int)$producto->id_catego,
        ":foto" => (string)$producto->foto,
        ":precio" => (float)$producto->precio
    ]);
}

