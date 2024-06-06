<?php 
namespace Recursos;

use Comun\TestCase as ModelTestCase;

class ProductoTest extends ModelTestCase
{
    protected $resource, $idProducto;

    public function setUp(): void
    {
        $this->resource = new Product();

    }

    public function testInsertarYObtenerProducto()
    {
        $producto = (object) [
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

    /* private $obtenerTest = (object) [
         "nombre" => "pruebaObtener",
         "descripcion" => "esta es la descripcion",
         "foto" => "foto.jpg",
         "id_catego" => 1,
         "precio" => 14.5
     ];

     public function testObetenerProducto($obtenerTest)
     {

         $this->idProducto = $this->resource->insertar($obtenerTest);
         $datosProducto = $this->productoObtener->obtenerProduct($this->idProducto);
         $this->assertEquals($datosProducto['nombre'], "pruebaObtener");
         $this->assertEquals($datosProducto['descripcion'], "esta es la descripcion");
         $this->assertEquals($datosProducto['id_catego'], 1);
         $this->assertEquals($datosProducto['precio'], 14.5);

     }*/
}