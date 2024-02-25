// // let h1 = document.querySelector("h1");

// // h1.innerText = "Hello World";
// // h1.style.color = "red";
// // h1.style.fontSize = "50px";

// // h1.addEventListener("click", function () {
// //     h1.style.color = "blue";
// // });

// // h1.addEventListener("click", function (){
// //     let h3 = document.createElement("h3");
// //     h3.innerText = "Hello World";
// //     document.body.appendChild(h3);
// // });

// // let button = document.createElement("button");
// // button.innerText = 

// let div = document.createElement("div");

// let forma = document.createElement("form");
// let input = document.createElement("input");
// let button = document.createElement("button");
// let label = document.createElement("label");

// let h1 = document.createElement("h1");
// h1.innerText = "From link to image";

// label.innerText = "Enter link:";

// button.innerText = "Submit";

// forma.appendChild(label);
// forma.appendChild(input);
// forma.appendChild(button);

// div.appendChild(h1);
// div.appendChild(forma);

// document.body.appendChild(div);

// forma.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let input = document.querySelector("input");
//   let image = document.createElement("img");
//   image.src = input.value;
//   image.addEventListener("click", function(){
//     image.remove();
//   })
//   document.body.appendChild(image);
//   input.value = "";
// });

// class Animals {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
  
//   class Dogs extends Animals {
//     breed;
//     constructor(name, age, breed) {
//       super(name, age); 
//       this.breed = breed;
//     }
//   }
  
//   class Cats extends Animals {
//     constructor(name, age, color) {
//       super(name, age); 
//       this.color = color;
//     }
//   }
  
//   const dog1 = new Dogs("Buddy", 3, "Golden Retriever");
//   const cat1 = new Cats("Whiskers", 2, "Gray");
  
//   console.log("Dog: ", dog1.name, dog1.age, dog1.breed);
//   console.log("Cat: ", cat1.name, cat1.age, cat1.color);
//////////////////////////////////////////////////////////////
  
// h1.addEventListener("click", function () {
//   let h3 = document.createElement("h3");
//   h3.innerText = "Hello World";
//   document.body.appendChild(h3);
// });

// let button = document.createElement("button");

// button.innerText = "Click me";

// document.body.appendChild(button);

// button.addEventListener("click", function () {
//   let h3 = document.createElement("h3");
//   h3.innerText = "Hello World";
//   document.body.appendChild(h3);
// });

// function raiseAlert(event) {
//   console.log(event);
//   alert("Hello World");
//   console.log(this);
// }
// let forma = document.querySelector("form");

// forma.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let input = document.querySelector("input");
//   let img = document.createElement("img");
//   img.src = input.value;
//   img.addEventListener("click", function () {
//     img.remove();
//   });
//   document.body.appendChild(img);
//   input.value = "";
// });