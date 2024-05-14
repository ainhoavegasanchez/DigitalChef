<?php declare(strict_types=1);
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Agrega este encabezado para permitir métodos OPTIONS

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { // Si es una solicitud OPTIONS, responde con estado OK
    http_response_code(200);
    exit;
}

require '../Conexion/ConexionPdo.php';
$conexion = new ConexionPdo();
$pdo = $conexion::conectar();

$json = file_get_contents('php://input');
$params = json_decode($json);

$stmt = $pdo->prepare("SELECT id, valor, id_producto, valor, id_usuario FROM VALORACION where id_producto=:id_producto and id_usuario=:id_usuario");
$stmt->execute([
    ":id_producto" => $params->id_producto,
    ":id_usuario" => $params->user->id
]);
$valoracion = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$valoracion) {
    $stmt = $pdo->prepare("INSERT INTO VALORACION (id_producto, id_usuario, valor) VALUES (:id_producto, :id_usuario, :valor)");
    $stmt->execute([
        ":id_producto" => $params->id_producto,
        ":id_usuario" => $params->user->id,
        ":valor" => $params->valor
    ]);
}
else {
    $stmt = $pdo->prepare("UPDATE VALORACION set valor=:valor where id_producto=:id_producto and id_usuario=:id_usuario");
    $stmt->execute([
        ":valor" => $params->valor,
        ":id_producto" => $params->id_producto,
        ":id_usuario" => $params->user->id
    ]);
}

header('Content-Type: application/json');
echo json_encode($valoracion);
