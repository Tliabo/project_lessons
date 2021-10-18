<?php

// Gewicht in kg, diese Angaben sollen aus einem Formular kommen
$gewicht = 0;
// Grösse in m, auch diese Angaben sollen aus einem Formular kommen
$groesse = 0;

// Funktion für das Berechnen des BMI
function bmiBerechnen($weight, $height)
{
    $feedback = "";
    // Formel
    $bmi = $weight / ($height * $height);

    // Auswertung
    if ($bmi < 16) {
        $feedback = "Starkes Untergewicht";
    }
    if ($bmi >= 16 && $bmi < 17) {
        $feedback = "Mässiges Untergewicht";
    }
    if ($bmi >= 17 && $bmi < 18.5) {
        $feedback = "Leichtes Untergewicht";
    }
    if ($bmi >= 18.5 && $bmi < 25) {
        $feedback = "Normalgewicht";
    }
    if ($bmi >= 25 && $bmi < 30) {
        $feedback = "Präadipositas";
    }
    if ($bmi >= 30 && $bmi < 35) {
        $feedback = "Adipositas Grad I";
    }
    if ($bmi >= 35 && $bmi < 40) {
        $feedback = "Adipositas Grad II";
    }
    if ($bmi >= 40) {
        $feedback = "Adipositas Grad III";
    }
    return $feedback;
}

if ($_POST) {
  $gewicht = (int)$_POST['weight'] ?: $gewicht;
  $groesse = (float)$_POST['height'] ?: $groesse;
}

$ausgabe = '';
// Aufrufen der Funktion
if ($gewicht > 0 && $groesse > 0) {
    $bmi = bmiBerechnen($gewicht, $groesse);
    $ausgabe = '<div class="feedback_positiv">';
    $ausgabe .= "Auswertung Ihres BMI: <strong>" . $bmi . "</strong>";
    $ausgabe .= "</div>";
}

?>
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <title>BMI berechnen</title>
  <link rel="stylesheet" href="../../generalstyles.css">
</head>
<body>
<h2>BMI berechnen</h2>
<p class="explanation"><img src="images/BMI.jpg" width="424" height="283" alt="BMI"></p>
<ul class="explanation">
  <li>In diesem Dokument findest du eine einfache Funktion für die Berechnung des Body-Mass-Indexes. Allgemeine Informationen zum BMI sowie die Formel habe ich von hier:
    <a class="externer_link" href="http://de.wikipedia.org/wiki/Body-Mass-Index"
       target="_blank">de.wikipedia.org/wiki/Body-Mass-Index</a>
  </li>
  <li>Die Funktion berechnet den BMI aus zwei Variablen, welche (vorläufig) oben im Dokument definiert, bzw. &quot;hart codiert&quot; worden sind. Dies werden wir zuerst ändern. Die Funktion soll nämlich
    <strong>mit Usereingaben arbeiten können</strong> und somit wiederverwertbar sein.
  </li>
  <li>Erstelle also ein Formular zum Eingeben des Gewichtes und der Körpergrösse.</li>
  <li>Hinweis: Die Usereingaben müssen <strong>nicht validiert werden</strong>, das gehört nicht zum Ziel der Übung.
  </li>
  <li>Wenn die Funktion wieder lauffähig ist, packst den Code
    <strong>in eine Klasse </strong>und diese in eine Klassendatei.
  </li>
</ul>
<div>
  <form method="post">
    <label for="weight">Gewicht in kg (Kilogramm)</label>
    <input type="number" id="weight" name="weight">
    <label for="height">Höhe in m (Meter)</label>
    <input type="text" id="height" name="height">
    <button type="submit">Berechnen</button>
  </form>
    <?= $ausgabe; ?>
</div>
<hr>
<footer>
  <a href="../../index_2.html">&lt; Home</a>
</footer>
</body>
</html>
