<?php declare(strict_types=1);

namespace Recursos;
require '../vendor/autoload.php';
use Comun\TestCase as ModelTestCase;
use Constantes\Usuario as ConstanteUsuario;
use Constantes\Pedido as ConstantePedido;
use Constantes\PedidoDetalle as ConstantePedidoDetalle;

class PedidoDetalleTest extends ModelTestCase
{
    protected $resource, $resourcePedido, $idPedido, $borrar, $actualizar, $idDetalle;

    public function setUp(): void
    {
        $this->resource = new insertOrderDetail();
        $this->resourcePedido = new Pedido();
        $this->borrar = new deleteDetailOrder();
        $this->actualizar = new updateDetailOrder();
    }

    public function testInsertarDetalle()
    {

        $pedido = (object)[
            "id" => 2
        ];
        $this->idPedido = $this->resourcePedido->insertar($pedido);
        $this->resource->insertar(
            (object)[
                'order' => (object)[
                    'id' => $this->idPedido
                ],
                'product' => (object)[
                    'id' => 3
                ],
                'cantidad' => 4]
        );
        $detalles = $this->resource->obtener($this->idPedido);
        $this->assertEquals(3, $detalles[sizeof($detalles) - 1]['id_producto']);
        $this->assertEquals(1, $detalles[sizeof($detalles) - 1]['cantidad']);

    }

    public
    function testBorrarDetalle()
    {
        $pedido = (object)[
            "id" => 2
        ];
        $this->idPedido = $this->resourcePedido->insertar($pedido);
        $this->idDetalle = $this->resource->insertar(
            (object)[
                'order' => (object)[
                    'id' => $this->idPedido
                ],
                'product' => (object)[
                    'id' => 3
                ],
                'cantidad' => 4]
        );
        $borrado = $this->borrar->delete(
            (object)[
                'id' => $this->idDetalle
            ]);
        $this->assertNull($borrado);
    }

    public function testActualizarDetalle()
    {

        $pedido = (object)[
            "id" => 2
        ];
        $this->idPedido = $this->resourcePedido->insertar($pedido);
        $this->idDetalle = $this->resource->insertar(
            (object)[
                'order' => (object)[
                    'id' => $this->idPedido
                ],
                'product' => (object)[
                    'id' => 3
                ],
                'cantidad' => 4
            ]
        );

        $detalle = $this->resource->obtener($this->idPedido);
        $this->assertEquals(1, $detalle[sizeof($detalle) - 1]['cantidad']);

        $this->actualizar->update(
            (object)[
                'id' => $this->idDetalle,
                'count' => 5
            ]
        );
        $detalleActualizado = $this->resource->obtener($this->idPedido);
        $this->assertEquals(5, $detalleActualizado[sizeof($detalleActualizado) - 1]['cantidad']);
    }
}


