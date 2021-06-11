<?php

namespace src;

if (!function_exists('sanitize')) {
    /**
     * Sanitizes a string so no malicious code & injection can happen
     * @param $string
     * @return string
     */
    function sanitize($string): string
    {
        $s_string = trim($string);
        $s_string = stripslashes($s_string);
        $s_string = filter_var($s_string, FILTER_SANITIZE_STRING);
        $s_string = strip_tags($s_string);
        return $s_string;
    }
}

if (!function_exists('renderScripts')) {
    /**
     * @param array $scripts
     * @return string
     */
    function renderScripts(array $scripts): string
    {
        $return = '';
        foreach ($scripts as $script):
            if (!empty($script)):
                $src = $script['src'] ?? '';
                $integrity = $script['integrity'] ?? '';
                $crossorigin = $script['crossorigin'] ?? '';
                ob_start();
                ?>
                <script
                    <?= $src ? "src=\"$src\"" : $src ?>
                    <?= $integrity ? "integrity=\"$integrity\"" : $integrity ?>
                    <?= $crossorigin ? "crossorigin=\"$crossorigin\"" : $crossorigin ?>></script>
                <?php
                $return .= ob_get_clean();
            endif;
        endforeach;
        return $return;
    }
}

if (!function_exists('renderLinks')) {
    /**
     * @param array $links
     * @return string
     */
    function renderLinks(array $links): string
    {
        $return = '';
        foreach ($links as $link):
            if (!empty($link)):
                $href = $link['href'] ?? '';
                $integrity = $link['integrity'] ?? '';
                $crossorigin = $link['crossorigin'] ?? '';
                $rel = $link['rel'] ?? 'stylesheet';
                ob_start();
                ?>
                <link
                    <?= $href ? "href=\"$href\"" : $href ?>
                    <?= $rel ? "rel=\"$rel\"" : $rel ?>
                    <?= $integrity ? "integrity=\"$integrity\"" : $integrity ?>
                    <?= $crossorigin ? "crossorigin=\"$crossorigin\"" : $crossorigin ?>>
                <?php
                $return .= ob_get_clean();
            endif;
        endforeach;
        return $return;
    }
}

