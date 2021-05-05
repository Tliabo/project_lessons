<?php

namespace entity;

class Product
{
    /**
     * @var integer
     */
    protected int $id;

    /**
     * @var string
     */
    private string $imageUrl;

    /**
     * @var string
     */
    private string $name;

    /**
     * @var float
     */
    private float $price;

    /**
     * Product constructor.
     * @param string $name
     * @param float $price
     * @param string $imageUrl
     */
    public function __construct(string $name, float $price, string $imageUrl)
    {
        $this->name = $name;
        $this->price = $price;
        $this->imageUrl = $imageUrl;
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param string $imageUrl
     */
    public function setImageUrl(string $imageUrl)
    {
        $this->imageUrl = $imageUrl;
    }

    /**
     * @return string
     */
    public function getImageUrl(): string
    {
        return $this->imageUrl;
    }

    /**
     * @param string $name
     */
    public function setName(string $name)
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param float $price
     */
    public function setPrice(float $price)
    {
        $this->price = $price;
    }

    /**
     * @return float
     */
    public function getPrice(): float
    {
        return $this->price;
    }
}