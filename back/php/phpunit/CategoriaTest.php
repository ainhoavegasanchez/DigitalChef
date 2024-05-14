<?php declare(strict_types=1);

require_once 'vendor/autoload.php';
use PHPUnit\Framework\TestCase;
use category\Categoria;


class CategoriaTest extends ModelsTestCase
{

    public function testInsertarCategoria()
    {
        $categoria = new Categoria();


        $categoria->insertar((object) ["nombre" => "prueba"]);

        $this->idCategoria = $categoria->insertar([
            'nombre' => "prueba"
        ]);
        $datosCategoria = $categoria->obtener($this->idCategoria);
        $this->assertEquals($datosCategoria['nombre'], "prueba");
    }


}