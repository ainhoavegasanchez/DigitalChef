<?php declare(strict_types=1);

namespace Test\Mock;

use Modelos\Usuario as ModelUsuario;

class Usuario
{
    public static function datosUsuario(int $id): ?array
    {
        $datosUsuario = null;
        switch ($id) {
            case 560:
                $datosUsuario = ['ID' => 560, 'NICK' => 'kiko', 'PASSWORD' => 'gTRfER.r'];
                break;
        }
        return $datosUsuario;
    }

    public static function crearUsuario(int $id): ?ModelUsuario
    {
        $datosUsuario = self::crearUsuario($id);
        if ($datosUsuario) {
            $usuario = new ModelUsuario($datosUsuario);
        }
        return $usuario;
    }

}