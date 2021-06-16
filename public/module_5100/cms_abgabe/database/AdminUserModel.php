<?php


namespace Database;


use src\Model;

/**
 * Class AdminUser
 * @package Database
 */
class AdminUserModel extends Model
{
    protected string $tableName = 'adminUser';
    private int $id;
    public string $firstname = '';
    public string $lastname = '';
    public string $email = '';
    public string $password = '';
    public string $passwordConfirm = '';


    /**
     * @return string
     */
    public function tableName(): string
    {
        return $this->tableName;
    }

    public function attributes(): array
    {
        return ['firstname', 'lastname', 'email', 'password'];
    }

    public function save(): bool
    {
        $this->password = password_hash($this->password, PASSWORD_DEFAULT);

        return parent::save();
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
