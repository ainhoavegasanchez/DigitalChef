<?php declare(strict_types=1);

namespace Comun;

use DOMDocument;

class ValidarXml
{

    public static function validar(string $cadenaXml, string $xsd = null): bool
    {
        $doc = new DOMDocument();
        if (!@$doc->loadXML($cadenaXml)) {
            return false;
        }
        if (!$xsd !== null) {
            if ($xsd !== null) {
                libxml_use_internal_errors(true); // Habilitar el manejo interno de errores de libxml
                $isValid = $doc->schemaValidateSource($xsd);
                libxml_clear_errors(); // Limpiar los errores de libxml
                return $isValid;
            }
        
        }
        return true;
    }

    public static function getErrors(): string
    {
        $error = '';
        $errors = libxml_get_errors();
        foreach ($errors as $e) {
            $error .= $e;
        }
        libxml_clear_errors();
        return $error;
    }
}