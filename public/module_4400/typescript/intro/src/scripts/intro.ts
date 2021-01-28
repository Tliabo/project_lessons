let meineZahl: number = 15;
let meinBoolean: boolean = false;

meineZahl = 25;
// fehler
// meineZahl = "test";

class Bankkonto {
  private saldo: number = 0;
  private _iban: string = '';

  constructor(pSaldo: number) {
    this.saldo = pSaldo;
  }

  public getSaldo() {
    return this.saldo;
  }

  public setSaldo(pNewSaldo: number) {
    if (pNewSaldo < 0) {
      // Kunde via SMS informieren
      console.log('Saldo ist unter 0');
    }
    this.saldo = pNewSaldo;
  }

  set iban(pIban: string) {
    if (pIban !== '') {
      this._iban = pIban;
    }
  }

  get iban(): string {
    return this._iban;
  }
}

let kontoSAE: Bankkonto = new Bankkonto(100);

// console.log(kontoSAE.getSaldo());
// kontoSAE.setSaldo(-100);
// console.log(kontoSAE.getSaldo());

kontoSAE.iban = 'Test';
console.log(kontoSAE.iban);

let rect1 = new Rect(5, 5, 20, 20);