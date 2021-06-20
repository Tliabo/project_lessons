<ul class="paintings-list">
    <?php
    foreach ($this->images as $image): ?>
        <li class="painting-wrapper">
            <figure class="figure img-wrapper">
                <img src="<?= $image['src'] ?>" class="figure-img img-fluid painting-img" alt="<?= $image['alt'] ?>">
            </figure>
        </li>
    <?php
    endforeach; ?>
</ul>
