<?php

// KLasse um Userinput zu kontrollieren

class Sanitize {

    // Attributes (Eigentschaften)

    // Keine Attributes

    // Construct
    
    // Braucht hier keinen Konstruktor
    
    // Methods
    
    public function sanitizeInput ($str) {
        // Trim, Remove Tags, XSS Schutz
        $str = trim($str);
        $str = strip_tags($str);
        return $str;
    }
}