<?php

namespace Database;

use src\Model;

class CarouselItem extends Model
{
    public $isDefault = false;
    public $imgSrc = 'https://source.unsplash.com/random/502?art';
    public $imgAlt = 'Random image in a slider';
    public $hasCaption = false;
    public $captionTitle = '<h5>Third slide label</h5>';
    public $captionContend = '<p>Some representative placeholder content for the third slide.</p>';

    public function render()
    {
        ob_start();
        include RESOURCE_DIR . '/templates/carousel-item.php';
        return ob_get_clean();
    }
}
