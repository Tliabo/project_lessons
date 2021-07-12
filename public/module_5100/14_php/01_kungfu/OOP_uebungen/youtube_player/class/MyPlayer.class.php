<?php

class MyPlayer
{

    public function makePlayer($id = 'XKcwwA0VTec', $dimension = ['width' => "560", 'height' => "315"]): string
    {
        $html = '<iframe 
width="' . $dimension["width"] . '" 
height="' . $dimension["height"] . '" 
src="https://www.youtube.com/embed/' . $id . '" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>';

        return $html;
    }
}

?>