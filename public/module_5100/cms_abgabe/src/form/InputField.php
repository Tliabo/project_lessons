<?php


namespace src\Form;


use src\Model;

class InputField extends Field
{
    public const TYPE_TEXT = 'text';
    public const TYPE_PASSWORD = 'password';
    public const TYPE_NUMBER = 'number';

    public string $type;

    /**
     * FormField constructor.
     * @param Model $model
     * @param string $attribute
     * @param string $type
     */
    public function __construct(Model $model, string $attribute, string $type = self::TYPE_TEXT)
    {
        $this->type = $type;
        parent::__construct($model, $attribute);
    }

    public function renderField(): string
    {
        return sprintf('<input type="%s" name="%s" value="%s" class="form-control %s">',
            $this->type,
            $this->attribute,
            $this->model->{$this->attribute},
            $this->model->hasError($this->attribute) ? 'is-invalid' : ''
        );
    }

}
