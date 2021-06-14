<?php


use Database\CarouselItem;

$carouselItems = [];

$item = new CarouselItem();

$item->isDefault = true;
$carouselItems[] = $item->render();

$item->isDefault = false;
$item->hasCaption = true;
$carouselItems[] = $item->render();
?>

<div id="frontpage" class="row justify-center">
    <div id="carousel-1" class="carousel col-md-8 offset-md-2 col-lg-6 offset-lg-3 slide shadow vp-border"
         data-bs-ride="carousel">
        <div class="carousel-indicators">
            <?php
            for ($i = 0; $i < count($carouselItems); $i++): ?>
                <button type="button" data-bs-target="#carousel-1"
                        data-bs-slide-to="<?= $i ?>" <?= $i == 0 ? 'class="active"' : '' ?>
                        aria-current="true" aria-label="<?= 'Slide' . ($i + 1) ?>"></button>
            <?php
            endfor; ?>
        </div>
        <div class="carousel-inner">
            <!-- carousel items -->
            <?php
            foreach ($carouselItems as $carouselItem) {
                echo $carouselItem;
            } ?>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel-1" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>

