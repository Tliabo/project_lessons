<?php
/**
 * add category
 *
 * upload image
 * delete image
 * edit
 */


?>
<h2 class="text-center mt-3">Image Manager</h2>
<div class="row">
    <div class="col-sm-2">
        <div class="list-group">
            <?php
            foreach ($this->controls as $control): ?>
                <a href="/admin/gallerymanager/<?= $control['target']['id'] ?>"
                   class="list-group-item list-group-item-action bg-primary" role="button">
                    <?= $control['name'] ?>
                </a>
            <?php
            endforeach; ?>
        </div>
    </div>
    <div class="col">
        <?= $this->viewParams['contentPlaceholder'] ?? ''; ?>
    </div>
</div>

