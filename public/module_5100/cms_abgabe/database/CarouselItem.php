<?php

namespace Database;

use src\Model;

class CarouselItem extends Model
{
    protected int $id;
    public bool $isDefault = false;
    public string $imgSrc = 'https://source.unsplash.com/random/502?art';
    public string $imgAlt = 'Random image in a slider';
    public bool $hasCaption = false;
    public string $captionTitle = '<h5>Third slide label</h5>';
    public string $captionContend = '<p>Some representative placeholder content for the third slide.</p>';

    public function render()
    {
        ob_start();
        include RESOURCE_DIR . '/templates/carousel-item.php';
        return ob_get_clean();
    }
}
