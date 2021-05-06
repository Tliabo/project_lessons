<?php

use entity\Product;

include_once '../src/entity/Product.php';

$arr = ['a', 'b', 'c'];
//var_dump($arr);

$productArray = [new Product('apple', 1.2, ''), new Product('banana', 2.0, '')];
//var_dump($productArray);

$stringArr = ['a', 'b', 'c'];
$str = 'test';

/**
 * @param array|null $products
 * @param Product|null $product
 */
function insertProducts(array $products = null, Product $product = null)
{
    var_dump($products);
    var_dump($product);
}
insertProducts($productArray); #pass
insertProducts($stringArr); #pass
//insertProducts(null, $str); #fail
insertProducts(null, $productArray[0]); #pass
insertProducts(null, $productArray[0]); #pass
echo '<hr>';

/**
 * @param array<int, Product> $products
 * @param Product|null $product
 */
function insertProducts2(array $products, Product $product = null)
{
    var_dump($products);
    var_dump($product);
}
insertProducts2($productArray); #pass
insertProducts2($stringArr); #pass
//insertProducts2(null, $str); #fail
//insertProducts2(null, $productArray[1]); #fail
insertProducts2([], $productArray[1]); #pass
echo '<hr>';

/**
 * @param Product[] $products
 * @param Product|null $product
 */
function insertProducts3(array $products, Product $product = null)
{
    var_dump($products);
    var_dump($product);
}
insertProducts3($stringArr);
//insertProducts3(null, $str); #fail
//insertProducts3(null, $productArray[1]); #fail
insertProducts3([], $productArray[1]); #pass
echo '<hr>';