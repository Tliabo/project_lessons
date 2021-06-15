<?php


namespace Database;

use src\Model;

class AdminNewUserModel extends Model
{
    public string $firstname = '';
    public string $lastname = '';
    public string $email = '';
    public string $password = '';
    public string $passwordConfirm = '';

    public function register()
    {
        return true;
    }

    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/admin/register.php";
        return ob_get_clean();
    }

    public function rules(): array
    {
        return [
            'firstname' => [RULE_REQUIRED],
            'lastname' => [RULE_REQUIRED],
            'email' => [RULE_REQUIRED, RULE_EMAIL],
            'password' => [RULE_REQUIRED, [RULE_MIN, 'min' => 8], [RULE_MAX, 'max' => 32]],
            'passwordConfirm' => [RULE_REQUIRED, [RULE_MATCH, 'match' => 'password']]
        ];
    }

    public function labels(): array
    {
        return [
            'firstname' => 'Vorname',
            'lastname' => 'Nachname',
            'email' => 'E-Mail',
            'password' => 'Passwort',
            'passwordConfirm' => 'Passwort bestätigen'
        ];
    }
}
