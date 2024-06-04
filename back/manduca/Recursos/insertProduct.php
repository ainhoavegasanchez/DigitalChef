<?php declare(strict_types=1);
namespace Recursos;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');
date_default_timezone_set('Europe/Madrid');

use Conexion\ConexionPdo;

const XML= "../Mocks/products.xml";
class  InsertProduct{
    public $conexion, $pdo, $productoClass;

    public function __construct()
    {
        $this->conexion = new ConexionPdo();
        $this->pdo = $this->conexion::conectar(".env");
        $this->productoClass = new Product();
    }

    public function cargarXml($xmlFile): void
    {
        $xml = simplexml_load_file($xmlFile);
        if ($xml === false) {
            exit('Error al cargar el archivo XML.');
        }

        $productos = $xml->producto;
        foreach ($productos as $producto) {
            $this->productoClass->insertar($producto);
        }
    }


}

$producto= new InsertProduct();
$producto->cargarXml(XML);

