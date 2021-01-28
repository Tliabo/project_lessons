let meineZahl = 15;
let meinBoolean = false;
meineZahl = 25;
// fehler
// meineZahl = "test";
class Bankkonto {
    constructor(pSaldo) {
        this.saldo = 0;
        this._iban = '';
        this.saldo = pSaldo;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(pNewSaldo) {
        if (pNewSaldo < 0) {
            // Kunde via SMS informieren
            console.log('Saldo ist unter 0');
        }
        this.saldo = pNewSaldo;
    }
    set iban(pIban) {
        if (pIban !== '') {
            this._iban = pIban;
        }
    }
    get iban() {
        return this._iban;
    }
}
let kontoSAE = new Bankkonto(100);
// console.log(kontoSAE.getSaldo());
// kontoSAE.setSaldo(-100);
// console.log(kontoSAE.getSaldo());
kontoSAE.iban = 'Test';
console.log(kontoSAE.iban);
let rect1 = new Rect(5, 5, 20, 20);
//# sourceMappingURL=intro.js.map