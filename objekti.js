let veciBrojevi = brojevi.map(broj => broj*broj)

console.log(veciBrojevi);



/// Stari nacin

let rezultat = brojevi.map(function(broj) {
    let zbir = 0;

    for (let i = 0; i < 3; i++) {
            zbir += broj * broj;  // Kvadriramo broj tri puta i dodajemo zbiru
        }
    
        return zbir;  // Za svaki broj iz niza `brojevi`, rezultat će biti trostruki kvadrat tog broja
    });
    
    console.log(rezultat);  // Ispisuje: [3, 12, 27, 48, 75]
    
    
    //////
    
    let prviVeciOdDeset = brojevi.find(broj => broj > 10);
    
    console.log(prviVeciOdDeset);  // Ispisuje: 12
    
    
    
let brojevi = [1, 2, 33, 4, 55];
let parniBrojevi = brojevi.filter(broj => broj > 10);
console.log(parniBrojevi);  // Ispisuje: [2, 4, 6, 8, 10]

// //////////////////////////////////////////////////////////////////


const students = [
    { id: 1, name: "Alice", age: 20, scores: { math: 85, english: 90, science: 88 } },
    { id: 2, name: "Bob", age: 21, scores: { math: 80, english: 85, science: 92 } },
    { id: 3, name: "Charlie", age: 19, scores: { math: 95, english: 82, science: 90 } },
    { id: 4, name: "David", age: 22, scores: { math: 78, english: 88, science: 84 } },
    { id: 5, name: "Eva", age: 21, scores: { math: 89, english: 92, science: 87 } }
];
// console.log(students);

// Filtrira i vraća studente koji imaju 21 godinu ili više
function starijiOd21(studenti) {
    return studenti.filter(student => {
        let broj = 10
        return student.age + broj
    });
}
console.log(starijiOd21(students));

// Filtrira i vraća studente koji su postigli više od 90 poena na engleskom jeziku
function preko90Engleski(studenti) {
    return studenti.filter(student => student.scores.english > 90);
}

// Dodaje bonus od 5 poena svim studentima za matematiku
function bonusZaMatematiku(studenti) {
    return studenti.map(student => {
        student.scores.math += 5;
        return student;
    });
}
console.log(bonusZaMatematiku(students))
// Smanjuje poene iz nauke za 3 poena studentima koji imaju 20 godina ili manje


// Uzima ID studenta i vraća njegovo ime i ukupan broj poena (zbir matematike, engleskog jezika i nauke)
function pretragaPoID(studenti, id) {
    const student = studenti.find(s => s.id === id);
    if (!student) return null;
    
    const ukupnoPoeni = student.scores.math + student.scores.english + student.scores.science;
    return {
        name: student.name,
        totalScore: ukupnoPoeni
    };
}
