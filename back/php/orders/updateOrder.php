<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../Conexion/ConexionPdo.php';
$conexion = new ConexionPdo();
$pdo = $conexion::conectar();

$json = file_get_contents('php://input');
$params = json_decode($json);
$id = $params->id;

$stmt = $pdo->prepare("SELECT id_producto, cantidad FROM DETALLE_PEDIDO where id_pedido=:id");
$stmt->execute([
    ":id" => $id
]);
$details = $stmt->fetchAll(PDO::FETCH_ASSOC);
$total = 0;

foreach ($details as $detail) {
    $stmt = $pdo->prepare("SELECT precio FROM PRODUCTO WHERE id=:id_producto");
    $stmt->execute([
        ":id_producto" => $detail['id_producto']
    ]);
    $precio = $stmt->fetch(PDO::FETCH_ASSOC);
    $total += $precio['precio'] * $detail['cantidad'];
}

$stmt = $pdo->prepare("UPDATE PEDIDO set total = :total where id=:id");
$stmt->execute([
    ":total" => $total,
    ":id" => $id
]);

$stmt = $pdo->prepare("SELECT id, id_usuario, total FROM PEDIDO where id=:id");
$stmt->execute([
    ":id" => $id
]);
$order= $stmt->fetch(PDO::FETCH_ASSOC);


header('Content-Type: application/json');
echo json_encode($order);