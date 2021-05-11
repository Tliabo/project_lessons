<?php

namespace bootstrap;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Setup;

$isDevMode = true;
$entityPaths = [__DIR__ . "/../app/models"];

// database connection configuration
$conn = [
  'driver' => 'pdo_sqlite',
  'path' => __DIR__ . '../database/shop.sqlite',
];

$config = Setup::createAnnotationMetadataConfiguration($entityPaths, $isDevMode);
/**
 *
 * obtaining the entity manager
 */
$entityManager = EntityManager::create($conn, $config);