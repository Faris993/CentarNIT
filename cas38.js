// let lista = [1,2,3,4,5,23,21,31,23,12,3]

// lista.length

// let zbir = 0
// for (let i=lista.length-1; i>=0;i--){
//     console.log(lista[i]);
// }

// for(let broj of lista){
//     let i=0
//     console.log(broj);
// }

// console.log(`Zbir je ${zbir}`);


// let listaBrojeva = [1,2,3,4,5];
// let rezultat = kvadrirajListu(listaBrojeva);
// function kvadrirajListu(lista){
//     let kvadriranaLista = [];

//     for(let i = 0; i<lista.length;i++){
//         let kvadrat = lista[i] ** 2;
//         kvadriranaLista.push(kvadrat)
//     }
//     return kvadriranaLista;
// }
// console.log(kvadrirajListu (rezultat));

// ----------------------------------------------------

// let lista = [1,2,3]
// let ucenik = {
//     ime: "Muhammed",
//     prezime: "Besirovic",
//     godine: 28
// }
// lista[0]
// ucenik['ime']
// console.log(ucenik['godine']);


// let string = "Muhammed"
// let naopako = ''
// for(let i=string.length-1; i>=0;i--){
//     naopako+=string[i]
// }
// let string = "Muhammed"
// let naopako = ''
// for(let slovo of string){
//     naopako = slovo + naopako
// }
// console.log(naopako);

let stringZaProveru = 'oko'
function proveriDaLiJePalindrom(string){
    let pocetak=0;
    let kraj=stringZaProveru.length-1;

    while(pocetak<kraj){
        if(string[pocetak] !== string[kraj]){
            return false
        }
        pocetak++
        kraj--
    }
    return true
}
console.log(proveriDaLiJePalindrom(stringZaProveru))