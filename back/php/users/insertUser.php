<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

define('CLAVE', "PasswordUsuario");
define('ALGORITMO', "aes-128-ctr");
define('IV', 'zzzzzzzzzzzzzzzz');


require '../Conexion/ConexionPdo.php';

$conexion = new ConexionPdo();
$pdo = $conexion::conectar();

$json = file_get_contents('php://input'); 
 
  $params = json_decode($json); 
  $email=$params->email;
  $pass=$params->pass;
  $nombre=$params->name;

$pass = generatePasswordHash($pass);

$stmt = $pdo->prepare("SELECT nombre, pass, email from USUARIO where 
        email=:email");
$stmt->execute([
    ":email" => $email
]);
$usuario = $stmt->fetch();


if (!$usuario) {
    $stmt = $pdo->prepare("INSERT INTO USUARIO(id, nombre, pass, email) VALUES(NULL,:nombre, :pass, :email)");
    $stmt->execute([
        ":nombre" => $nombre,
        ":pass" => $pass,
        ":email" => $email
    ]);
}

header('Content-Type: application/json');
echo json_encode($usuario);

function generatePasswordHash($cadena)
{
    return openssl_encrypt(
        $cadena,
        ALGORITMO,
        CLAVE,
        0,
        IV
    );
}
