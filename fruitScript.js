const fruits = ["jabuka", "banana", "višnja"];

const input = document.getElementById('input')
input.value // predstavlja tekst koji se trenutno nalazi unutar input polja
element.remove() //brise taj element na kome smo pozvali .remove()
roditeljElement.removeChild(deteElement)//brise child element iz nekog drugog elementa,kao argument prima taj child element koji zelimo da obrisemo

fruits.forEach(fruit => {
    const li = document.createElement('li');
    li.innerText = fruit;

    const dugme = document.createElement('button')
    dugme.innerText = 'Dugme'
    li.appendChild(dugme)
    li.remove()
    dugme.addEventListener('click', () => {
        alert(fruit);
    });
    document.getElementById('fruitList').appendChild(li);
});








// fruits.forEach(fruit => {
//     const li = document.createElement('li');
//     li.innerText = fruit;

//     const button = document.createElement('button');
//     button.innerText = 'Prikaži';


//     li.appendChild(button);
//     document.getElementById('fruitList').appendChild(li);
// });
