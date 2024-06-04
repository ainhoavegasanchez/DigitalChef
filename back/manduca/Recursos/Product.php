<?php declare(strict_types=1);

namespace Recursos;

use Conexion\ConexionPdo;
class Product
{
    public $linkPdo, $pdo;
    public function __construct()
    {
        $this->linkPdo = new ConexionPdo();
        $this->pdo = $this->linkPdo::conectar(".env");
    }


    public function insertar(object $datosProducto): int
    {
        $stmt = $this->pdo->prepare(
            "INSERT INTO PRODUCTO(id, nombre, descripcion,id_catego, foto, precio) 
                        VALUES(NULL,:nombre, :descripcion,:id_catego,  :foto, :precio)");
        $stmt->execute([
            ":nombre" => (string)$datosProducto->nombre,
            ":descripcion" => (string)$datosProducto->descripcion,
            ":id_catego"=>(int)$datosProducto->id_catego,
            ":foto" => (string)$datosProducto->foto,
            ":precio" => (float)$datosProducto->precio
        ]);
        return (int)$this->pdo->lastInsertId();
    }
    public function obtener(int $idProducto): ?array
    {
        $result = null;
        $sql = "SELECT id,nombre,descripcion, foto, precio, id_catego FROM PRODUCTO WHERE id=:idProducto";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([":idProducto" => $idProducto]);
        if ($rs = $stmt->fetch()) {
            $result = $rs;
        }
        return $result;
    }
}
