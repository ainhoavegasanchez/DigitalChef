<?php
 declare(strict_types=1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



require '../Conexion/ConexionPdo.php';
$conexion = new ConexionPdo();
$pdo = $conexion::conectar();


$json = file_get_contents('php://input');
 
$params = json_decode($json);


$stmt = $pdo->prepare("UPDATE DETALLE_PEDIDO set cantidad = :cantidad
 where id=:id");
$stmt->execute([
    "cantidad"=> $params->count,
    ":id"=>$params->id
]);


class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);  