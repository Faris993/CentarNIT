// let brojevi = [1,2,3,4,5]
// let veciBrojevi = brojevi.map(broj =>  broj*broj);

// console.log(veciBrojevi);

// let brojevi =[1,2,33,4,55]
// let prviVeciOdDeset = brojevi.find(broj => broj > 10);

// console.log(prviVeciOdDeset);

// let brojevi =[1,2,33,4,55]
// let parniBrojevi = brojevi.filter(broj => broj % 2 == 0);
// console.log(parniBrojevi);

const students = [
    { id: 1, name: "Alice", age: 20, scores: { math: 85, english: 90, science: 88 } },
    { id: 2, name: "Bob", age: 21, scores: { math: 80, english: 85, science: 92 } },
    { id: 3, name: "Charlie", age: 19, scores: { math: 95, english: 82, science: 90 } },
    { id: 4, name: "David", age: 22, scores: { math: 78, english: 88, science: 84 } },
    { id: 5, name: "Eva", age: 21, scores: { math: 89, english: 92, science: 87 } }
];

function bonusZaMatematiku(studenti) {
    return studenti.map(student => {
        student.scores.math += 5;
        return student;
    })
}
console.log(bonusZaMatematiku(students));