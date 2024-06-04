<?php declare(strict_types=1);

namespace Recursos;

use Conexion\ConexionPdo;
class Producto
{
    public $linkPdo, $pdo;
    public function __construct()
    {
        $this->linkPdo = new ConexionPdo();
        $this->pdo = $this->linkPdo::conectar(".env");
    }
    public function obtener(int $idProducto): ?array
    {
        $result = null;
        $sql = "SELECT ID, NOMBRE, PRECIO FROM PRODUCTOS WHERE ID=:idProducto";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([":idProducto" => $idProducto]);
        if ($rs = $stmt->fetch()) {
            $result = $rs;
        }
        return $result;
    }
}