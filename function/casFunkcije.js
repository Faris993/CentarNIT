// function max(a,b){
//     if(a === b) return a;
//     else if(a>b) return a;
//     else return b;
// }

// let broj1 = parseInt(prompt("Unesite broj"))
// let broj2 = parseInt(prompt("Unesite broj"))
// let broj3 = parseInt(prompt("Unesite broj"))
// let broj4 = parseInt(prompt("Unesite broj"))

// let max1 = max(broj1, broj2)
// let max2=max(broj3,broj4)
// console.log(max(max1,max2));

// let poluprecnik = parseFloat(prompt('Unesite poluprecnik'))

// function Povrsina(){
//     let povrsina = 4*r*r*3.14
//     return povrsina;
// }
// function Zapremina(){
//     let zapremina = (4/3)*3.14*r*r*r
//     return zapremina;
// }
// function Ispis(zapremina, povrsina){
//     console.log(`Zapremina je ${zapremina}, povrsina je ${povrsina}`)
// }

// let pom1 = zapremina(poluprecnik)
// let pom2 = povrsina(poluprecnik)
// Ispis(pom1,pom2)
// function zbirKv(a, b){
//         let suma = 0;
//         for(let i = a; i <= b; i++){
//             suma += i*i
//         }
//         return suma;
//     }

// function zbirKvParni(a, b){
//       let suma = 0;
//       for(let i = a; i <= b; i++){
//           if (i % 2 !== 0) continue;
//           suma += i*i
//       }
//       return suma;
//   }
  
//   function zbirKvNeparni(a, b){
//       let suma = 0;
//       for(let i = a; i <= b; i++){
//           if (i % 2 === 0) continue;
//           suma += i*i
//       }
//       return suma;
//   }
//   console.log(zbirKv(1,5));
//   console.log(zbirKvParni(1,5));
//   console.log(zbirKvNeparni(1,5));

///////////////////////////////9.12
// function faktorijel(n){
//   let faktorijel = 1
//   for(let i = 1; i<= n; i++){
//     faktorijel*=i
//   }
//   return faktorijel;
// }

// function sumaFaktorijel(n){
//   let suma = 0;
//   for(let i=1; i<=n; i++){
//     suma += faktorijel(i)
//   }
//   return suma;
// }
// console.log(sumaFaktorijel(5));

///////9.15

// function daLiJeProst(broj){
//   if(broj <=1){
//     return false;
//   }
//   if (broj <= 3){
//     return true;
//   }
//   for( let i = 5; i*i<=broj; i+=6) {
//     if( broj % i === 0 || broj %(i + 2) === 0){
//       return false;
//     }
//   }
//   return true
// }

// function ispisiProsteManjeOd500(){
//   let broj = 2;
//   while(broj < 500){
//     if(daLiJeProst(broj)){
//       console.log(broj);
//     }
//     broj++;
//   }
// }
// ispisiProsteManjeOd500();

////////////////////////////////////9.17

// function sumaKubovaCifara(broj){
//   let suma = 0;
//   while (broj > 0) {
//     const cifra = broj % 10;
//     suma += cifra ** 3;
//     broj = Math.floor(broj / 10);
//   }
//   return suma;
// }

// function daLiJeArmstrong(broj){
//   return broj === sumaKubovaCifara(broj) ? 1:0;
// }

// function ispisiArmstrongTrocifrene(){
//   for(let i = 100; i < 1000; i++){
//     if(daLiJeArmstrong(i)) {
//       console.log(i)
//     }
//   }
// }
// ispisiArmstrongTrocifrene();

////////////////////////////2Nacin

// function prost(n){
//   for(let i = 2; i i < n; i++){
//     if(n%i === 0) return false
//   }
//   return true;
// }

// for(let i = 1; i <= 500; i++){
//   if(prost(i)){
//     console.log(i);
//   }
// }

// let sumaKubova = (n) => {
//   return Math.pow(Math.floor(n/100) % 10, 3) + Math.pow(Math.floor(n/100) % 10, 3) + Math.pow( N % 10, 3)
// }

// function isArmstrong(n){
// if(n === sumaKubova(n)) return true;
// return false;
// }
//  for( i = 100; i < 999; i++){
// if(osArmstrong(i)) console.log(i);
// }

//////////////////////////9.18

// function sumaCifara(n){
//   let suma = 0;
//   while(n){
//     suma += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return suma;
// }
// function isNiven(n){
//   return n % sumaCifara(n) === 0;
// }

// function findNivenNumbers(){
//   let nivenNumbers = [];
//   for(let i = 10; i < 100; i++){
//     if(isNiven(i)) {
//       nivenNumbers.push(i);
//     }
//   }
//   return nivenNumbers;
// }
// console.log(findNivenNumbers());

/////resenje

// function sumaCifara(n){
//   return Math.floor(n/100) % 10 + Math.powMath.floor(n/100) % 10 + n % 10
// }
// function isNiven(n){
//   if(n % sumaCifara(n) === 0) return true
//   return false
// }
// for( let i = 101; i <= 200; i++){
//   if(isNiven(i)) console.log(i)
// }


/////////////////////////////////////////9.27

// let redovi = 4
// let kolone = 6

// for(let i = 0;i< redovi; i++){
//   let = rowOutput = ""
//   for(let j=0; j< kolone; j++){
//     if(i === 0 || i === redovi - 1){
//       if(j === 0 || j === kolone - 1){
//         rowOutput += "+"
//       }
//       else {
//         rowOutput+= "-"
//       }
//     }
//     else {
//       if(j === 0 || j === kolone - 1){
//         rowOutput += "|"
//       }
//       else {
//         rowOutput += " "
//       }
//     }
//   }
// console.log(rowOutput)
// console.log("")
// console.log(" ")
// }

// function Faktorijel(n){
//   console.log(n)
//   if(n === 1) return true;
//   return n * Faktorijel (n-1);
// }
// Faktorijel(5)

////////////////////////////////////9.30

// Рекурзивна функција за степеновање
// function stepen(broj, stepen) {
//   if (stepen === 0) {
//       return true;
//   }
//   return broj * stepen(broj, stepen - 1);
// }

// let result = stepen(2, 4);
// console.log(result)

// function Suma(broj){
//   if(broj===0) return false;
//  else 
//   return broj + Suma(broj-1);
// }
// let suma = Suma(5)
// console.log(suma)

// function Stampaj(n){
//     if(n === 1) return true;
//         console.log(n)
//     else{
//     console.log(n)
//     Stampaj(n - 1)
// }
// }
// Stampaj(6)

// function SaberiCifre(n){
//     if (n === 0) {
//         return 0;
//     }
//     return n % 10 + SaberiCifre(Math.floor(n / 10));
// }
// console.log(SaberiCifre(875))

