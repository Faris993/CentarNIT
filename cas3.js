// function stampaj(){
//     for(let i =0; i<10; i++){
//         console.log("Faris")
//     }
// }
// stampaj()
// let lista = [1,2,3,4,5,6,7,8,9]
// let isOnline = true
// function stampaj(lista){
// while (isOnline ===true){
//     console.log('Korisnik jeste online')
//     // isOnline=false;
// }
// }
// stampaj()
// function stampaj(){
//     let num = 100
//     while(num >= 1){
//         console.log(num)
//         num--
//     }
// }
// console.log(Math.floor (broj))

// domaci
function saberiCifreBroja(broj){
    let zbir = 0; //inicijalizujemo promenljivu zbir na 0. Ova promenljiva ce se koristiti za cuvanje sume cifara.
    while (broj > 0){
        zbir += broj%10; // Dodajemo poslednju cifru broja na zbir
        broj = Math.floor(broj/10); // Uklanjamo poslednju cifru broja
    }
   return zbir;
}
console.log(saberiCifreBroja(1111));
console.log(saberiCifreBroja(12345));