// class BankovniRacun {
//     constructor(ime,stanje){
//         this.ime = ime;
//         this.stanje = stanje;
//         this.istorijaTransakcija=[]
//     }
//     StampajTrenutnoStanje(){
//         console.log(`Trenutno stanje na racunu je: ${this.stanje} `);
//         this.istorijaTransakcija.push(`${this.ime} zatrazio stampanje stanja`)
//     }
//     PodigniNovac(zatrazenaSuma){
//         if(zatrazenaSuma>this.stanje){
//             console.log('Nije moguce izvrsiti transakciju');
//             return
//         }
//         this.stanje - zatrazenaSuma
//         console.log(`Izvoli ${zatrazenaSuma} dinara`);
//            this.istorijaTransakcija.push(`${this.ime} polozio ${zeljenaSuma} dinara`);

//     }
//     depozit(zeljenaSuma){
//         if(zeljenaSuma<=0){
//             console.log('Nije moguce izvrsiti transakciju');
//             this.istorijaTransakcija.push(`${this.ime} polozio ${zeljenaSuma} dinara`);
//         }
//         this.stanje+=zeljenaSuma;
//         console.log(`trenutno stanje je ${this.stanje}`);
//     }
// }

// let MuhammedovRacun = new BankovniRacun("Muhammed", 1234)
// let AmininRacun = new BankovniRacun("Amina", 234)

// AmininRacun.depozit(500)
// AmininRacun.depozit(500)
// console.log(AmininRacun.istorijaTransakcija);

// MuhammedovRacun.depozit(10000)
// MuhammedovRacun.PodigniNovac(4000)
// console.log(MuhammedovRacun.istorijaTransakcija);

//Klasa playlista
// polja: listaPesama,trenutnaPesma
//metode: ubacipesmu(imepesme),pustipesmu(imepesme),pustirandom(),obrisipesmu(ime),ugasi().
//PustiPrethodnu,PustiSledecu(),upali(),ugasi().

