<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

require '../Conexion/ConexionPdo.php';
$conexion = new ConexionPdo();
$pdo = $conexion::conectar();

$json = file_get_contents('php://input');
 
$params = json_decode($json);

$stmt = $pdo->prepare("INSERT INTO DETALLE_PEDIDO (id_pedido, id_producto, cantidad) VALUES (:id_pedido, :id_producto, :cantidad)");
$stmt->execute([
    ":id_pedido"=>$params->order->id,
    ":id_producto"=>$params->product->id,
    ":cantidad"=>1
]);



