<?php

namespace dao;

use entity\Product;

/**
 * @DAO
 */
interface ProductDAO
{
    /**
     * @param array<int, Product>|null $products
     * @param Product|null $product
     * @Insert
     */
    public function insert(array $products = null, Product $product = null);

    /**
     * @param Product $product
     * @Update
     */
    public function update(Product $product);

    /* @param Product $product
     * @Delete
     */
    public function delete(Product $product);

    /**
     * @return array
     * @Query("SELECT * FROM products ORDER BY product_name DESC")
     */
    public function getAllProducts(): array;
}