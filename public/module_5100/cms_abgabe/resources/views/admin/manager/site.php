<?php

use src\CaptureScreenshot;

$pages = [
    [
        'name' => 'frontpage',
        'public-url' => '/',
        'admin-url' => '/admin/sitemanager/frontpage',
        'screenshot' => [
            'src' => '/assets/admin/images/sitemanager/frontpage.png',
            'alt' => 'Screenshot of the frontpage'
        ]
    ],
    [
        'name' => 'Aktuell',
        'public-url' => '/aktuell',
        'admin-url' => '/admin/sitemanager/aktuell',
        'screenshot' => [
            'src' => '/assets/admin/images/sitemanager/aktuell.png',
            'alt' => 'Screenshot of the aktuell page'
        ]
    ],
    [
        'name' => 'Biografie',
        'public-url' => '/biografie',
        'admin-url' => '/admin/sitemanager/biografie',
        'screenshot' => [
            'src' => '/assets/admin/images/sitemanager/biografie.png',
            'alt' => 'Screenshot of the biografie page'
        ]
    ]
];

// test to get a screenshot of homepage
//$captureScreenshot = new CaptureScreenshot();
/* <img src="< ?= $captureScreenshot->snap('http://sae.lesson.local/') ?>" class="card-img-top" alt=""> */
?>


<h2 class="text-center mt-3">Site Manager</h2>

<div class="row row-cols-1 row-cols-sm-3">
    <?php
    foreach ($pages as $page): ?>
        <div class="col">
            <div class="card mb-2">
                <div class="card-header">
                    <?= $page['name'] ?>
                </div>

                <img class="card-img-top" src="<?= $page['screenshot']['src'] ?>"
                     alt="<?= $page['screenshot']['alt'] ?>">
                <div class="card-body">
                    <a href="<?= $page['admin-url'] ?>" class="btn btn-primary">Bearbeiten <i
                            class="far fa-edit"></i></a>
                </div>
            </div>
        </div>
    <?php
    endforeach; ?>

</div>
