<?php

use Doctrine\ORM\EntityManager;

require_once "bootstrap.php";

$newProductName = $argv[1];

$product = new Product($newProductName);

/** @var EntityManager $entityManager */
$entityManager->persist($product);
$entityManager->flush();

echo "Created Product with ID " . $product->getId() . "\n";
