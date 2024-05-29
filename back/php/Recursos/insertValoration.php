<?php declare(strict_types=1);

namespace Recursos;
require '../vendor/autoload.php';
use Conexion\ConexionPdo;

class insertValoration
{

    public $conexion, $pdo;

    public function __construct()
    {
        $this->conexion = new ConexionPdo();
        $this->pdo = $this->conexion::conectar(".env");
    }


    public function insertar(object $params): int
    {
        $stmt = $this->pdo->prepare("INSERT INTO VALORACION (id_producto, id_usuario, valor) VALUES (:id_producto, :id_usuario, :valor)");
        $stmt->execute([
            ":id_producto" => $params->id_producto,
            ":id_usuario" => $params->user->id,
            ":valor" => $params->valor
        ]);
        return (int)$this->pdo->lastInsertId();
    }

    public function obtener(object $params): array
    {
        $stmt = $this->pdo->prepare("SELECT id, valor, id_producto, valor, id_usuario FROM VALORACION where id_producto=:id_producto and id_usuario=:id_usuario");
        $stmt->execute([
            ":id_producto" => $params->id_producto,
            ":id_usuario" => $params->user->id
        ]);
        $valoracion = $stmt->fetch();
        return $valoracion;
    }

    public function obtenerPorId(int $id): array
    {
        $stmt = $this->pdo->prepare("SELECT id, valor, id_producto, valor, id_usuario FROM VALORACION where id=:id");
        $stmt->execute([
            ":id" => $id,

        ]);
        $valoracion = $stmt->fetch();
        return $valoracion;
    }

    public function actualizar(object $params): void
    {
        $stmt = $this->pdo->prepare("UPDATE VALORACION set valor=:valor where id_producto=:id_producto and id_usuario=:id_usuario");
        $stmt->execute([
            ":valor" => $params->valor,
            ":id_producto" => $params->id_producto,
            ":id_usuario" => $params->user->id
        ]);

    }

}


$json = file_get_contents('php://input');
$params = json_decode($json);
if (!is_null($params)) {
    $valoration = new insertValoration();

    $valoracion = $valoration->obtener($params);
    if (!$valoracion) {
        $valoration->insertar($params);
    } else {
        $valoration->actualizar($params);
    }

    header('Content-Type: application/json');
    echo json_encode($valoracion);
}