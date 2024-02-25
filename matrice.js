//11.1 Sastaviti program koji ucitava,a zatim ispisuje elemente matrice mxn.
//Elementi matrice su celi brojevi.

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));

// let row = [];
// let matrica = [];

// for (let i = 0; i < n; i++) {
//     row = [];
//     for (let j = 0; j < m; j++){
//         row.push(parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `)));
//     }
//     matrica.push(row);
// }
// console.log(matrica);

//11.2 Sastaviti program koji za unetu matricu dimenzija nxn vrsi sabiranje njenih elemenata
// i ispisuje dobijeni rezultat. Elementi su celi brojevi.

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));

// let matrica = [];
// let suma = 0;

// for (let i = 0; i < n; i++){
//     matrica[i] = [];
// for(let j = 0; j < m; j++){
//     matrica[i][j] = parseInt(prompt(`Unesite element ${i+1}.${j+1}: `))
//     suma += matrica[i][j]
// }
// }
// console.log(matrica, suma);

//11.3 Sastaviti program koji ucita matrica dimenzija mxn, a zatim vrsi sabiranje elemenata
//koji su parni brojevi. Na kraju ispisati sumu parnih brojeva i broj elemenata koji su jednaki nuli.
// Elementi matrice su celi brojevi od 0 do 9.

// let n = parseInt(prompt("Unesite broj redova: "))
// let m = parseInt(prompt("Unesite broj kolona: "));

// let matrica = [];
// let suma = 0;
// let numOfZeros = 0;

// for (let i = 0; i < n; i++){
//     matrica[i] = [];
//     for (let j = 0; j < m; j++){
//         matrica[i][j]= parseInt(prompt(`Unesite element ${i+1}.${j+1}: `))
//         if(matrica[i][j] % 2 == 0 && matrica[i][j] !=0) {
//             suma += matrica[i][j];
//         } else if(matrica[i][j] == 0) {
//             numOfZeros++;
//         }
//     }
// }
// console.log(numOfZeros, suma);

//11.4 Sastaviti program koji ucita dve matrice celih brojeva,a i b, obe dimenzija mxn,
//a zatim vrsi sabiranje ove dve matrice i ispisuje novu matricu c. Matrice se sabiraju tako sto se
//sabiraju elementi matrica sa istim indeksima.

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));

// let matrica1 = [];

// for (let i = 0; i< n; i++){
//     matrica[i]= [];
//     for(let j =0; j < m ; j++){
//         matrica[i][j] = parseInt(prompt(`Unesite element ${i+1}.${j+1}: `));
//     }
// }

// let matrica2 = []

// for(let i = 0; i < n; i++){
//     matrica2[i]=[]
//     for(let j = 0; j < m ;j++){
//         matrica2[i][j] = parseInt(prompt(`Unesite element ${i+1}.${j+1}: `));
//     }
// }

// let matrica3 = matrica1.map((el, i)=> {
//     return el.map((broj, j)=>{
//         return broj + matrica2[i][j];
//     })
// })

// console.log(matrica3);

//11.5 Sastaviti program koji ce ucitati matricu dimenzija nxn, a zatim
//ispisati sve elemente na glavnoj  i sporednoj dijagonali, kao i sume elemenata 
//na glavnoj i sporednoj dijagonali. Elementi matrice su celi brojevi.

// let n = parseInt(prompt("Unesite broj redova: "));
// let matrica1 = [];

// for(let i = 0; i < n; i++){
//     matrica1[i] = [];
//     for (let j = 0; j < matrica1; j++){
//         matrica[i][j] = parseInt(prompt(`Unesite element ${i+1}.${j+1}: `));
//     }
// }
// console.log("Brojevi glavne dijagonale");

// let sumaGlavne = 0;

// for(let i = 0; i < n; i++){
//     for (let j = 0; j < n; j++){
//         if(i == j){
//             console.log(matrica1[i][j]);
//             sumaGlavne+= matrica1[i][j];
//         }
//     }
// }
// let sumaSporedne = 0;

// console.log("Brojevi sporedne dijagonale: ");

// for(let i= 0; i < n; i++){
//     for(let j=0; j<n; j++){
//         if(i+j == n -1){
//             console.log(matrica1[i][j]);
//             sumaSporedne += matrica1[i][j];
//         }
//     }
// }
// console.log("suma sporedne: ", sumaSporedne);
// console.log("suma glavni: ", sumaGlavne);

////////////////////////////////////////////////////11.6

// let n = parseInt(prompt("Unesite broj redova: "));
// let matrica1 = [];

// for(let i = 0; i < n; i++){
//     matrica1[i] = [];
//     let suma = 0;
//     for(let j = 0; j < n;j++){
//         matrica1[i][j] = parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `));
//         suma += matrica1[i][j];
//     }
//     console.log(suma);
// }

/////////////////////////////////////////////////////11.7

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));
// let matrica1 = [];

// for(let i = 0; i < n; i++){
//     matrica[i] =[];
//     for (let j = 0; j < m; j++) {
//         matrica1[i][j] = parseInt(prompt(`Unesite element ${i+ 1}.${j + 1}: `));
//     }
// }

// let korisnikovBroj = parseInt(prompt("Unesite redni broj vrste: "));
// let suma = 0;
// for(let j = 0; j < m; j++){
//     suma += matrica1[korisnikovBroj-1[j]]
// }
// console.log(suma)


///////////////////////////////////////////////////////////////11.8

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));
// let matrica1 = [];
// let row = [];

// for (let i = 0; i < n; i++){
//     row = [];
//     for (let j = 0; j < m; j++){
//         row.push(parseInt(`Unesite element ${i + 1}.${j + 1}: `));
//     }
//     matrica1.push(row);
// }

// for(let i = 0; i < m i++){
//     if(i % 2 == 0){
//         for(let j = 0; j < n; j++){
//             console.log(matrica1[j][i]);
//         }
//     } else {
//         for (let j = n - 1; j >= 0; j--){
//             console.log(matrica1[j][i]);
//         }
//     }
// }

///////////////////////////////////////////////////////////11.9

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "));
// let matrica1 =[];
// let row = [];

// for(let i = 0; i < n; i++){
//     row = [];
//     for(let j = 0; j < m; j++){
//         row.push(parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `)));
//     }
//     matrica1.push(row);
// }

// let matrica2 = [];

// for(let i = 0; i < n; i++){
//     let dijagonalniClan = matrica1[i][i];
//     let row = [];
//     if(dijagonalniClan === 0){
//         for(let j = 0; j < m; j++){
//             matrica1[i][j] = 0;
//             row.push(matrica1[i][j]);
//         }
//         row[i]= 1;
//     } else {
//         for (let j = 0; j < m; j++) {
//             row.push(matrica1[i][j] / dijagonalniClan);
//         }
//     }
//     matrica2.push(row);
// }
// console.log(matrica2)

/////////////////////////////////////////11.10

// let n = parseInt(prompt("Unesite broj redova: "));
// let matrica1 = [];
// let row = [];

// for (let i = 0; i < n; i++) {
//     row = [];
//     for (let j = 0; j < n; j++) {
//         row.push(parseInt(prompt(`Unesite element ${i + 1}.${j + 1}: `)));
//     }
//     matrica1.push(row);
// }

// let x = parseInt(prompt("Unesite broj x: "));
// let matrica2 = [];

// for (let i = 0; i < n; i++) {
//     let row = [];
//     for (let j = 0; j < n; j++) {
//         if (i > j) {
//             row.push(matrica1[i][j] + x);
//         } else if ( i < j) {
//             row.push(matrica1[i][j] + 2 * x);
//         } else {
//             row.push(matrica1[i][j]);
//         }
//     }
//     matrica2.push(row);
// }
// console.log(matrica2);

////////////////////////////////////////////////////////////11.11

// let n = parseInt(prompt("Unesite broj redova: "));
// let m = parseInt(prompt("Unesite broj kolona: "))
// let matrica1 = [];
// let row = [];

// for(let i = 0; i < n; i++){
//     row = [];
//     for(let j = 0; j < n; j++) {
//         row.push(parseInt(`Unesite element ${i + 1}.${j + 1}: `));
//     }
//     matrica1.push(row);
// }

// let x = parseInt(prompt("Unesite broj x: "));
// let y = parseInt(prompt("Unesite broj y: "));

// let matrica2 = [];
// for(let i =0; i < n; i++){
//     let row = [];
//     for (let j = 0; j < m; j++){
//         row.push(matrica1[i][j]);
//     }
//     matrica2.push(row);
// }

// for(let i = 0; i< n; i++){
//     matrica1[i][x-1] = matrica2[i][y-1];
//     matrica1[i][y-1] = matrica2[i][x-1];
// }
// console.log(matrica1);

////////////////////////////////////////////11.12

// let n = parseInt(prompt("Unesite broj redova: "));
// let matrica1 = [];
// let row = [];

// for(let i = 0; i < n; i++){
//     row = [];
//     for(let j = 0; j <n; j++){
//         row.push(parseInt(prompt(`Unesite element ${i +1}.${j + 1}: `)));
//     }
//     matrica1.push(row);
// }

// for (i = 0; i < n - 1; i++){
//     for(j = i + 1; j < n; j++) {
//         pom = matrica1[i][j];
//         matrica1[i][j] = matrica1[j][i];
//         matrica1[j][i] = pom;
//     }
// }
// console.log(matrica1)

//////////////////////////////////////////////////////////////////11.13

// let n = parseInt(prompt("Unesite broj redova: "));
// let matrica1 = [];
// let row = [];
// let maxArr = [];
// let minArr = [];
// let max = 0;
// let min = 0;

// for (let i = 0; i < n; i++){
//     row = [];
//     for (let j = 0; j < n; j++){
//         row.push(parseInt(prompt(`Unesite element ${i +1}.${j+ 1}`)));
//     }
//     maxArr.push(Math.max(...row));
//     minArr.push(Math.min(...row));
//     matrica1.push(row);
// }
// console.log(maxArr,minArr);