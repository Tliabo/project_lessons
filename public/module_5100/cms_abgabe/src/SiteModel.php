<?php

namespace src;

abstract class SiteModel extends Model
{
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
