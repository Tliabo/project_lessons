<?php

use Doctrine\ORM\EntityManager;

require_once "bootstrap.php";

/**
 * @var EntityManager $entityManager
 */
$productRepository = $entityManager->getRepository('Product');
$products = $productRepository->findAll();

foreach ($products as $product) {
    echo sprintf("-%s\n", $product->getName());
}