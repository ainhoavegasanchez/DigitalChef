<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../Conexion/ConexionPdo.php';
$conexion = new ConexionPdo();
$pdo = $conexion::conectar();


$json = file_get_contents('php://input');
 
$params = json_decode($json);


$stmt = $pdo->prepare("UPDATE USUARIO set pass=:pass where email=:email");
$stmt->execute([
   ":pass"=>$params->pass,
   ":email"=>$params->email
]);


class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type: application/json');
echo json_encode($response);  