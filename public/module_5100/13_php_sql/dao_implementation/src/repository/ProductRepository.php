<?php

namespace repository;

use dao\ProductDAO;
use entity\Product;

class ProductRepository
{
    /**
     * @var ProductDAO
     */
    private ProductDAO $productDAO;

    /**
     * @var array<int, Product>
     */
    private array $allProducts;

    /**
     * ProductRepository constructor.
     * @param Application $application
     */
    public function __construct(Application $application)
    {
    }
}