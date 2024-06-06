<?php declare(strict_types=1);

namespace Recursos;
use Comun\TestCase as ModelTestCase;
use Comun\Cifrado;
use Constantes\Usuario as ConstanteUsuario;

class UsuarioTest extends ModelTestCase
{

    protected $resource, $idUsuario, $obtenerUsuario, $actualizarUsuario;

    public function setUp(): void
    {
        $this->resource = new insertUser();
        $this->obtenerUsuario = new getUser();
        $this->actualizarUsuario = new updateUser();
    }

    public function testInsertarUsuario()
    {
        $this->idUsuario = $this->resource->insertar(
            "prueba",
            $this->resource->generatePasswordHash("abc"),
            "prueba@gmail.com"
        );
        $datosUsuario = $this->resource->obtener("prueba@gmail.com");
        $this->assertEquals($datosUsuario['pass'], $this->resource->generatePasswordHash("abc"));
        $this->assertGreaterThan(0, $this->idUsuario);

    }

    public function testLeerUsuario()
    {
        if (empty($this->idUsuario)) {
            $this->testInsertarUsuario();
        }
        $datosUsuario = $this->obtenerUsuario->obtener("prueba@gmail.com");
        $this->assertEquals($datosUsuario['email'], "prueba@gmail.com");
        $passDes = $this->obtenerUsuario->desEncriptar($datosUsuario['pass']);
        $this->assertEquals($passDes, "abc");
    }

    public function testActualizarUsuario()
    {
        if (empty($this->idUsuario)) {
            $this->testInsertarUsuario();
        }
        $nuevosDatos = (object)[
            'email' => 'prueba@gmail.com',
            'name' => 'pruebaActualizada',
            'id'=>$this->idUsuario
        ];
        $this->actualizarUsuario->actualizar($nuevosDatos);
        $datosUsuario = $this->resource->obtener("prueba@gmail.com");
        $this->assertEquals($nuevosDatos->name, $datosUsuario['nombre']);
    }


}