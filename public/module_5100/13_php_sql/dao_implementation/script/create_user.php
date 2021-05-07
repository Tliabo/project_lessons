<?php

use Doctrine\ORM\EntityManager;

require_once "../bootstrap.php";

$newUsername = $argv[1];

$user = new User();
$user->setName($newUsername);

/** @var EntityManager $entityManager */
$entityManager->persist($user);
$entityManager->flush();

echo "Created User with ID " . $user->getId() . "\n";
