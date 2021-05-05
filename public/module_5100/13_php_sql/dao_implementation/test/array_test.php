<?php

use entity\Product;

$arr = ['a', 'b', 'c'];

$productArray = [new Product('apple', 1.2, ''), new Product('banana', 2.0, '')];

var_dump($arr);
var_dump($productArray);