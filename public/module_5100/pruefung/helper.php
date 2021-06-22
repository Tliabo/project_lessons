<?php

function redirect(string $path)
{
  header('Location: ' . $path);
}

function sanitize($string): string
{
  $s_string = trim($string);
  $s_string = stripslashes($s_string);
  $s_string = filter_var($s_string, FILTER_SANITIZE_STRING);
  $s_string = strip_tags($s_string);
  return $s_string;
}
