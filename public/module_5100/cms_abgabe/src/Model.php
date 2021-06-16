<?php


namespace src;


abstract class Model
{
    public array $errors = [];

    public function loadData($data)
    {
        foreach ($data as $key => $value) {
            if (property_exists($this, $key)) {
                $this->{$key} = $value;
            }
        }
    }

    public function rules(): array
    {
        return [];
    }

    public function validate(): bool
    {
        foreach ($this->rules() as $attribute => $rules) {
            $value = $this->{$attribute};
            foreach ($rules as $rule) {
                $ruleName = $rule;
                if (!is_string($ruleName)) {
                    $ruleName = $rule[0];
                }
                if ($ruleName === RULE_REQUIRED && !$value) {
                    $this->addErrorForRule($attribute, RULE_REQUIRED);
                }
                if ($ruleName === RULE_EMAIL && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
                    $this->addErrorForRule($attribute, RULE_EMAIL);
                }
                if ($ruleName === RULE_MIN && strlen($value) < $rule['min']) {
                    $this->addErrorForRule($attribute, RULE_MIN, $rule);
                }
                if ($ruleName === RULE_MAX && strlen($value) > $rule['max']) {
                    $this->addErrorForRule($attribute, RULE_MAX, $rule);
                }
                if ($ruleName === RULE_MATCH && $value !== $this->{$rule['match']}) {
                    $this->addErrorForRule($attribute, RULE_MATCH, $rule);
                }
            }
        }

        return empty($this->errors);
    }

    private function addErrorForRule(string $attribute, string $rule, $params = [])
    {
        $message = errorMessages()[$rule] ?? '';
        foreach ($params as $key => $value) {
            $message = str_replace("{{$key}}", $value, $message);
        }
        $this->errors[$attribute][] = $message;
    }

    public function addError(string $attribute, string $message)
    {
        $this->errors[$attribute][] = $message;
    }

    public function hasError($attribute)
    {
        return $this->errors[$attribute] ?? false;
    }

    public function getFirstError($attribute)
    {
        return $this->errors[$attribute][0] ?? false;
    }

    public function labels(): array
    {
        return [];
    }

    public function getLabel($attribute)
    {
        return $this->labels()[$attribute] ?? $attribute;
    }
}
