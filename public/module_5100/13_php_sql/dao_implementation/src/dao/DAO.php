<?php

interface DAO
{
    /**
     * @param int $id
     */
    public function get($id);
    public function add();
    public function update();
    public function delete();

}