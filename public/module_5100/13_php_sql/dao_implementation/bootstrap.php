<?php

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Setup;

require_once "vendor/autoload.php";

$isDevMode = true;
$entityPaths = array(__DIR__."/src");


// database connection configuration
$conn = array(
  'driver' => 'pdo_sqlite',
  'path' => __DIR__ . '/db.sqlite',
);

$config = Setup::createAnnotationMetadataConfiguration($entityPaths, $isDevMode);
/**
 *
 * obtaining the entity manager
 */
$entityManager = EntityManager::create($conn, $config);
