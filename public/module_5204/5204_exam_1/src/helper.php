<?php

function redirect(string $path)
{
    header('Location: ' . $path);
}

function sanitize($str): string
{
    $s_string = trim($str);
    $s_string = stripslashes($s_string);
    $s_string = filter_var($s_string, FILTER_SANITIZE_STRING);
    $s_string = strip_tags($s_string);
    return $s_string;
}