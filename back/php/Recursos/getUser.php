<?php
namespace Recursos;
require __DIR__.'/../vendor/autoload.php';
use Conexion\ConexionPdo;
use Constantes\Constantes;

class getUser
{
    public $conexion, $pdo;

    public function __construct()
    {
        $this->conexion = new ConexionPdo();
        $this->pdo = $this->conexion::conectar(".env");
    }

    public function obtener(string $email): array
    {
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
            Constantes::get('ALGORITMO'),
            Constantes::get('CLAVE'),
            0,
            Constantes::get('IV')
        );
    }
}

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);


$json = file_get_contents('php://input');

$params = json_decode($json);


if (!is_null($params)) {
    $email = $params->email;
    $pass = $params->pass;
    $user = new getUser();
    $usuario = $user->obtener($email);
    if ($usuario) {
        $descifrada = $user->desEncriptar($usuario['pass']);
        if ($descifrada == $pass) {
            echo json_encode($usuario);
        }
    }
}




