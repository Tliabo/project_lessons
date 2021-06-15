<?php


namespace src;


class Session
{
    protected const FLASH_KEY = 'flash_messages';

    public function __construct()
    {
        session_start();

        // Mark session messages to be removed
        $flashMessages = $_SESSION[self::FLASH_KEY] ?? [];
        foreach ($flashMessages as $key => &$flashMessage) {
            $flashMessage['remove'] = true;
        }
        $_SESSION[self::FLASH_KEY] = $flashMessages;

        var_dump($flashMessages);
    }

    public function setFlash($key, $message)
    {
        $_SESSION[self::FLASH_KEY][$key] = [
            'remove' => false,
            'value' => $message
        ];
    }

    public function getFlash($key)
    {
        return $_SESSION[self::FLASH_KEY][$key]['value'] ?? false;
    }

    public function __destruct() {
        // Iterate over marked session to remove
        $flashMessages = $_SESSION[self::FLASH_KEY] ?? [];
        foreach ($flashMessages as $key => &$flashMessage) {
            if ($flashMessage['remove']) {
                unset($flashMessages[$key]);
            }
        }
        var_dump($_SESSION[self::FLASH_KEY]);
        $_SESSION[self::FLASH_KEY] = $flashMessages;
    }
}
