<?php

declare(strict_types=1);

namespace Recursos;
require '../vendor/autoload.php';
use Comun\TestCase as ModelTestCase;
use DateTime;

class PedidoTest extends ModelTestCase
{
    protected $resource, $idPedido, $obtener;

    public function setUp(): void
    {
        $this->resource = new Pedido();
        $this->obtener = new getOrder();

    }

    public function testInsertarPedido()
    {
        $pedido = (object)[
            "id" => 1
        ];
        $fecha = new DateTime("now");
        $fechaFormateada = $fecha->format('Y-m-d H:i:s');
        $this->idPedido = $this->resource->insertar($pedido);
        $datosPedido = $this->resource->obtener($this->idPedido);
        $this->assertEquals($datosPedido['id_usuario'], 1);
        $this->assertEquals($datosPedido['fecha'], $fechaFormateada);
        $this->assertEquals($datosPedido['total'], 0);
        $this->assertGreaterThan(0, $this->idPedido);

        return $this->idPedido;
    }


    public function testObtenerPedido()
    {
        $pedidos = $this->obtener->obtener(1);
        $this->assertEquals($pedidos[0]['id_usuario'], 1);
        $this->assertEquals($pedidos[0]['total'], 0);
    }


}