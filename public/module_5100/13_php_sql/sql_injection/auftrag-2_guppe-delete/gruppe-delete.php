<?php

/* AUFGABE: 
 * 1. schaut euch die SQL Befehle an - woher kommen die Daten?
 * 2. entscheidet in der Gruppe, Prepared Statement ja oder nein, und begründet, warum/warum nicht
 * 3. Haltet die Entscheidung und Begründung als Kommentar im Script fest (bei jedem Statement)
 * 4. wenn ihr möchtet und Zeit habt, schreibt den Code zu einem prepared Statement um, da wo ihr es als notwendig erachtet
 */
require_once('mysqli-connect.php');


// Eine bestimmte Bestellung löschen (z.B. durch den Shop-Admin) - korrekterweise müsste auch die Hilfstabelle noch bereinigt werden, ausser die Beziehung wurde deklariert
// Prepared Statement?  nein (aber auch ja)
// Warum? 				(der benutzer übergibt keine daten und hat keine möglichkeit die query zu bearbeiten),
//                      es sollte nur der admin auf diese funktion zugriff haben, somit braucht es eigentlich das prepare statement nicht.
//                      im falle, dass der admin-account gehackt wurde und dieser aber nicht direkt auf die datenbank zugriff hat, dann ja.
$query = "DELETE FROM `bestellung` WHERE `IDbestellung`=3";
$res = mysqli_query($connection, $query);

if ($res == true) {
    echo 'Bestellung wurde gelöscht';
}


// Die Beiträge löschen, welche im Papierkorb liegen (nachdem der Admin auf den Button "Papierkorb leeren" geklickt hat
// Prepared Statement?  nein
// Warum? 				wenn keine information aus dem button gelesen wird ja.
$query = "DELETE FROM `news` WHERE `news_status` == -1";
$res = mysqli_query($connection, $query);

if ($res == true) {
    echo 'Produkt wurde der Bestellung hinzugefügt';
}
?>