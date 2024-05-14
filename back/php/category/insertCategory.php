<?php declare(strict_types=1);

namespace category;
use Conexion\ConexionPdo;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

ini_set('error_reporting', 'E_ALL');
ini_set('display_errors', 'on');
date_default_timezone_set('Europe/Madrid');

const XML = '../categorias.xml';

class Categoria
{
    public $conexion, $pdo;

    public function __construct()
    {
        $this->conexion = new ConexionPdo();
        $this->pdo = $this->conexion::conectar();
    }

    public function cargarXml(): void
    {
        $xml = simplexml_load_file(XML);
        if ($xml === false) {
            exit('Error al cargar el archivo XML.');
        }

        $categorias = $xml->categoria;
        foreach ($categorias as $categoria) {
            $this->insertar($categoria);
        }
    }

    public function insertar($categoria): int
    {

        $stmt = $this->pdo->prepare("INSERT INTO CATEGORIA(id, nombre) VALUES(NULL,:nombre)");
        $stmt->execute([
            ":nombre" => (string)$categoria->nombre
        ]);
        return  (int)$this->pdo->lastInsertId();
    }

    public function obtener(int $idCategoria): ?array
    {
        $result = null;
        $sql = "SELECT id , nombre FROM CATEGORIA WHERE id=:idCategoria";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([":idCategoria" => $idCategoria]);
        if ($rs = $stmt->fetch()) {
            $result = $rs;
        }
        return $result;
    }
}


$categoria = new Categoria();
$categoria->cargarXml();
