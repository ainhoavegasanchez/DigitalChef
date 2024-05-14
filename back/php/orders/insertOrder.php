
<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../Conexion/ConexionPdo.php';
$conexion = new ConexionPdo();
$pdo = $conexion::conectar();

$json = file_get_contents('php://input');
 
$params = json_decode($json);

$fecha= date('Y-m-d H:i:s');

$stmt = $pdo->prepare("INSERT INTO PEDIDO(fecha, id_usuario) VALUES(:fecha, :id_usuario)");
$stmt->execute([
    ":fecha" => $fecha,
    ":id_usuario" => $params->id
]);


$orderId= $pdo->lastInsertId();
$stmt = $pdo->prepare("SELECT id, id_usuario, fecha, total FROM PEDIDO WHERE id=:id");
$stmt->execute([
    ":id"=>$orderId
]);
$order=$stmt->fetch(PDO::FETCH_ASSOC);
header('Content-Type: application/json');
echo json_encode($order);