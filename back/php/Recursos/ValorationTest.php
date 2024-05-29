<?php

namespace Recursos;
require '../vendor/autoload.php';
use Comun\TestCase as ModelTestCase;

class ValorationTest extends ModelTestCase
{
    protected $resource, $idValoracion, $media, $todos;

    public function setUp(): void
    {
        $this->resource = new insertValoration();
        $this->media = new getValoration();
        $this->todos= new getAllValoration();
    }

    public function testInsertarValoracion()
    {
        $valoracion = (object) [
            "valor"=>4,
            "id_producto"=>3,
            "user"=>(object)["id"=>2]
        ];
        $this->idValoracion = $this->resource->insertar($valoracion);
        $datosValoracion = $this->resource->obtenerPorId($this->idValoracion);
        $this->assertEquals($datosValoracion['valor'],4);
        $this->assertEquals($datosValoracion['id_usuario'],2);
        $this->assertEquals($datosValoracion['id_producto'],3);
        $this->assertGreaterThan(0, $this->idValoracion);
    }

    public function testLeerValoracion()
    {
        if (empty($this->idValoracion)) {
            $this->testInsertarValoracion();
        }
        $datosValoracion = $this->resource->obtenerPorId($this->idValoracion);
        $this->assertEquals($datosValoracion['id'], $this->idValoracion);
        $this->assertEquals($datosValoracion['id_producto'], 3);
        $this->assertEquals($datosValoracion['id_usuario'], 2);
        $this->assertEquals($datosValoracion['valor'], 4);
    }

    public function testActualizarValoracion()
    {
        if (empty($this->idValoracion)) {
            $this->testInsertarValoracion();
        }
        $nuevosDatos = (object)[
            'valor' => 1,
            'id_producto'=>3,
            "user"=>(object)["id"=>2]
        ];
        $this->resource->actualizar($nuevosDatos);
        $datosValoracion = $this->resource->obtenerPorId($this->idValoracion);
        $this->assertEquals($datosValoracion['valor'], 1);
    }

    public function testObtenerMedia(){
        $datosValoracion = $this->media->obtenerMedia(4);
        $this->assertEquals($datosValoracion, 5);
    }


    public function testObtenerTodos(){
        $datosValoracion = $this->todos->obtenerTodos(1);
        $this->assertEquals($datosValoracion[0]["id_usuario"], 1);
        $this->assertEquals($datosValoracion[0]["id_producto"], 2);
        $this->assertEquals($datosValoracion[0]["valor"], 3);
    }
}