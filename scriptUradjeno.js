function dajDanUNedelji(dan) {
  switch(dan) {
    case 0:
      return 'Nedelja';
    case 1:
      return 'Ponedeljak';
    case 2:
      return 'Utorak';
    case 3:
      return 'Sreda';
    case 4:
      return 'Četvrtak';
    case 5:
      return 'Petak';
    case 6:
      return 'Subota';
    default:
      return 'Unesite validan broj dana (0-6).';
  }
}

console.log(dajDanUNedelji(3)); // Ispisaće "Sreda"


// Definišemo funkciju koja štampa brojeve od 1 do 10
function printNumbers() {
    for(let i=1;i<=10;i++){
      console.log(i); // Štampa trenutni broj
    }
  }
  
  printNumbers() // Poziva funkciju za štampanje brojeva
  
  // Definišemo funkciju za štampanje parnih brojeva iz niza
  function printEven(arr) {
    for (let i=0;i<arr.length;i++){ // Prođemo kroz svaki element niza
      if(arr[i]%2==0){ // Ako je broj paran,
        console.log(arr[i]);  // Štampa ga
      }  
    }
  }
  
  let arr = [13,23,12,45,22,48,66,100] // Definišemo niz brojeva
  printEven(arr) // Pozivamo funkciju za štampanje parnih brojeva
  
  // Definišemo funkciju za računanje stepena broja
  // 1*10,2*10,3*10....
  function numPower(num,pow) {
    let res=1; 
    for(let i=0;i<pow;i++){ // Množimo broj sa samim sobom određeni broj puta
       res=res*num;
    }
    return res; // vraćamo rezultat
  }
  
  console.log(Math.pow(4,2)) // Računa 4 na kvadrat koristeći ugrađenu funkciju
  console.log(numPower(4,3)); // Računa 4 na kub koristeći našu funkciju
  console.log(numPower(16,2)); // Računa 16 na kvadrat koristeći našu funkciju
  
  // Definišemo funkciju za sabiranje cifara broja
  function digitSum(num) {
  }
  
  console.log(digitSum(4367)); // Računa sumu cifara broja 4367
  console.log(digitSum(56349)); // Računa sumu cifara broja 56349
  
  // Definišemo funkciju za pronalaženje najvećeg broja u nizu
  function largestNumber(arr){
    let largest=arr[0] // počinjemo sa prvim brojem
    for(let i = 0; i< arr.length; i++){ // prođemo kroz svaki broj u nizu
        if(arr[i]>largest){ // ako je trenutni broj veći od najvećeg do sada,
            largest=arr[i] // postavljamo ga kao najveći
        }
    }
    return largest // vraćamo najveći broj
  }
  console.log('largest',largestNumber([1111,222,3,4])) // Traži najveći broj u nizu [1111,222,3,4]


// Problem:
// Napraviti funkciju koja uzima niz brojeva kao ulaz i vraća sumu svih brojeva.

// Rešenje:
function sumirajNiz(nizBrojeva) {
  let suma = 0;
  for (let i = 0; i < nizBrojeva.length; i++) {
    suma += nizBrojeva[i];
  }
  return suma;
}

// Test:
const nizBrojeva1 = [1, 2, 3, 4, 5];
console.log(sumirajNiz(nizBrojeva1)); // Rezultat: 15


// Problem:
// Napraviti funkciju koja uzima niz brojeva kao ulaz i vraća prosečnu vrednost svih brojeva.

// Rešenje:
function izracunajProsek(nizBrojeva) {
  let suma = 0;
  for (let i = 1; i < nizBrojeva.length; i++) {
    suma = suma + nizBrojeva[1];
  }
  return suma / nizBrojeva.length;
}

// Test:             0  1   2    3   4
const nizBrojeva = [10, 20, 30, 40, 50];
console.log(izracunajProsek(nizBrojeva)); // Rezultat: 30


// Problem:
// Napisati funkciju koja uzima niz i ciljni element kao ulaz i vraća true ako niz sadrži ciljni element, inače false.

// Rešenje:
function sadrziElement(niz, ciljniElement) {
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] === ciljniElement) {
      return true;
    }
  }
  return false;
}

// Test:
const mojNiz = [1, 3, 5, 7, 9];
const ciljniElement = 5;
console.log(sadrziElement(mojNiz, ciljniElement)); // Rezultat: true
