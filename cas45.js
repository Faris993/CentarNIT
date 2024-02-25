class Knjiga {
  ime
  godina
  autor
  procitana
  constructor(ime, godina, autor, procitana) {
    this.ime = ime;
    this.godina = godina;
    this.autor = autor;
    this.procitana = procitana;
  }

  obeleziKaoProcitanu() {
    if (this.procitana === true) {
      return true;
    } else {
      return false;
    }
  }

  stampajInformacije() {
    console.log(`Ime knjige je ${this.ime}, napisao je ${this.autor}, ${this.godina} godine.,`);
  }
}

class PolicaKnjiga {
  sveKnjige
  constructor(sveKnjige) {
    this.sveKnjige = sveKnjige;
  }

  ubaciKnjigu(knjiga) {
    this.sveKnjige.push(knjiga);
  }

  obeleziKnjiguKaoProcitanu(ime) {
    for (let i = 0; i < this.sveKnjige.length; i++) {
      if (ime === this.sveKnjige[i].ime) {
        if (this.sveKnjige[i].procitana === true) {
          console.log("procitana");
        } else {
          console.log("nije procitana");
        }
      }
    }
  }

  ukloniKnjiguSaPolice(knjiga) {
    this.sveKnjige.splice(knjiga, 1);
  }

  odstampajInformacijeSvihKnjiga() {
    for (let i = 0; i < this.sveKnjige.length; i++) {
      console.log(`Ime knjige je ${this.sveKnjige[i].ime}, napisao je ${this.sveKnjige[i].autor}, ${this.sveKnjige[i].godina} godine,`
      );
    }
  }
}
  let polica1 = new PolicaKnjiga();
  polica1.ubaciKnjigu(knjiga1);
  polica1.ubaciKnjigu(knjiga2);
  polica1.obeleziKnjiguKaoProcitanu("Idiot");
  polica1.odstampajInformacijeSvihKnjiga();
  console.log(polica1);
  polica1.ukloniKnjiguSaPolice(knjiga1);
  console.log(polica1);