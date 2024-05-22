<?php declare(strict_types=1);

namespace Recursos;

use Conexion\ConexionPdo;

class getOrder{
    public $conexion, $pdo;

    public function __construct()
    {
        $this->conexion = new ConexionPdo();
        $this->pdo = $this->conexion::conectar(".env");
    }


    public function obtener(int $id):array{
        $stmt = $this->pdo->prepare(
            "SELECT id, fecha, id_usuario, total FROM PEDIDO 
                             where id_usuario=:idUsuario");
        $stmt->execute([
            "idUsuario"=>$id
        ]);
        $result = $stmt->fetchAll();
       return $result;
    }
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');
date_default_timezone_set('Europe/Madrid');

if(isset($_GET["id_usuario"])) {
    $pedido = new getOrder();
    $result = $pedido->obtener($_GET["id_usuario"]);
echo json_encode($result);
}