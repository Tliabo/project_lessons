<?php

const BASE_DIR = __DIR__ . '/..';
const RESOURCE_DIR = BASE_DIR . '/resources';
const PUBLIC_DIR = BASE_DIR . '/public';
const APP_DIR = BASE_DIR . '/app';
const CONF_DIR = BASE_DIR . '/config';
const ROUTES_DIR = BASE_DIR . '/routes';
const DATABASE_DIR = BASE_DIR . '/database';

$app = function () {
    initApp();
};

/**
 * Automatically require PHP files in given directory.
 * For autoloading classes
 * @param $directory
 */
function initApp()
{
    $directories[] = APP_DIR . '/classes';
    $directories[] = APP_DIR . '/controllers';
    $directories[] = DATABASE_DIR;
    $directories[] = RESOURCE_DIR . '/views';

    foreach ($directories as $directory) {
        $files = glob("$directory/*.php");
        foreach ($files as $file) {
            require_once $file;
        }
    }
}

return $app();