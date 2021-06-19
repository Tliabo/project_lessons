<?php


namespace Database;


use src\ModelDb;

/**
 * Class AdminUser
 * @package Database
 */
class AdminUserModel extends ModelDb
{
    public string $rowid = '';
    public string $firstname = '';
    public string $lastname = '';
    public string $email = '';
    public string $password = '';
    public string $passwordConfirm = '';

    public static ?AdminUserModel $user = null;

    public function __construct()
    {
        static::$user = $this;
    }

    /**
     * @return string
     */
    public static function tableName(): string
    {
        return 'adminUser';
    }

    public function attributes(): array
    {
        return ['firstname', 'lastname', 'email', 'password'];
    }

    public function save()
    {
        $this->password = password_hash($this->password, PASSWORD_DEFAULT);

        return parent::save();
    }

    public function getForm()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/admin/manager/partial/newUserForm.php";
        return ob_get_clean();
    }

    public function rules(): array
    {
        return [
            'firstname' => [RULE_REQUIRED],
            'lastname' => [RULE_REQUIRED],
            'email' => [RULE_REQUIRED, RULE_EMAIL, [RULE_UNIQUE, 'class' => self::class]],
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

    public static function isGuest(): bool
    {
        return !(bool)self::$user;
    }

    public function getDisplayName(): string
    {
        return $this->firstname . $this->lastname;
    }
}
