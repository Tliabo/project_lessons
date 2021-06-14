<div class="carousel-item <?= $this->isDefault ? 'active' : '' ?>">
    <img class="img-fluid" src="<?= $this->imgSrc ?>"
         alt="<?= $this->imgAlt ?>">
    <?php
    if ($this->hasCaption): ?>
        <div class="carousel-caption d-none d-md-block">
            <?= $this->captionTitle ?>
            <?= $this->captionContend ?>
        </div>
    <?php
    endif; ?>
</div>
