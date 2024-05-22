<?php

namespace Recursos;


use Conexion\ConexionPdo;

class getValoration
{
    public $conexion, $pdo;

    public function __construct()
    {
        $this->conexion = new ConexionPdo();
        $this->pdo = $this->conexion::conectar(".env");
    }

    public function obtenerMedia(int $param): float
    {
        $stmt = $this->pdo->prepare("SELECT AVG(valor) FROM VALORACION where id_producto=:id_producto");
        $stmt->execute([
            ":id_producto" => $param
        ]);
        $result = $stmt->fetchColumn();
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
if (isset($_GET['id_producto'])) {
    $valoration = new getValoration();

    $result = $valoration->obtenerMedia($_GET['id_producto']);
    header('Content-Type: application/json');
    echo json_encode(['media' => $result]);
}