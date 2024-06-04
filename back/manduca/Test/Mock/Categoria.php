<?php declare(strict_types=1);

namespace Test\Mock;

use Modelos\Categoria as ModelCategoria;

class Categoria
{
    public static function datosCategoria(int $id): ?array
    {
        $datosCategoria = null;
        switch ($id) {
            case 5:
                $datosCategoria = ['id' => 5, 'nombre' => 'REFRESCOS SIN AZÚCAR'];
                break;
            case 15:
                $datosCategoria = ['id' => 15, 'nombre' => 'REFRESCO\'S LIGHT'];
                break;
        }
        return $datosCategoria;
    }

    public static function crearCategoria(int $id): ?ModelCategoria
    {
        $datosCategoria = self::datosCategoria($id);
        if ($datosCategoria) {
            $categoria = new ModelCategoria($datosCategoria['id'], $datosCategoria['nombre']);
        }
        return $categoria;
    }
}