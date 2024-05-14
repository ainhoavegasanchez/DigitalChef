<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


ini_set('error_reporting', E_ALL ^ E_NOTICE ^ E_WARNING);
ini_set('display_errors', 'on');
ini_set('max_execution_time', 10);

define('CLAVE', "PasswordUsuario");
define('ALGORITMO', "aes-128-ctr");
define('IV', 'zzzzzzzzzzzzzzzz');


require './Mail.php';

require '../Conexion/ConexionPdo.php';
$conexion = new ConexionPdo();
$pdo = $conexion::conectar();


$json = file_get_contents('php://input');
 
$params = json_decode($json);

$email=$params->email;

$stmt = $pdo->prepare("SELECT id, nombre FROM USUARIO WHERE email=:email");
$stmt->execute([
   ":email"=>$email
]);

$usuario = $stmt->fetch(PDO::FETCH_ASSOC);

  
if($usuario){

$mail = new mail("al.ainhoa.vega.sanchez@iesportada.org", "ifup mgjc yztj vrtw", "DigitalChef");
$pass = generaPass();
$correo = [
    "title" => "Hola desde DigitalChef",
    "body" => "Esta es su nueva contraseña:" . $pass,
    "para" => $email
];

$mail->enviarCorreo($correo);

  $hash = generatePasswordHash($pass);
  $stmt = $pdo->prepare("UPDATE USUARIO SET pass=:pass where email=:email");
$stmt->execute([
":pass"=>$hash,
   ":email"=>$email
]);


}


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
function generaPass(){  
    $cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $longitudCadena=strlen($cadena);    
    $pass = "";
    $longitudPass=8;    
    for($i=1 ; $i<=$longitudPass ; $i++){
        $pos=rand(0,$longitudCadena-1);     
        $pass .= substr($cadena,$pos,1);
    }
    return $pass;
}