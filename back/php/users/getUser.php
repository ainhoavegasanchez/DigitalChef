<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


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

$stmt = $pdo->prepare("select id, nombre, email, pass from USUARIO where email=:email");
$stmt->execute([
    ":email" => $email
]);
$usuario = $stmt->fetch(PDO::FETCH_ASSOC);


if ($usuario) {
    $descifrada= desEncriptar($usuario['pass']);
    if ($descifrada == $pass) {
        echo json_encode($usuario);
    }
}
function desEncriptar(string $cadena)
{
    return openssl_decrypt(
        $cadena,
        ALGORITMO,
        CLAVE,
        0,
        IV
    );
}