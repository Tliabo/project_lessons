<header id="header-main">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="h1 navbar-brand mb-0 w-50 text-center" href="/">Verena Prezioso</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarVP" aria-controls="navbarVP"
                    aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div id="navbarVP" class="collapse navbar-collapse">
                <ul class="navbar-nav justify-content-around w-100">
                    <li class="nav-item">
                        <a class="nav-link" href="/aktuell">Aktuell</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/galerie" id="navbarDropdownMenuLink" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">Galerie</a>
                        <ul class="dropdown-menu shadow border-0" aria-labelledby="navbarDropdownMenuLink">
                            <?php
                            foreach ($this->viewParams['categories'] as $category): ?>
                                <li>
                                    <a class="dropdown-item"
                                       href="/galerie/<?= $category['name'] ?>"><?= $category['name'] ?></a>
                                </li>
                            <?php
                            endforeach; ?>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/biografie">Biografie</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <a id="button-toTop" class="d-none" title="Back To Top" href="#"><i class="fas fa-chevron-circle-up fa-3x"></i></a>
</header>


