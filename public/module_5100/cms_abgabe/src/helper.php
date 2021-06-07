<?php

namespace src;

if (!function_exists('sanitize')) {
    /**
     * Sanitizes a string so no malicious code & injection can happen
     * @param $string
     * @return string
     */
    function sanitize($string): string
    {
        $s_string = trim($string);
        $s_string = stripslashes($s_string);
        $s_string = filter_var($s_string, FILTER_SANITIZE_STRING);
        $s_string = strip_tags($s_string);
        return $s_string;
    }
}
