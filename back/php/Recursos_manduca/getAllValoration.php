<?php


namespace Recursos;

use Conexion\ConexionPdo;

class getAllValoration
{
    public $conexion, $pdo;

    public function __construct()
    {
        $this->conexion = new ConexionPdo();
        $this->pdo = $this->conexion::conectar(".env");
    }

    public function obtenerTodos(int $idUsuario): array
    {
        $stmt = $this->pdo->prepare("SELECT id_usuario, id_producto, valor FROM VALORACION WHERE id_usuario = :id_usuario");
        $stmt->execute([
            ":id_usuario" => $idUsuario
        ]);
        $result = $stmt->fetchAll();
        return $result;
    }
}


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');
date_default_timezone_set('Europe/Madrid');


$valoration = new getAllValoration();
if (isset($_GET['id_usuario'])) {
    $result = $valoration->obtenerTodos($_GET['id_usuario']);

    header('Content-Type: application/json');
    echo json_encode($result);

}
