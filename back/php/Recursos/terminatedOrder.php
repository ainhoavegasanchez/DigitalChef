<?php

namespace Recursos;

require __DIR__ . '/../vendor/autoload.php';
use Conexion\ConexionPdo;

class TerrminatedOrder
{
    public $conexion, $pdo;

    public function __construct()
    {
        $this->conexion = new ConexionPdo();
        $this->pdo = $this->conexion::conectar(".env");
    }


    public function closedOrder(int $id): bool
    {

        $stmt = $this->pdo->prepare("UPDATE PEDIDO set terminado = true where id=:id");
        $stmt->execute([
            ":id" => $id
        ]);

        $rowCount = $stmt->rowCount();

        return $rowCount > 0;
    }
}

$json = file_get_contents('php://input');
$params = json_decode($json);
$id = $params->id;

$order = new TerrminatedOrder();

$closed = $order->closedOrder($id);


header('Content-Type: application/json');
echo json_encode($closed);

