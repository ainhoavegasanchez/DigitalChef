<?php

declare(strict_types=1);

namespace Recursos;

use Comun\TestCase as ModelTestCase;
use DateTime;

class PedidoTest extends ModelTestCase
{
    protected $resource, $idPedido, $obtener, $cerrar;

    public function setUp(): void
    {
        $this->resource = new Pedido();
        $this->obtener = new getOrder();
        $this->cerrar = new TerrminatedOrder();

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
        $this->assertEquals($datosPedido['total'], 0.0);
        $this->assertGreaterThan(0, $this->idPedido);

        return $this->idPedido;
    }


    public function testObtenerPedido()
    {
        $pedidos = $this->obtener->obtener(1);
        $this->assertEquals($pedidos[0]['id_usuario'], 1);
        $this->assertEquals($pedidos[0]['total'], 1);
    }

    public function testCerrarPedido(){
        $pedidos = $this->obtener->obtener(1);
        $this->assertEquals($pedidos[0]['terminado'], false);
        $this->cerrar->closedOrder(1);
        $this->assertEquals($pedidos[0]['terminado'], true);
    }


}