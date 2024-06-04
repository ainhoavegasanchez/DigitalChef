<?php declare(strict_types=1);

namespace Recursos;
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

use Conexion\ConexionPdo;

class Pedido
{
    public $linkPdo, $pdo;

    public function __construct()
    {
        $this->linkPdo = new ConexionPdo();
        $this->pdo = $this->linkPdo::conectar(".env");
    }


    public function insertar(object $params): int
    {
        $fecha = new DateTime();
        $stmt = $this->pdo->prepare("INSERT INTO PEDIDO(fecha, id_usuario) VALUES(:fecha, :id_usuario)");
        $stmt->execute([
            ":fecha" => $fecha,
            ":id_usuario" => $params->id
        ]);
        return (int)$this->pdo->lastInsertId();
    }

    public function obtener(int $idPedido): array
    {
        $stmt = $this->pdo->prepare("SELECT id, id_usuario, fecha, total FROM PEDIDO WHERE id=:id");
        $stmt->execute([
            ":id" => $idPedido
        ]);
        $order = $stmt->fetch();
        return $order;
    }

}

$json = file_get_contents('php://input');
$params = json_decode($json);
$order = new Pedido();
$id = $order->insertar($params);
$nuevoOrder = $order->obtener($id);
header('Content-Type: application/json');
echo json_encode($nuevoOrder);