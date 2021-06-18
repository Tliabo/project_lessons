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
                <button class="list-group-item list-group-item-action bg-primary" type="button"
                    <?= $control['target'] ? 'data-bs-toggle="modal" data-bs-target="#' . $control['target']['id'] . '"' : '' ?>>
                    <?= $control['name'] ?>
                </button>
            <?php
            endforeach; ?>
        </div>
    </div>
</div>

<?php
foreach ($this->controls as $control):
    if ($control['target']): ?>
        <!-- Modal -->
        <div class="modal fade" id="<?= $control['target']['id'] ?>" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"><?= $control['name'] ?></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <?= $control['target']['content'] ?>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    <?php
    endif;
endforeach; ?>
