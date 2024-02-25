  // let recenica = "Ana voli Milovana"
  // console.log(recenica.slice(-16, -3));

  // console.log(recenica.substring(0, 8));

  // console.log(recenica.replace("Ana", "Amina"));
  // console.log(recenica.replaceAll("Ana","Amina"));

  // console.log(recenica.toLowerCase());
  // console.log(recenica.toUpperCase());

  // let recenica2 = "Osisao se Amin";
  // console.log(recenica2.concat(recenica));
  // console.log(recenica.concat(recenica2));

  // let trimRecenica = " Tarik je prof ";
  // console.log(trimRecenica.trim());
  // console.log(trimRecenica.trimStart());
  // console.log(trimRecenica.trimEnd());

  // let primer = "nes"

  // console.log(primer.padStart(5, "0"))
  // console.log(primer.padEnd(4, "0"))

  //CharAt, CharCodeAt, []

  // let recenica3 = "Hasane ostavi telefon"

  // console.log(recenica3[2]);
  // console.log(recenica3.charAt(2));
  // console.log(recenica3.charCodeAt(2));

  //SPLIT

  // let niz = recenica.split("");
  // console.log(niz);

  //JOIN

  // console.log(niz.join());


  // console.log(recenica.indexOf("Ana"));
  // console.log(recenica.lastIndexOf("Ana"));

  // console.log(recenica.includes("mrzi"));

  /////zadatak1
  //  let rec = prompt("Unesite recenicu")

  //  console.log(rec.split(" ").length);

  ///////////zadatak2

  // let samoglasnici = ["a", "e", "i", "o", "u"];
  // while(true){
  //     let brSamoglasnici = 0;
  //     let suglasnici = 0;
  //     let rec = prompt("Unesite rec: ")
  //     if(rec === "0")
  //         break
  //     for(let i = 0; i < rec.length; i++)
  //     if (samoglasnici.includes(rec[i]))
  //     // if(rec[i] === "a" ||rec[i] === "e" || rec[i] === "i" || rec[i] === "o" || rec[i] === "u")
  //     {
  //         brSamoglasnici++
  //     }
  //     else{
  //         suglasnici++;
  //     }

  //     console.log(`Ima ${suglasnici} suglasnika, i ${brSamoglasnici} samoglasnika`);
  // }

  ////////////zadatak3

  // let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  // while(true){
  //     let velikaSlova = 0;
  //     let malaSlova = 0;
  //     let brojBrojeva = 0;
  //     let rec = prompt("Unesite rec: ");
  //     if(rec === "0") break;
  //     for( let i = 0; i < rec.length; i++){
  //         if(niz.includes(parseInt(rec[i]))){
  //             brojBrojeva++;
  //         } else if (rec[i] === rec[i].toUpperCase()){
  //             velikaSlova++;
  //         } else {
  //             malaSlova++;
  //         }
  //     }
  //     console.log(
  //       `Velika slova ${velikaSlova} i mala slova ${malaSlova}, broj cifara je ${brojBrojeva}`
  //     );
  // }

  ////////////////////////////////8.8

  // while(true){
  //     let rec = prompt("Unesite rec: ")
  //     let brojA = 0;


  //     for(let i = 0; i < rec.length; i++){
  //         if(rec[i]==="A"){

  //         }
  //     }
  //     console.log(`Procentualno u slovo A reci ima ${brojA/rec.length* 100}`);
  // }

  ///////////////////////////////////////////8.10

  // function brojanjeDoPrveDecimale(ulazniTekst) {

  //     let rezultat = ulazniTekst.match(/^[^\d.]*\d/);

  //   if (rezultat) {
  //     return rezultat[0];
  //   } else {
  //     return ulazniTekst;
  //   }
  // }

  // let ulazniTekst = "abc123.45";
  // let rezultat = brojanjeDoPrveDecimale(ulazniTekst);
  // console.log("Број карактера до прве децималне цифре: " + rezultat.length);

  ////////////////////////////////////////////////////////8.12

  // function proveriZagrade(text) {
  //   let stack = [];

  //   for (let i = 0; i < text.length; i++) {
  //     if (text[i] === "(") {
  //       stack.push("(");
  //     } else if (text[i] === ")") {
  //       if (stack.length === 0) {
  //         return false;
  //       }
  //       stack.pop();
  //     }
  //   }

  //   return stack.length === 0;
  // }

  // let unosTeksta = prompt("Unesite tekst: ");
  // if (proveriZagrade(unosTeksta)) {
  //   console.log("Zagrade su dobro uparene");
  // } else {
  //   console.log("Visak otvorenih zagrada");
  // }

  ///////////////////////////////////////////////////8.13

  // let input = prompt("Unesite recenicu: ");

  // console.log(input.toLowerCase());

  ///////////////////////////////////////////////////8.15

  // let recenica = prompt("Unesite recenicu: ")
  // console.log( recenica.charAt(0).toUpperCase() + recenica.slice(1).toLowerCase());

  ////////////8.16

  // let input = prompt("Unesite tekst: "), output = " ";

  // for (let i = 0; i < input.length; i++) {
  //   if (input[i] === " ") {
  //     if (output[output.length - 1] !== " ")
  //       output += input[i]
  //   }
  //   else {
  //     output += input[i]
  //   }
  // }

  // console.log(output);


  /////////////////////////////8.17

  // let input = prompt("Unesite recenicu: ")

  // for(let word of input.split(" ")){
  // console.log(word);
  // }

  // console.log("nesto \n jos nesto \n jos nesto \n")
{
}