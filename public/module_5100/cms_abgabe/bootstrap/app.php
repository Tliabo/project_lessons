<?php

const BASE_DIR = __DIR__ . '/..';
const RESOURCE_DIR = BASE_DIR . '/resources';
const PUBLIC_DIR = BASE_DIR . '/public';
const APP_DIR = BASE_DIR . '/app';
const CONF_DIR = BASE_DIR . '/config';
const ROUTES_DIR = BASE_DIR . '/routes';
const DATABASE_DIR = BASE_DIR . '/database';
const SRC_DIR = BASE_DIR . '/src';

$app = function () {
    initApp();
};

/**
 * Automatically require PHP files in given directory.
 * For autoloading classes
 *
 */
function initApp()
{
    $directories[] = SRC_DIR;
    $directories[] = APP_DIR . '/controllers';
    $directories[] = DATABASE_DIR;

    foreach ($directories as $directory) {
        $files = glob("$directory/*.php");
        foreach ($files as $file) {
            require_once $file;
        }
    }
}

return $app();
