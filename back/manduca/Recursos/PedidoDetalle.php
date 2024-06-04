<?php declare(strict_types=1);

namespace Recursos;

use Conexion\ConexionPdo;

class PedidoDetalle
{
    public $linkPdo, $pdo;

    public function __construct()
    {
        $this->linkPdo = new ConexionPdo();
        $this->pdo = $this->linkPdo::conectar(".env");
    }

    public function insertar(int $idPedido, int $idProducto, int $cantidad): int
    {
        $resourceProducto = new Producto();
        $datosProducto = $resourceProducto->obtener($idProducto);

        $sql = "INSERT INTO PEDIDOS_DETALLE (ID_PEDIDO,CANTIDAD,ID_PRODUCTO,IMPORTE) " .
            "VALUES (:idPedido,:cantidad,:idProducto,:importe)";
        $this->pdo->prepare($sql)->execute([
            ":idPedido" => $idPedido,
            ":cantidad" => $cantidad,
            ":idProducto" => $idProducto,
            ":importe" => $cantidad * $datosProducto['PRECIO'],
        ]);
        return (int)$this->pdo->lastInsertId();
    }

    public function obtenerDetalle(int $idPedido): ?array
    {
        $result = null;
        $sql = "SELECT ID,ID_PEDIDO,CANTIDAD,ID_PRODUCTO,IMPORTE " .
            "FROM PEDIDOS_DETALLE WHERE ID_PEDIDO=:idPedido";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([":idPedido" => $idPedido]);
        if ($rs = $stmt->fetchAll()) {
            $result = $rs;
        }
        return $result;
    }

}