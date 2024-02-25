let label = document.createElement("label")
label.innerText = "Unesite ime pokemona";
let input = document.createElement("input")
let button = document.createElement("button")
button.innerText = "Uzmi pokemona";
let div = document.createElement("div");


div.appendChild(label)
div.appendChild(input)
div.appendChild(button);

document.body.appendChild(div)

button.addEventListener("click", function (e) {
  e.preventDefault();
  getPokemon(input.value);
})


function showPokemon(data) {
  let div = document.createElement("div");
  let img = document.createElement("img")
  img.src = data.sprites.front_default;
  div.innerHTML = data.name;
  div.appendChild(img)

  document.body.appendChild(div);
}

async function getPokemon(name) {
  try {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let res = await data.json();
    console.log(res);
    showPokemon(res);
  } catch (err) {
    console.log(err);
  }
}