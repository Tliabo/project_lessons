<?php

namespace src;

abstract class SiteModel extends Model
{
    public string $pageTitle = '';
    public string $pageContend = '';

    public abstract function getTitle();

    public function getJS(): array
    {
        $scripts[] = [];
        return $scripts;
    }

    public function getStyleSheets(): array
    {
        $links[] = [];

        return $links;
    }

}
