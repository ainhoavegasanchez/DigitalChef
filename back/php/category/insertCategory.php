<?php declare(strict_types=1);


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');
date_default_timezone_set('Europe/Madrid');

require '../Conexion/ConexionPdo.php';

define('XML', '../categorias.xml');
$conexion = new ConexionPdo();
$pdo = $conexion::conectar();

$xml = simplexml_load_file(XML);
if ($xml === false) {
    exit('Error al cargar el archivo XML.');
}

$categorias = $xml->categoria;
foreach ($categorias as $categoria) {
    $stmt = $pdo->prepare("INSERT INTO CATEGORIA(id, nombre) VALUES(NULL,:nombre)");
    $stmt->execute([
        ":nombre" => (string)$categoria->nombre
    ]);
}

