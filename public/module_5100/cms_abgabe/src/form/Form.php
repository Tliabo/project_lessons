<?php


namespace src\From;


class Form
{
    public static function begin($action, $method, $enctype = ''): Form
    {
        echo sprintf('<form action="%s" method="%s" %s>', $action, $method, $enctype);
        return new Form();
    }

    public static function end()
    {
        echo '</form>';
    }
}
