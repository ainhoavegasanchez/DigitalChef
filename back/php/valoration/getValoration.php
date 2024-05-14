<?php 
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

$stmt = $pdo->prepare("SELECT AVG(valor) FROM VALORACION where id_producto=:id_producto");
$stmt->execute([
    ":id_producto" => $_GET['id_producto']
]);
$result = $stmt->fetchColumn();

header('Content-Type: application/json');
echo json_encode(['media' => $result]);