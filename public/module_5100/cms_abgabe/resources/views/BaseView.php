<?php


namespace App\Views;

use View;

class BaseView extends View
{
    public function render()
    {
        $this->head['title'] = 'default view';
        parent::render();
    }
}