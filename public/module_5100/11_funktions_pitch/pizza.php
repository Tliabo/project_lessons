<?php
// pizza
// 3 teile
// urdinkel, vollkorn, normal
// sauce ja, nein
// toppings: salami, schinken, pilz, paprika (max 2 topings)

/**
 * @param string $pTeig
 * @param bool $pHatSauce
 * @param array $pToppings
 */
function createPizza($pTeig = '', $pHatSauce = true, $pToppings = [])
{
    $maxZutaten = 2;
    $teig = '';
    $hatSauce = $pHatSauce;
    $toppings = [];

    switch ($pTeig) {
        case 'urdinkel':
            $teig = 'urdinkel';
            break;
        case 'vollkorn':
            $teig = 'vollkorn';
            break;
        default:
            $teig = 'normal';
            break;
    }

    $pizza = 'Hier ist deine ' . $teig . ' Pizza';

    if ($hatSauce) {
        $pizza .= ' mit Sauce';
    } else {
        $pizza .= ' ohne Sauce';
    }

    if (sizeof($pToppings) > 1) {
        $pizza .= ' mit ';
        for ($i = 0; $i <= ($maxZutaten - 1); $i++) {
            if ($i === $maxZutaten - 1) {
                $pizza .= $pToppings[$i] . '.';
            } else {
                $pizza .= $pToppings[$i] . ', ';
            }
        }
    } elseif (sizeof($pToppings) === 1) {
        $pizza .= ' mit ' . $pToppings[0] . '.';
    }

    return $pizza;
}

// Teig: urdinkel, vollkorn, normal
//// sauce: true, false
//// toppings: salami, schinken, pilz, paprika (max 2 topings)

echo createPizza('vollkorn', false, ['salami', 'schinken', 'paprika']);