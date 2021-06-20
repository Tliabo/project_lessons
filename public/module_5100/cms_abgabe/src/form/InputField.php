<?php


namespace src\Form;


use src\Model;

class InputField extends Field
{
    public const TYPE_TEXT = 'text';
    public const TYPE_PASSWORD = 'password';
    public const TYPE_NUMBER = 'number';
    public const TYPE_FILE = 'file';

    public string $type;
    public string $disabled;

    /**
     * FormField constructor.
     * @param Model $model
     * @param string $attribute
     * @param string $disabled
     * @param string $type
     */
    public function __construct(Model $model, string $attribute, string $disabled = '', string $type = self::TYPE_TEXT)
    {
        $this->type = $type;
        $this->disabled = $disabled;
        parent::__construct($model, $attribute);
    }

    public function renderField(): string
    {
        return sprintf('<input type="%s" name="%s" value="%s" class="form-control %s"%s>',
            $this->type,
            $this->attribute,
            $this->model->{$this->attribute},
            $this->model->hasError($this->attribute) ? 'is-invalid' : '',
            $this->disabled
        );
    }

}
