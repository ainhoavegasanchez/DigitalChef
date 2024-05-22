<?php

namespace Recursos;

use Conexion\ConexionPdo;

class updateUser
{
    public $conexion, $pdo;

    public function __construct()
    {
        $this->conexion = new ConexionPdo();
        $this->pdo = $this->conexion::conectar(".env");
    }

    public function actualizar(object $params)
    {
        $stmt = $this->pdo->prepare("UPDATE USUARIO set nombre=:nombre, email=:email
 where id=:id");
        $stmt->execute([
            ":nombre" => $params->name,
            ":email" => $params->email,
            ":id"=>$params->id
        ]);
    }

    public function obtener(int $id):array{
        $stmt = $this->pdo->prepare("SELECT nombre, email FROM USUARIO
 where id=:id");
        $stmt->execute([
            ":id"=>$id
        ]);
        $usuario = $stmt->fetch();
        return $usuario;
    }
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$json = file_get_contents('php://input');

$params = json_decode($json);

if (!is_null($params)) {
    $user = new updateUser();
    $user->actualizar($params);

    class Result
    {
    }

    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'datos modificados';

    header('Content-Type: application/json');
    echo json_encode($response);
}