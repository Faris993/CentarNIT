// let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//PUSH

// niz.push("string")
// niz.push(true)
// niz.push(undefined)
// let objekat = {
//     "nesto": "nesto"
// }

// niz.push(objekat)

// let pom = niz.push(10);

// console.log(niz);
// console.log(pom);

//POP

// let pop = niz.pop();

// console.log(niz);
// console.log(pop);

//SHIFT

// let shift = niz.shift()
// console.log(niz);
// console.log(shift);

//UNSHIFT

// let pom = niz.unshift(1,2,3,45)
// console.log(niz);
// console.log(pom);

//toString

// let nesto = niz.toString()

// console.log(nesto);

//JOIN

// console.log(niz.join(""));

//DELETE

// delete niz

//CONCAT

// let niz2 = [10,11,12]

// console.log(niz.concat(niz2));

//SLICE

// console.log(niz.slice(2, 6));

//SPLICE
// niz.splice(2, 4, [1,2,3,4,5])
// console.log(niz);

//MATRIX

// let niz2 = [[]]

// console.log(niz2);

//FLAT

// let niz2 = [[1,2,3], [3,4,5], [6,7,8]]

// let niz3 = new Array(new Array(20))

// console.log(niz2);

// let niz2 = niz.flatMap(el => el > 3 ? el : 0)

///////////////////////////////////////////////////////////////

// let niz = [0,9,5,8,4,6,2,4,112,30]
// console.log(niz.sort((a, b)=> a- b))

// console.log(niz.reverse())

// console.log(Math.max(...niz));
// console.log(Math.min(...niz))

// let niz2 = [...niz]
// niz2.push(555)
// console.log(niz2)
// console.log(niz)

// let objekat = {
//     ime: "Tarik",
//     prezime: "Ibrahimovic",
//     funkcija: function nesto(){
//         return 5;
//     },
//     nizElemenata : [1,2,3,4,5],
//     mestoStanovanja: {
//         grad: "Novi Pazar",
//         ulica: "Rajka Ackovica",
//         broj: 0
//     }
// }

// let objekat2 = {...objekat, mestoStanovanja: {...objekat.mestoStanovanja}}

// let nizObjekata= [
//     {type: "Volvo", year: 2016},
//     {type: "Saab", year: 2001},
//     {type: "BMW", year: 2010},
// ];

// console.log(nizObjekata.sort((a, b) => a.year - b.year));

// for(let i = 0; i < niz.length; i++){
//     console.log(niz[i])
// }
// niz.forEach((clan, i, array) => ){
//     console.log(`Redni broj clana je: ${i}, a clan je ${clan}`);
// }

// let niz2 = niz.map((clan, i, array)=>{
//     return clan * 2;
// })

// console.log(niz2);

// let niz2 = niz.filter((clan, i, array) => {
//     if(clan % 2 ===0){
//         return clan;
//     }
// })

// let suma = niz.reduce((a, b) =>{
//     return a + b;
// })

// console.log(suma);

// let res = niz.every((clan,)=>{
//     if(clan % 2 === 0){
//         return true
//     }
// })

// let res = niz.some((clan) =>{
//     if(clan %2 === 0){
//         return true
//     }
// })

// let res = niz.find((clan) => {
//     if(clan % 3 === 0){
//         return clan
//     }
// })

/////////////////////////////////10.4

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova:"));
// let niz = []

// for ( let i =0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj"))
//     niz.push(broj)
// }
// console.log(niz);

//////////////////////////////////////////10.5

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova:"));
// let niz = [];

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }
// console.log(niz.reverse())

////////////////////////////////////////10.7

// let brojClanova = parseInt(prompt("Unesite duzinu niza:"));
// let niz = [];

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }
// let suma = niz.reduce((a, b, ib, alt)=>{
//     return a + b;
// })
// console.log(`Aritmeticka sredina je: ${suma/brojClanova}`);

////////////////////////////////////////////////////////////10.8

// let res = 0;
// let t= 0;

// niz.forEach(clan => {
//     if (clan % 3=== 0)
//     t++;
// res += clan;
// });
// console.log(`Aritmeticka sredina je: ${res/t}`)

////////////////////////////////////////////////////10.9

// let brojClanova = (prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for(let i= 0; i< brojClanova; i++){
//     let broj=parseFloat(prompt("Unesite broj"));
//     niz.push(broj);
// }

// let resParnih = 0;
// let resNeparnih = 0;
// niz.forEach((clan, i)=>{
//     clan % 2 === 0 ? resParnih += clan : resNeparnih += clan

// if(clan%2 === 0){
//     resParnih +=clan
// }
// else{
//     resNeparnih+= clan
// }
// ////////b)
// if(i%2 === 0){
//     resParnih+=clan;
// }
// else{
//     resNeparnih+=clan;
// }
// })
// console.log(`Zbir parnih je: ${resParnih}, a neparnih je: ${resNeparnih}`)







///////////////////////////////////////////////10.11

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// let brojClanova2 = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz2 = [];

// for (let i = 0; i < brojClanova2; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz2.push(broj);

// }
// console.log(niz.concat(niz2));



///////////////////////////////////10.12
// / let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// let niz2 = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz2.push(broj);
// }

// let niz3 = niz.map((el, i) => {
//     return el + niz2[i]
// })

// // let niz3 = []
// // niz.forEach((el, i) => {
// //     niz3.push(el + niz2[i])
// // })

// console.log(niz3);
//////////////////////////////////////10.14

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// let niz2 = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz2.push(broj);
// }

// // niz2.reverse()
// let niz3 = []
// niz.forEach((el, i) => {
//     niz3.push(el + niz2[niz2.length - i - 1])
// })

// console.log(niz3);

/////////////////////////////////////////////////////10.15

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// let niz2 = [];
// brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz2.push(broj);
// }

// let niz3 = niz.concat(niz2).filter((clan) => {
//     if(clan % 2 === 0){
//         return clan
//     }
// })

// console.log(niz3);


//////////////////////////////////////////////////////////////////////10.16

// let n = parseInt(prompt("Unesite duzinu niza:"));
// let nizA = [];
// let nizB = [];

// for (let i = 0; i < n; i++) {
//   nizA.push(parseInt(prompt(`Unesite element A [${i}]:`)));
// }

// for (let i = 0; i < n; i++) {
//   nizB.push(parseInt(prompt(`Unesite element B [${i}]:`)));
// }

// let nizC = [];
// for (let i = 0; i < n; i++) {
//   if (nizA[i] < nizB[i]) {
//     nizC.push(nizA[i]);
//   } else if (nizA[i] > nizB[i]) {
//     nizC.push(nizB[i]);
//   } else {
//     nizC.push(0);
//   }
// }

// console.log("Niz C:", nizC);

/////////////////////////////////////2b

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = []

// for (let i=0; i< brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj: "));
//     niz.push(broj);
// }

// let niz2 =[];

// for(let i=0; i<brojClanova;i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz2.push(broj);
// }
// let niz3 = niz2.map(el, i)=>{
//     if(el > niz[i]){
//         return niz[i]
//     }
//     else if (el === niz[i]){
//         return 0
//     }
//     else {
//         return el;
//     }
// }

// console.log(niz3)

///////////////////////////////////////////////////////////////////10.17

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];
// let niz2 = [], niz3 = [];

// for (let i = 0;i< brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"));
//     niz.push(broj);
// }
// for(let clan of niz){
//     clan >= 0 ? niz2.push(clan) : niz3.push(clan)
// }
// console.log(`Niz za pozitivne: ${niz2} i niz za negativne je: ${niz3}`);

////////////////////////////////////////////////////////////////////////////////10.18

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for(let i =0; i<brojClanova;i++){
//     let broj = parseFloat(prompt("Unesite broj: "));
//     niz.push(broj);
// }

// let suma = niz.reduce((a, b)=>{
//     return a + b;
// })
//  let artSredina = suma / niz.length

//  let niz2=niz.filter((clan)=>{
//     if(clan > artSredina){
//         return clan
//     }
//  })

//  console.log(niz2);

//////////////////////////////////////////////////////////////////////////10.19

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i =0; i < brojClanova;i++){
//     let broj = parseFloat(prompt("Unesite broj:"));
//     niz.push(broj);
// }
// let pom = 0;

// let niz2 = niz.map((clan)=>{
//     pom+= clan
//     return pom
// })
// console.log(niz2)



/////////////////////////////////////////////////////////////////////////////10.22

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// function numberOfUnique(niz){
//   let set = new Set(niz)
//   console.log(set);

//   return set.size
// }

// let pom = niz.filter((value, index, self) => {
//   return self.indexOf(value) === index
// });

// console.log(pom);

////////////////////////////////////////////////////////////////10.23

// // Definisanje funkcije za izračunavanje statistike polaganja ispita
// function izracunajStatistiku(ocene) {
//     // Funkcija za izračunavanje ukupne prosečne ocene
//     function ukupnaProsecnaOcena(ocene) {
//         // Korišćenje reduce funkcije za sabiranje svih ocena
//         let suma = ocene.reduce((acc, ocena) => acc + ocena, 0);
//         // Deljenje sume ocena sa brojem ocena kako bi se dobila prosečna ocena
//         return suma / ocene.length;
//     }

//     // Funkcija za izračunavanje prosečne ocene samo za one koji su položili (ocena > 5)
//     function prosecnaOcenaPolozili(ocene) {
//         // Filtriranje ocena većih od 5
//         let poloziliOcene = ocene.filter(ocena => ocena > 5);
//         // Ako nema položenih ocena, vraća se 0 kako ne bi delili sa nulom
//         if (poloziliOcene.length === 0) return 0;
//         // Računanje proseka ocena koje su položene
//         let suma = poloziliOcene.reduce((acc, ocena) => acc + ocena, 0);
//         return suma / poloziliOcene.length;
//     }

//     // Funkcija za brojanje studenata koji su položili ispit (ocena > 5)
//     function brojPolozili(ocene) {
//         // Filtriranje ocena većih od 5 i dobijanje dužine rezultujućeg niza
//         return ocene.filter(ocena => ocena > 5).length;
//     }

//     // Funkcija za brojanje studenata koji nisu položili ispit (ocena <= 5)
//     function brojNisuPolozili(ocene) {
//         // Filtriranje ocena manjih ili jednakih od 5 i dobijanje dužine rezultujućeg niza
//         return ocene.filter(ocena => ocena <= 5).length;
//     }

//     // Funkcija za brojanje studenata sa ocenom većom od ukupne prosečne ocene
//     function brojIznadProsecne(ocene) {
//         // Dobijanje ukupne prosečne ocene
//         let prosecna = ukupnaProsecnaOcena(ocene);
//         // Filtriranje ocena većih od prosečne i dobijanje dužine rezultujućeg niza
//         return ocene.filter(ocena => ocena > prosecna).length;
//     }

//     // Prikaz rezultata na konzoli
//     console.log("Ukupna prosečna ocena: " + ukupnaProsecnaOcena(ocene));
//     console.log("Prosečna ocena onih koji su položili: " + prosecnaOcenaPolozili(ocene));
//     console.log("Broj koji su položili ispit: " + brojPolozili(ocene));
//     console.log("Broj koji nisu položili ispit: " + brojNisuPolozili(ocene));
//     console.log("Broj koji imaju ocenu veću od prosečne: " + brojIznadProsecne(ocene));
// }

// // Unos podataka od strane korisnika
// let brojStudenata = parseInt(prompt("Unesite broj studenata:"));
// // Inicijalizacija niza ocena
// let ocene = [];

// // Petlja za unos ocena za svakog studenta
// for (let i = 0; i < brojStudenata; i++) {
//     // Unos ocene od strane korisnika sa dodatnim teksturom
//     let ocena = parseFloat(prompt("Unesite ocenu studenta " + (i + 1) + ":"));
//     // Dodavanje ocene u niz ocena
//     ocene.push(ocena);
// }

// // Pozivanje funkcije za izračunavanje statistike polaganja ispita
// izracunajStatistiku(ocene);


///////////////////////////////////////////////////////////////////////////////////////// 10.24

// let fibonaci = (n)=> {
//     let niz = [1, 1]
//     for(let i = 2; i < n; i++){
//     niz.push(niz[i-1] + niz[i-2])
//     }
//     return niz;
// }
// function ispisi(niz){
// console.log(`Fibonacijev niz je: ${niz}`);
// }

//  let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
//  let fibonaciNiz = fibonaci(brojClanova);
//  ispisi(fibonaciNiz);

////////////////////////////////////////////////////////////////////////////////////10.27

// function pronadjiNajveciElement(niz) {
//     if (niz.length === 0) {
//         console.log("Niz je prazan.");
//         return;
//     }

//     let najveciElement = niz[0];
//     let pozicija = 0;

//     for (let i = 1; i < niz.length; i++) {
//         if (niz[i] > najveciElement) {
//             najveciElement = niz[i];
//             pozicija = i;
//         }
//     }

//     // console.log("Najveci element: " + najveciElement);
//     // console.log("Pozicija u nizu: " + pozicija);

//     console.log(`Najveci element: ${najveciElement}`)
//     console.log(`Pozicija u nizu: ${pozicija}`)
// }

// let n = parseInt(prompt("Unesite duzinu niza:"));
// let niz = [];

// for (let i = 0; i < n; i++) {
//     let element = parseFloat(prompt("Unesite element u poziciju " + i + ":"));
//     niz.push(element);
// }

// pronadjiNajveciElement(niz);


//////////////////////////////////////resenje1
// let max = 0;
// let pozicija = 0;
// for(let i = 0;i < main.length; i++){
//     if(main[i]>max){
//         max = main[i]
//         pozicija=i
//     }
// }

////////////////////////////////////////////resenje2
// let max = Math.max(...main);
// let pozicija = main.indexOf(max);
// console.log(main);

// console.log(`Max element je: ${max}, a njegova pozicija je: ${pozicija}`);

////////////////////////////////////////////////////////////////////////////////////////////10.28

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let main = [];

// for (let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"));
//     main.push(broj);
// }

// let max = Math.max(...main);
// let min = Math.min(...main);

// let nizOnajKojiTreba= main.filter((clan)=>{
//     if(clan < max/2 && clan > min*2){
//         return clan
//     }
// })

// console.log(main);
// console.log(nizOnajKojiTreba);
//////////////////////////////////////////////////////////////10.29

// let n = parseInt(prompt("Unesite broj elemenata u nizu: "))
// let main = []

// for(let i = 0; i < n; i++){
// let broj = parseFloat(prompt("Unesite element niza:"))
// main.push(broj);
// }
// console.log(Math.min(...main.filter((clan)=> clan%2 === 0)));

/////////////////////////////////////////////////////////////////////////10.30

// let brojClanova = parseInt(prompt("Unesite broj elemenata u nizu: "))
// let main = []

// for(let i=0; i <brojClanova;i++){
//     let broj = parseFloat(prompt("Unesite broj:"));
//     main.push(broj);
// }
// main.forEach((clan, i)=>{
//     i%2 === 0 && console.log(clan);
// })

//  console.log(Math.max(...main.filter((clan, i)=> i %2 === 0)));


/////////////////////////////////////////////////////////////////////////////////////////10.31

// let brojClanova = parseInt(prompt("Unesite broj elemenata u nizu: "))
// let main = []

// for(let i=0; i <brojClanova;i++){
//     let broj = parseFloat(prompt("Unesite broj:"));
//     main.push(broj);
// }

// let fibonacijevNiz = [1, 1];

// for(let i =2; i< brojClanova;i++){
//     fibonacijevNiz.push(fibonacijevNiz[i-1]+[i-2])
// }

// let semafor = true;

// main.forEach((clan, index)=>{
//     if(clan !== fibonacijevNiz[index]){
//         semafor = false
//     }
// })

// semafor ? console.log("ovo jeste fibonacijev niz") : console.log("ovo nije fibonacijev niz")

//////////////////////////////////////////////////////////////////////////////////10.32

let niz = prompt("Unesite niz brojeva odvojenih zarezima: ").split(',').map(Number);
let trazeniElement = parseInt(prompt("Unesite trazeni element:"));

let pronadjen = false;
for(let i= 0; i< niz.length; i++){
    if(niz[i]=== trazeniElement){
        console.log(`Element ${trazeniElement} je pronadjen na poziciji ${i}.`);
        pronadjen = true;
    }
}
if (!pronadjen) {
    console.log(`Element ${trazeniElement} nije pronadjen u nizu.`);
}

function linearnoPretraziNiz(niz,trazeniElement) {
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] === trazeniElement) {
            return i;
        }
    }
    return -1;
}
function linearnoPretraziNiz(niz, trazeniElement) {
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] === trazeniElement) {
            return i; 
        }
    }
    return -1; 
}

/////////////////////////////////////////////////////////////////////////////////////////////////10.34

// let unos = prompt("Unesite niz celih brojeva odvojenih zarezima: ");
// let nizA = unos.split(",").map(Number);

// let nizB = nizA.reverse();

// console.log("Niz A:", nizA);
// console.log("Niz B:", nizB);

//////////////////////////////////////////////////////////////////////////////////////////////////10.35

// let unos = prompt("Unesite niz celih brojeva odvojenih zarezima: ");
// let nizA = unos.split(",").map(Number);

// let prviElement = nizA.shift(); 
// nizA.push(prviElement); 

// console.log("Niz nakon cikličnog premestanja za jedno mesto u levo:", nizA);


//////////////////////////////////////////////////////////////////////////////////////////////////////10.36


////////////////////////////////////////////////////////////////////////////////10.37

// let unos = prompt("Unesite niz celih brojeva odvojenih zarezima:");
// let niz = unos.split(',').map(Number); 

// for (let i = 0; i < niz.length - 1; i += 2) {
//     let temp = niz[i];
//     niz[i] = niz[i + 1];
//     niz[i + 1] = temp;
// }

// console.log("Novodobijeni niz:", niz);

////////////////////////////////////////////////////////////////////////10.38

// let unos = prompt("Unesite niz celih brojeva odvojenih zarezima:"); 
// let niz = unos.split(',').map(Number); 
// let noviNiz = [];

// for (let i = 0; i < niz.length; i++) {
//     if (!noviNiz.includes(niz[i])) {
//         noviNiz.push(niz[i]);
//     }
// }

// console.log("Novi niz bez ponavljanja:", noviNiz);


////////////////////////////////////////////////////////////////////////////10.42

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "))
// let main = [];

// for(let i = 0; i <brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj: "))
//     main.push(broj);
// }
// let broj = parseFloat(prompt("Unesite broj koji zelite da ubacite:"));

// if(broj >main[main.length - 1]){
//     main.push(broj);
// } else {
//     for(let i = 0;i <main.length; i++){
//         if(main[i >broj]){
//             main.splice(i, 0, broj);
//             break;
//         }
//     }
// }
// console.log(main);

////////////////////////////////////////////////////////10.43

let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "))
let main = [];

