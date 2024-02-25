// class Konvertor {
//   vrednost
//   jedinica
//   faranhajt
//   kelvin
//   constructor(vrednost, jedinica) {
//     this.vrednost = vrednost;
//     this.jedinica = jedinica;
//     this.faranhajt = this.izCelziusUFaranhajt();
//     this.kelvin = this.izCelziusUKelvin();
//   }

//   izCelziusUFaranhajt() {
//     switch (this.jedinica) {
//       case 'c':
//         return (this.vrednost * 9/5) + 32;
//       case 'f':
//         return this.vrednost;
//       case 'k':
//         return (this.vrednost - 273.15) * 9/5 + 32;
//       default:
//         console.log("Nepodržana jedinica temperature.");
//         return null;
//     }
//   }

//   izCelziusUKelvin() {
//     switch (this.jedinica) {
//       case 'c':
//         return this.vrednost + 273.15;
//       case 'f':
//         return (this.vrednost - 32) * 5/9 + 273.15;
//       case 'k':
//         return this.vrednost;
//       default:
//         console.log("Nepodržana jedinica temperature.");
//         return null;
//     }
//   }

//   izFaranhajtaUKelvin() {
//     return ((this.faranhajt - 32) * 5/9) + 273.15;
//   }

//   izKelvinaUCelzius() {
//     return this.vrednost - 273.15;
//   }
// }


// let konvertor = new Konvertor(10, 'c');
// console.log(`10 Celzijusa u Fahrenheit: ${konvertor.faranhajt}`);
// console.log(`10 Celzijusa u Kelvin: ${konvertor.kelvin}`);
// console.log(`Fahrenheit u Kelvin: ${konvertor.izFaranhajtaUKelvin()}`);


// console.log('-----------------------------------')

// class Red{
//   red = []
  
//   dodaj(vrednost){
//   return this.red.unshift(vrednost)
//   }
//   obrisi(){
//    return this.red.pop()
//   }
//   pogledaj(){
//   return this.red[this.red.length -1 ]
//   }
//   }
  
//   let mojRed1 = new Red()
//   mojRed1.dodaj(1)
//   mojRed1.dodaj(2)
//   mojRed1.dodaj(3)
//   let mojRed2 = new Red()
//   mojRed2.dodaj('a')
//   mojRed2.dodaj('a')
//   mojRed2.dodaj('a')

//  class Pletenje (){

//     finalniRed = new Red()
//     constructor(red1,red2){
      
//       while(red1.pogledaj() || red2.pogledaj()){
//         if(red1.pogledaj()){
//           this.finalniRed.dodaj(red1.obrisi())
//         }
//         if(red2.pogledaj()){
//           this.finalniRed.dodaj(red2.obrisi())
//         }
//       }
//     }
//   }
  