<?php declare(strict_types=1);

namespace Test\Mock;

use Modelos\Producto as ModelProducto;

class Producto
{
    public static function datosProducto(int $id): ?array
    {
        $datosProducto = null;
        switch ($id) {
            case 775:
                $datosProducto = [
                    "id" => 775,
                    "nombre" => "Pizza Margarita",
                    "categoria" => 15
                ];
                break;
        }
        return $datosProducto;
    }

    public static function crearProducto(int $id): ?ModelProducto
    {
        $datosProducto = self::datosProducto(775);
        if ($datosProducto) {
            $producto = new ModelProducto(775, $datosProducto['nombre']);
        }
        return $producto;
    }
}