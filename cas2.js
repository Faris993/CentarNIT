// Tipovi podataka u JavaScript-u
// Boolean: Binarni tip podataka koji može imati samo jednu od dve moguće vrednosti: true ili false.
let boolean = true; // True predstavlja "da" ili "uključeno" stanje.
let boolean2 = false; // False predstavlja "ne" ili "isključeno" stanje.

// String: Sekvencija karaktera koja se koristi za predstavljanje teksta.
let string = "Zdravo, svete!"; 
// console.log(string.toLowerCase())


// Number: Numerički tip podataka. Može biti ceo broj ili broj sa pomičnim zarezom.
let number = 123; 
console.log(number.toString())

let float = 12.3;

// BigInt: Numerički tip podataka koji može predstavljati cele brojeve u formatu proizvoljne preciznosti.
let bigInt = 123n

// Null: Posebna ključna reč koja predstavlja nepostojeću vrednost ili objekat.
let nullValue = null


// Undefined: Tip promenljive kojoj nije dodeljena vrednost.
let undefinedValue;


// Object: Instanca koja sadrži set parova ključ-vrednost.
let object = {
    name: "John", 
    age: 30
};


let auto = {
    name:"John",
    tockovi: 123,
    vrata: "cetvoro",
    klima:true,
    objekat:{
        prozor:4
    }
}

// console.log(auto.objekat.prozor)

// Array: Objekat visokog nivoa koji predstavlja listu.
// 0      1     2
let array = ['jedan','dva','tri']

let lista = [1,2,3,4,5]

// console.log(array.length)

// console.log(array[1])

// Function: Skup izjava koje obavljaju zadatak ili izračunavaju vrednost.
// let functionValue = function() { 
    //     return "Zdravo, svete!";
    // };
    
    
    let rezultatFunkcije
    
    // rezultatFunkcije = saberiDvaBroja(123,321)
    
    // = dodeljivanje vrednosti sa desna na levo
    // === provera vrednosti, jednakosti, poredjenje
    
function vratiTrue(){
    return true
}
function vratiFalse(){
    return false
}

function funkcija(brojJedan,brojDva){
    return brojDva+brojJedan
}

// console.log(funkcija())



if(boolean===false){
    console.log("Istina")
}else{
    console.log("Nije Istina")
}