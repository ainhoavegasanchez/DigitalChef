<?php declare(strict_types=1);

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');
date_default_timezone_set('Europe/Madrid');


require '../Conexion/ConexionPdo.php';

$conexion = new ConexionPdo();
$pdo = $conexion::conectar();


//TODO: PUEDE QUE TENGAMOS QUE INSERTAR EL ID DEL USUARIO PARA QUE PODAMOS VER TODOS LOS PEDIDOS D
$stmt = $pdo->prepare("SELECT id, fecha, id_usuario FROM PEDIDO where id_usuario = $_GET[id_usuario]");
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);
