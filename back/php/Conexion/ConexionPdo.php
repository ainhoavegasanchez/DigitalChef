<?php

class ConexionPdo
{
    public static function conectar()
    {
        $usuario = 'root';
        $clave = '651500170A.v.s';
        $bd='MENU';

        $opciones = [
            PDO::ATTR_EMULATE_PREPARES => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
            PDO::MYSQL_ATTR_LOCAL_INFILE => true,
            PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true,
        ];
        try {
            $pdo = new PDO("mysql:dbname=".$bd.";host=vps-65482c69.vps.ovh.net;", $usuario, $clave, $opciones);
        } catch (PDOException $e) {
            echo "[x] Conexion fallida: " . $e->getMessage();
        }
        return $pdo;
    }
}