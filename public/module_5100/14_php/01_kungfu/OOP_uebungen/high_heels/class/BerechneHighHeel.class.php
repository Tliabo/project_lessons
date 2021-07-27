<?php

class BerechneHighHeel
{
    // Faktor zum Umrechnen von CHF nach Pfund
    public float $waehrungsFaktor = 1.31;
    // Differenz CH-Schuhgrössen zu brit. Schuhgrössen
    public int $differenzGroesse = 33;

    /**
     * (Haupt-)Methode für das Bestimmen der High-Heel-Höhe
     *
     * @param float $p Sexyness der Schuhe (Zahl zwischen 0 und 1)
     * @param float $y Erfahrung im Tragen von hohen Schuhen (Jahre)
     * @param float $L Preis der Schuhe (wird noch umgerechnet)
     * @param float $t Anzahl der Monate, seitdem die Schuhe in Mode waren
     * @param int $A Anzahl der zu trinkenden Gläser Alkohol
     * @param float $s Schuhgrösse (wird noch umgerechnet)
     *
     * @return float
     */
    function HoeheBerechnen(float $p, float $y, float $L, float $t, int $A, float $s): float
    {
        /* +++ Dein Code +++ */
        $s = $this->CHGroesseZuBritGroesse($s);
        $L = $this->CHFZuPfund($L);

        // Formel aus dem Artikel, ich habe die Formel so notiert, dass sie in PHP läuft
        // (Eckige Klammern haben in PHP eine andere Bedeutung)
        $resultat = (($p * ($y + 9) * $L) / (($t + 1) * ($A + 1) * ($y + 10) * ($L + 30))) * (12 + 3 * $s / 8);
        /* +++ Dein Code +++ */
        return $resultat;
    }

    // (Hilfs-)Methode: Umrechnen von CHF zu brit. Pfund
    function CHFZuPfund($preis)
    {
        /* +++ Dein Code +++ */
        // 1 pfund = 1.27 CHF
        return $preis / 1.27;
    }

    // (Hilfs-)Methode: Umrechnen von Schweizer nach brit. Schuhgrössen
    function CHGroesseZuBritGroesse($groesse)
    {
        /* +++ Dein Code +++ */
        $chDefault = 36;

        /**
         * CH 36 = britisch 3
         * 37 = 4
         * 38 = 5
         * 39 = 6
         * ...
         */
        $result = 3;

        $differenz = $groesse - $chDefault;
        $result += $differenz;

        return $result;
    }
}