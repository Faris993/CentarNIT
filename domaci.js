const students = [
    { id: 1, name: "Alice", age: 20, scores: { math: 85, english: 90, science: 88 } },
    { id: 2, name: "Bob", age: 21, scores: { math: 80, english: 85, science: 92 } },
    { id: 3, name: "Charlie", age: 19, scores: { math: 95, english: 82, science: 90 } },
    { id: 4, name: "David", age: 22, scores: { math: 78, english: 88, science: 84 } },
    { id: 5, name: "Eva", age: 21, scores: { math: 89, english: 92, science: 87 } }
];

const updatedStudents = students.map(student => ({...student,scores:{...student.scores,science:student.age <=20 ? student.scores.science - 
    3 : student.scores.science}}))
    console.log(updatedStudents);