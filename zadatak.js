// function numPower(num,pow){
//     let res=1;
//     for(let i=0; i<pow;i++){
//         console.log(`iteracije ${i}, mnozimo ${res} * ${num}`)
//         res=res*num;
//     }
//     return res;
// }
// console.log(numPower(10,5))

// function stampajXPuta(x){
//     for(let i=0; i<x;i++){
//         console.log('Stampaj')
//     }
// }
// stampajXPuta(1)

// Zadatak 1.
// function findMaxNumber(numbers){
//     let maxNumber = numbers[0];
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i] > maxNumber){
//             maxNumber = numbers[i];
//         }
//     }
//     return maxNumber;
// }

// let numbersList = [5,8,3,12,7];
// console.log(findMaxNumber(numbersList));


// let tajniBroj = 10;
//  let pogodak = 0;

//  while(pogodak != tajniBroj){
//     pogodak = (Math.random() * (10 - 1) + 1).toFixed(0);
//     console.log('Pokusavamo sa brojem' , pogodak);
//  }

 console.log('------------------------------')

//  let tajniBroj = 20;
//  let pogodak = 0;

//  while (pogodak != tajniBroj){
//     pogodak =(Math.random() * (20 - 1) + 1).toFixed(0);
//     if( pogodak === tajniBroj){
//         break;
//     }
//     console.log('Pokusavamo za brojem', pogodak)
//  }

// let niz = ['Samir', 'Srdjan', 'Muhammed','Faruk','Amina','Haris']
// for(let imena of niz){
//     let duzinaImena = imena.length;
//     console.log(imena, duzinaImena)
// }

// function izracunajPodatke(racun){
//     racun.stavkaS = racun.stavka1 + racun.stavka2
// }
// const r = {
//     stavka1: 100,
//     stavka2: 30,
//     stavkaS: null
// }
//  console.log(r)

//  izracunajPodatke(r)

//  console.log(r)

// function dodajPodatke(osoba){
// osoba.osobaS = osoba.ime1 + osoba.prezime2 + osoba.godine3;
// }
// const a = {
//     ime1: 'Faris',
//     prezime2:'Pepic',
//     godine3: 29,
//     osobaS: null
// }

// console.log(a)

// dodajPodatke(a)

// console.log(a)

//Resenje zadatka
// function largestNumber(arr){
//     let largest=arr[0]
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i]>largest){
//             largest=arr[i]
//         }

//     }
//     return largest
// }
// console.log('largest',largestNumber([9,11111,222,3,4]))

//zadatak2.
// function izracunajProsek(nizBrojeva){
//     let suma = 0;
//     for (let i = 1; i< nizBrojeva.length; i++){
//         suma +=  nizBrojeva[i];
//     }
//     return suma / nizBrojeva.length
// }
// const nizBrojeva = [10,20,30,40,50];
// console.log('prosek',izracunajProsek(nizBrojeva));

console.log('-----------------------------------------');
//vezba2
function sadrziElement(niz,ciljniElement){
    for(let i=0; i< niz.length; i++){
        if(niz[i] === ciljniElement){
            return true;
        } 
    }
    return false
}
let niz = [1,2,3,4,5,6]
let broj = 3
console.log(sadrziElement(niz,broj))

console.log('-----------------------------------')

function digitSum(num){
    let sum =0;
    while(num!=0);{
    sum+= num % 10;
    num = Math.floor(num/10);
    }
    return sum;
}
console.log(digitSum(4367));
console.log(digitSum(56349));
