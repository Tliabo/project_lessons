<?php

use Database\AdminUserModel;

?>
<header id="header-main">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/admin">Admin Space</a>
            <?php
            if (!AdminUserModel::isGuest()): ?>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarAdmin" aria-controls="navbarAdmin"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarAdmin">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/admin/sitemanager">Site-Manager</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/admin/gallerymanager">Gallery-Manager</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/admin/usermanager">User-Manager</a>
                        </li>
                    </ul>
                </div>
            <?php
            endif; ?>
            <a href="/" class="me-3" target="_blank">Webseite Anzeigen <i class="fas fa-external-link-alt"></i></a>
            <?php
            if (!AdminUserModel::isGuest()): ?>
                <a href="/admin/logout">Logout <i class="fas fa-sign-out-alt"></i></a>
            <?php
            endif; ?>
        </div>
    </nav>
</header>
