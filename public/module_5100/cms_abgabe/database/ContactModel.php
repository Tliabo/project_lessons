<?php


namespace Database;


class ContactModel
{
    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/contact.php";
        return ob_get_clean();
    }

    public function getTitle()
    {
        return 'Contact';
    }
}
