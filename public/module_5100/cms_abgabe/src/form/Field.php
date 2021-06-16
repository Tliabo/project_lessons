<?php


namespace src\Form;


use src\Model;

abstract class Field
{
    public Model $model;
    public string $attribute;

    /**
     * FormField constructor.
     * @param Model $model
     * @param string $attribute
     */
    public function __construct(Model $model, string $attribute)
    {
        $this->model = $model;
        $this->attribute = $attribute;
    }

    public abstract function renderField(): string;

    public function __toString()
    {
        $html = sprintf('
<div class="mb-3">
  <label>%s</label>
  %s
  <div class="invalid-feedback">
    %s
  </div>
</div>', $this->model->getLabel($this->attribute),
            $this->renderField(),
            $this->model->getFirstError($this->attribute)
        );
        return $html;
    }

}
