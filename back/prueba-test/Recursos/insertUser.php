<?php
namespace Recursos;
use Conexion\ConexionPdo;

class insertUser
{
    public $conexion, $pdo;

    public function __construct()
    {
        $this->conexion = new ConexionPdo();
        $this->pdo = $this->conexion::conectar(".env");
    }

    public function obtener(string $email)
    {
        $stmt = $this->pdo->prepare("SELECT nombre, pass, email from USUARIO where 
        email=:email");
        $stmt->execute([
            ":email" => $email
        ]);
        $usuario = $stmt->fetch();
        return $usuario;
    }

    public function insertar(string $nombre, string $pass, string $email):int{
        $stmt = $this->pdo->prepare("INSERT INTO USUARIO(id, nombre, pass, email) VALUES(NULL,:nombre, :pass, :email)");
        $stmt->execute([
            ":nombre" => $nombre,
            ":pass" => $pass,
            ":email" => $email
        ]);
        return $this->pdo->lastInsertId();
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

}

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

define('CLAVE', "PasswordUsuario");
define('ALGORITMO', "aes-128-ctr");
define('IV', 'zzzzzzzzzzzzzzzz');


$json = file_get_contents('php://input');

$params = json_decode($json);

if (!is_null($params)) {
    $email = $params->email;
    $pass = $params->pass;
    $nombre = $params->name;

    $user = new insertUser();

    $pass = $user->generatePasswordHash($pass);

    $usuario = $user->obtener($email);
    if (!$usuario) {
        $user->insertar($nombre, $pass, $email);
    }

    header('Content-Type: application/json');
    echo json_encode($usuario);


}