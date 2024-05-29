<?php

namespace Recursos;

require '../vendor/autoload.php';
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


if (isset($_GET['id_producto'])) {
    $valoration = new getValoration();

    $result = $valoration->obtenerMedia($_GET['id_producto']);
    header('Content-Type: application/json');
    echo json_encode(['media' => $result]);
}