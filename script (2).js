const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 21 },
    { name: "Carol", age: 19 },
    { name: "David", age: 22 }
];
let string1= "au'to"
let string2= 'auto ${}'
let string3= `${students}`
function createStudentList() {
    const studentList = document.getElementById("studentList");
    
    students.forEach((student, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${student.name} - Age: ${student.age}`;
        listItem.setAttribute("asdas",index)
        studentList.appendChild(listItem);
    });
}
const dugme = document.getElementById("dugme")
dugme.addEventListener("click",createStudentList)


//Dohvatanje elementa po njegovom id=""
document.getElementById("id")
//rucno kreiranje html elemenata, prima parametar koji predstavlja ime html elementa
document.createElement("li")
//Dodavanje html elementa nekom parent elementu, prima neki html elemenat 
document.appendChild()
//Dodavanje eventa nekom html elementu, prima ime eventa i sta treba da se desi, tj funkciju
dugme.addEventListener("click",imeFunkcije)
//Poziva neku funkciju cim se zavrsi ucitavane stranice
window.onload = createStudentList;