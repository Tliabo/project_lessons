<?php


namespace src\Form;


use src\Model;

class TextareaField extends Field
{
    private string $id;

    /**
     * FormField constructor.
     * @param Model $model
     * @param string $attribute
     * @param string $id
     */
    public function __construct(Model $model, string $attribute, string $id = '')
    {
        $this->id = $id;
        parent::__construct($model, $attribute);
    }

    public function renderField(): string
    {
        return sprintf('<textarea id="%s" name="%s" class="form-control %s">%s</textarea>',
            $this->id,
            $this->attribute,
            $this->model->hasError($this->attribute) ? 'is-invalid' : '',
            $this->model->{$this->attribute},
        );
    }

}
