// class Konvertor(){
//     constructor (vrednost,skala){
//         if(skala === 'C'){
//             this.celzius=vrednost;
//             this.farenhajt=this.uFarenhajt(vrednost)
//             this.Kelvin=uKelvin(vrednost)
//         }else if (skala === 'K'){
//             this.kelvin === vrednost;
//             this.celzius = this.izKelvinUCelzius(vrednost)
//             this.farenhajt = this.
//         }
//     }
// }

class Korpa {
    constructor() {
      this.artikli = [];
    }
  
    dodajArtikal(artikal) {
      this.artikli.push(artikal);
    }
  
    obrisiArtikal(artikal) {
      this.artikli = this.artikli.filter((a) => a !== artikal);
    }
  
    naplati() {
      return this.artikli.forEach((ukupno, artikal) => ukupno + artikal.cena * artikal.kolicina, 0);
    }
  }
  
  class Artikal {
    constructor(ime, cena, kolicina) {
      this.ime = ime;
      this.cena = cena;
      this.kolicina = kolicina;
    }
  }