<?php

use Doctrine\ORM\EntityManager;

require_once "../bootstrap.php";

$theBugId = $argv[1];


/** @var EntityManager $entityManager */
$bug = $entityManager->find("Bug", (int)$theBugId);

echo "Bug: " . $bug->getDescription() . "\n";
echo "Engineer: " . $bug->getEngineer()->getName() . "\n";
