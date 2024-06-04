<?php declare(strict_types=1);

namespace Recursos;

use Conexion\ConexionPdo;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

ini_set('error_reporting', 'E_ALL');
ini_set('display_errors', 'on');
date_default_timezone_set('Europe/Madrid');
const XML = __DIR__.'../Mocks/categorias.xml';
class insertCategoria
{
    public $conexion, $pdo, $categoriaClass;

    public function __construct()
    {
        $this->conexion = new ConexionPdo();
        $this->pdo = $this->conexion::conectar(".env");
        $this->categoriaClass = new Categoria();
    }

    public function cargarXml($xmlFile): void
    {
        $xml = simplexml_load_file($xmlFile);
        if ($xml === false) {
            exit('Error al cargar el archivo XML.');
        }

        $categorias = $xml->categoria;
        foreach ($categorias as $categoria) {
            $this->categoriaClass->insertar($categoria);
        }
    }


}

$categoria= new insertCategoria();
$categoria->cargarXml(XML);