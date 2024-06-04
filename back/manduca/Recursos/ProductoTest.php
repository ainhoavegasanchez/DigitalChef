<?php declare(strict_types=1);

namespace Recursos;

use Comun\TestCase as ModelTestCase;

class ProductoTest extends ModelTestCase
{
    protected $resource, $idProducto, $productoObtener;

    public function setUp(): void
    {
        $this->resource = new Product();
        $this->productoObtener = new getProduct();
    }

    public function testInsertarProducto()
    {
        $producto = (object)[
            "nombre" => "pruebaTest",
            "descripcion" => "esta es la descripcion",
            "foto" => "foto.jpg",
            "id_catego" => 1,
            "precio" => 12.4
        ];
        $this->idProducto = $this->resource->insertar($producto);
        $datosProducto = $this->resource->obtener($this->idProducto);
        $this->assertEquals($datosProducto['nombre'], "pruebaTest");
        $this->assertEquals($datosProducto['descripcion'], "esta es la descripcion");
        $this->assertEquals($datosProducto['foto'], "foto.jpg");
        $this->assertEquals($datosProducto['id_catego'], 1);
        $this->assertEquals($datosProducto['precio'], 12.4);
        $this->assertGreaterThan(0, $this->idProducto);
    }


    public function testObetenerProducto(){
       $datosProducto =  $this->productoObtener->obtenerProduct(3);
        $this->assertEquals($datosProducto['nombre'], "Yakitori");
        $this->assertEquals($datosProducto['descripcion'], "Descripción del Producto 2");
        $this->assertEquals($datosProducto['id_catego'], 1);
        $this->assertEquals($datosProducto['precio'], 20.49);

    }
}