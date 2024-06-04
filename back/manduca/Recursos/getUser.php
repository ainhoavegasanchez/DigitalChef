<?php
namespace Recursos;

use Conexion\ConexionPdo;

class getUser{
    public $conexion, $pdo;

    public function __construct()
    {
        $this->conexion = new ConexionPdo();
        $this->pdo = $this->conexion::conectar(".env");
    }

    public function obtener(string $email):array{
        $stmt = $this->pdo->prepare("select id, nombre, email, pass from USUARIO where email=:email");
        $stmt->execute([
            ":email" => $email
        ]);
        $usuario = $stmt->fetch();
        return $usuario;
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
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


define('CLAVE', "PasswordUsuario");
define('ALGORITMO', "aes-128-ctr");
define('IV', 'zzzzzzzzzzzzzzzz');



$json = file_get_contents('php://input'); 
 
  $params = json_decode($json); 


  if(!is_null($params)){
      $email=$params->email;
      $pass=$params->pass;
      $user= new getUser();
      $usuario = $user->obtener($email);
      if ($usuario) {
          $descifrada= $user->desEncriptar($usuario['pass']);
          if ($descifrada == $pass) {
              echo json_encode($usuario);
          }
      }
  }




