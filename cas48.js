// class Soba {
//     constructor(brojSobe, tip, cena, status = "slobodno"){
//         this.brojSobe = brojSobe;
//         this.tip = tip;
//         this.cena = cena;
//         this.status = status;
//     }

//     rezervisiSobu(){
//         if(this.status === "slobodno"){
//             this.status === "rezervisano";
//             console.log(`Soba ${this.brojSobe} je uspesno rezervisana.`);
//         } else {
//             console.log("Soba je vec rezervisana");
//         }
//     }
//     odjava(){
//         this.status = "slobodno";
//         console.log(`Soba ${this.brojSobe} je sada slobodna`)
//     }
// }

// class Hotel {
//     constructor() {
//         this.sobe = [];
//     }

//     dodajSobu(soba){
//         this.sobe.push(soba);
//         console.log(`Soba ${soba.brojSobe} je dodata`);
//     }
    
//     pronadjiSlobodneSobe(){
//         return this.sobe.filter(soba => soba.status === "slobodno");
//     }

//     rezervisiSobu(brojSobe){
//         const soba = this.sobe.find(s => s.brojSobe === brojSobe);
//         soba && soba.rezervisiSobu();
//     }

//     odjava(brojSobe){
//         const soba = this.sobe.find(s => s.brojSobe === brojSobe);
//         soba && soba.odjava();
//     }
// }

// const hotel = new Hotel();
// const soba101 = new Soba(101,'jednokrevetna', 5000)

// hotel.dodajSobu(soba101);
// hotel.rezervisiSobu(101);
// hotel.odjava(101);

//drugo resenje

// class Soba {
//     constructor (brojSobe, tip, cena, status){
//         this.brojSobe = brojSobe;
//         this.tip = tip;
//         this.cena = cena;
//         this.status = status;
//     }

//     rezervisiSobu(){
//         this.status = 'rezervisana';
//     }

//     odjava(){
//         this.status = 'slobodna'
//     }
// }

// class Hotel {
//     constructor(){
//         this.sobe = [];
//     }
//     dodajSobu(soba){
//         this.sobe.push(soba);
//     }

//     pronadjiSlobodneSobe(){
//         return this.sobe.filter(soba => soba.status === 'slobodna');
//     }

//     rezervisiSobu(brojSobe){
//         const soba =this.sobe.find(soba => soba.brojSobe === brojSobe);
//         if(soba){
//             soba.rezervisiSobu();
//             return 'Soba uspesno rezervisana.';
//         } else {
//             return 'Soba sa datim brojem nije pronadjena.';
//         }
//     }
//     odjava(brojSobe){
//         const soba = this.sobe.find(soba => soba.brojSobe === brojSobe);
//         if( soba){
//             soba.odjava();
//             return 'Odjava sobe uspesna';
//         } else {
//             return 'Soba sa datim brojem nije pronadjena';
//         }
//     }
// }

// const hotel = new Hotel();

// hotel.dodajSobu(new Soba(101,'jednokrevetna',100, 'slobodna'));
// hotel.dodajSobu(new Soba(102,'dvokrevetna',150,'slobodna'));
// hotel.dodajSobu(new Soba(103, 'porodicna', 200, 'slobodna'));

// console.log(hotel.pronadjiSlobodneSobe());

// console.log(hotel.rezervisiSobu(102));
// console.log(hotel.pronadjiSlobodneSobe());

// console.log(hotel.odjava(102));
// console.log(hotel.pronadjiSlobodneSobe());

//