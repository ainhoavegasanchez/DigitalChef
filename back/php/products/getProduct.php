<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../Conexion/ConexionPdo.php';
$conexion = new ConexionPdo();
$pdo = $conexion::conectar();

$stmt = $pdo->prepare("select id, nombre, descripcion, foto,id_catego, precio from PRODUCTO where id=:id");
$stmt->execute([":id"=>$_GET['id']]);

$producto = $stmt->fetch(PDO::FETCH_ASSOC);

$cad = json_encode($producto);
echo $cad;
header('Content-Type: application/json');