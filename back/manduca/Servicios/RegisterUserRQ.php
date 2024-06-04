<?php declare(strict_types=1);

namespace Servicios;

use SimpleXMLElement;
use Constructores\Usuario as ConstructorUsuario;
use Recursos\Usuario as RescursoUsuario;

class RegisterUserRQ
{
    public static function procesarPeticion(SimpleXMLElement $xmlDatos)
    {
        $usuario = ConstructorUsuario::crear($xmlDatos);
        if ($usuario) {
            $recursoUsuario = new RescursoUsuario();
            $idUsuario = $recursoUsuario->insertar([
                'NICK' => $usuario->nick,
                'PASSWORD' => $usuario->password,
                'PHONE' => $usuario->telefono
            ]);
            if ($idUsuario > 0) {
                $recursoUsuario->actualizar(
                    $idUsuario,
                    [
                        'NAME' => $usuario->nombre,
                        'SURNAME' => $usuario->apellidos,
                    ]
                );
            }
        }
    }
}