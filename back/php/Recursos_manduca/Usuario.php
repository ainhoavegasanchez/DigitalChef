<?php declare(strict_types=1);

namespace Recursos;

use Conexion\ConexionPdo;

class Usuario
{
    public $linkPdo, $pdo;

    public function __construct()
    {
        $this->linkPdo = new ConexionPdo();
        $this->pdo = $this->linkPdo::conectar(".env");
    }

    public function insertar(array $datosUsuario): int
    {
        $sql = "INSERT INTO USUARIOS (NICK,PASS,TELEFONO) VALUES (:nick,:pass,:phone) ON DUPLICATE KEY UPDATE PASS=:pass";
        $this->pdo->prepare($sql)->execute([
            ":nick" => $datosUsuario['NICK'],
            ":pass" => $datosUsuario['PASSWORD'],
            ":phone" => $datosUsuario['PHONE'],
        ]);
        return (int)$this->pdo->lastInsertId();
    }

    public function obtener(int $idUsuario): ?array
    {
        $result = null;
        $sql = "SELECT ID,NICK,PASS,NOMBRE,APELLIDOS FROM USUARIOS WHERE ID=:idUsuario";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([":idUsuario" => $idUsuario]);
        if ($rs = $stmt->fetch()) {
            $result = $rs;
        }
        return $result;
    }

    public function obtenerPorNick(string $nick): ?array
    {
        $result = null;
        $sql = "SELECT ID,NICK,PASS FROM USUARIOS WHERE NICK=:nick";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([":nick" => $nick]);
        if ($rs = $stmt->fetch()) {
            $result = $rs;
        }
        return $result;
    }

    public function actualizar(int $idUsuario, array $datosUsuario): void
    {
        $sql = "UPDATE USUARIOS SET " .
            "NOMBRE=:nombre," .
            "APELLIDOS=:apellidos," .
            "DIRECCION=:direccion," .
            "LATITUD=:latitud," .
            "LONGITUD=:longitud " .
            "WHERE ID=:idUsuario";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            ":nombre" => $datosUsuario['NAME'],
            ":apellidos" => $datosUsuario['SURNAME'],
            ":direccion" => isset($datosUsuario['FULLADDRESS']) ? $datosUsuario['FULLADDRESS'] : '',
            ":latitud" => isset($datosUsuario['LATITUDE']) ? $datosUsuario['LATITUDE'] : 0.0,
            ":longitud" => isset($datosUsuario['LONGITUDE']) ? $datosUsuario['LONGITUDE'] : 0.0,
            ":idUsuario" => $idUsuario
        ]);
    }

    public function borrarPorID(int $idUsuario): void
    {
        $sql = "DELETE FROM USUARIOS WHERE ID=:idUsuario";
        $this->pdo->prepare($sql)->execute([
            ':idUsuario' => $idUsuario
        ]);
    }

    public function borrarPorNick(string $nick): void
    {
        $sql = "DELETE FROM USUARIOS WHERE NICK=:nick";
        $this->pdo->prepare($sql)->execute([
            ':nick' => $nick
        ]);
    }

}