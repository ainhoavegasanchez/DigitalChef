<?php declare(strict_types=1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');
date_default_timezone_set('Europe/Madrid');


require '../Conexion/ConexionPdo.php';

$conexion = new ConexionPdo();
$pdo = $conexion::conectar();

$stmt = $pdo->prepare("SELECT id, fecha, id_usuario FROM PEDIDO where id_usuario=$_GET[id_usuario]");
$stmt->execute();
$result = $stmt->fetchAll();
echo json_encode($result);