/*
Create SQLITE DB
does not need id, because rowid is generated automatically

example admin user
email: admin@example.com
pw: 06p8Vdo#1t#I
*/

CREATE TABLE `adminUser`
(
    `firstname` varchar(255)        NOT NULL,
    `lastname`  varchar(255)        NOT NULL,
    `email`     varchar(255) UNIQUE NOT NULL,
    `password`  varchar(255)        NOT NULL
);

CREATE TABLE `page`
(
    `title`   varchar(255),
    `contend` varchar(255)
);

CREATE TABLE `image`
(
    `src`         varchar(255) NOT NULL,
    `alt`         varchar(255),
    `name`        varchar(255),
    `description` varchar(255),
    `price`       varchar(255),
    `category`    int,
    FOREIGN KEY (`category`) REFERENCES `category` (`rowid`)
);

CREATE TABLE `category`
(
    `name` varchar(255) NOT NULL
);

INSERT INTO adminUser (firstname, lastname, email, password) VALUES ('ad', 'min', 'admin@example.com', '$2y$10$kQe2.8omqglRh8Mb3LDF5e032BNeEiatg.k1UkCpGSgM746t0mLI6');
INSERT INTO page (title, contend) VALUES ('frontpage', '<div class="row justify-center" id="frontpage">
<div class="carousel col-md-8 offset-md-2 col-lg-6 offset-lg-3 slide shadow vp-border" data-bs-ride="carousel" id="carousel-1">
<div class="carousel-indicators"><button aria-current="true" aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carousel-1" type="button"></button><button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carousel-1" type="button"></button></div>

<div class="carousel-inner"><!-- carousel items -->
<div class="carousel-item active"><img alt="Random image in a slider" class="img-fluid" src="https://source.unsplash.com/random/502?art" />
<div class="carousel-caption d-none d-md-block">
<h5>First slide label</h5>

<p>Some representative placeholder content for the third slide.</p>
</div>
</div>

<div class="carousel-item"><img alt="Specific image from unsplashed" class="img-fluid" src="https://images.unsplash.com/photo-1624024946645-d02c208b1c4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1651&amp;q=80" />
<div class="carousel-caption d-none d-md-block">
<h5>Second slide label</h5>

<p>Some representative placeholder content for the third slide.</p>
</div>
</div>
</div>
<button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carousel-1" type="button"><span class="carousel-control-prev-icon" aria-hidden="true"></span></button><button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carousel-1" type="button"><span class="carousel-control-next-icon" aria-hidden="true"></span></button></div>
</div>
');
INSERT INTO page (title, contend) VALUES ('Aktuell', '<article class="event row">
    <div class="col-3">
        <img src="https://source.unsplash.com/QksrZ5RfE2w"
             alt="Placeholder Bild von Unsplashed, Personen mit ungewöhnlicher Kleidung" class="shadow img-fluid">
    </div>
    <div class="col d-flex">
        <div class="event-details-wrapper container-fluid pt-3 shadow">
            <!-- Titel Veranstaltung-->
            <h3 class="event-title">Titel Veranstaltung</h3>
            <p class="event-description">Nunquam convertam adiurator.</p>

            <h4>Wann & Wo?</h4>
            <p>Weird, black corsairs unlawfully pull a gutless, wet woodchuck.</p>
        </div>
    </div>
</article>');
INSERT INTO page (title, contend) VALUES ('Biografie', '<div class="biografie-wrapper">
    <div class="biografie-text-wrapper">
        Text aus der DB
    </div>
    <div id="portrait">
        <img class="img-fluid" src="https://source.unsplash.com/pg_WCHWSdT8/640x960"
             alt="Placeholder Bild von Unsplashed, Frau mit Hut und langem Oberteil">
    </div>
</div>');


