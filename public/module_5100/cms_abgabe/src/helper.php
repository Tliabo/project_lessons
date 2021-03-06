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
     * Helper function to render script elements
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
     * Helper function to render header link elements
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

if (!function_exists('errorMessages')) {
    /**
     * For each rule there is a error message
     * @return string[]
     */
    function errorMessages(): array
    {
        /**
         * {placeholder}
         */
        return [
            RULE_REQUIRED => 'Dieses Feld wird benötigt',
            RULE_EMAIL => 'Dieses Feld benötigt eine gültige Email Adresse',
            RULE_MIN => 'Die minimal Länge ist {min}',
            RULE_MAX => 'Die maximale Länge ist {max}',
            RULE_MATCH => 'Dieses Feld muss gleich sein wie {match}',
            RULE_UNIQUE => '{field} existiert bereits'
        ];
    }
}
