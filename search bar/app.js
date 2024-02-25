let form = document.createElement("form");
let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Submit";
let label = document.createElement("label");
label.innerText = "Enter Search name: ";
form.appendChild(label);
form.appendChild(input);
form.appendChild(button);

document.body.appendChild(form);

let div = document.createElement("div");
for (let i = 0; i < 10; i++) {
  let p = document.createElement("p");
  p.innerText = "Hello World" + i;
  div.appendChild(p);
}

document.body.appendChild(div);

let allPs = [...document.querySelectorAll("p")];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(input.value);
  let showPs = allPs.filter((p) => {
    return p.innerText.includes(input.value);
  });

  allPs.forEach((p) => {
    p.remove();
  });

  for (let p of showPs) {
    div.appendChild(p);
  }
});