<?php


namespace Database;


use src\Model;

class LoginModel extends Model
{
    public string $email = '';
    public string $password = '';

    public function rules(): array
    {
        return [
            'email' => [RULE_REQUIRED, RULE_EMAIL],
            'password' => [RULE_REQUIRED]
        ];
    }

    public function login()
    {
        $user = AdminUserModel::findOne(['email' => $this->email]);

        if (!$user) {
            $this->addError('email', 'Dieser Benutzer Existiert nicht');
            return false;
        }
        if (!password_verify($this->password, $user->password)) {
            $this->addError('password', 'Das Passwort ist ungültig');
            return false;
        }
        return $user;
    }

    public function labels(): array
    {
        return [
            'email' => 'Deine E-Mail',
            'password' => 'Passwort'
        ];
    }

    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/admin/login.php";
        return ob_get_clean();
    }
}
