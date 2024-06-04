<?php declare(strict_types=1);

namespace Servicios;

use Comun\CargarFijo;
use Comun\TestCase as ModelTestCase;
use Constantes\Entorno;

class RegisterUserRQTest extends ModelTestCase
{
    public function testInsertarUsuario()
    {
        $xml = CargarFijo::cargarXml(Entorno::RUTA . "Usuario/Francisco.xml");
        RegisterUserRQ::procesarPeticion($xml);
    }
}