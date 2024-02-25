// let data = {}

// fetch("https://catfact.ninja/fact")
// .then(()=>{
//     return Response.json();
// })
// .then((data)=>{
//     console.log(data);
//     data = res;
// })
// .catch((arr)=>{
//     console.log(arr)
// });

// let div = document.createElement("div");
// div.innerHTML = data.fact;

// document.body.appendChild(div);

function showAnyFacts(data) {
    let div = document.createElement("div");
    div.innerHTML = data.fact;
  
    document.body.appendChild(div);
  }
  
  async function getAnyFacts() {
    try {
      let data = await fetch("https://catfact.ninja/fact");
      let res = await data.json();
      console.log(res);
      showAnyFacts(res);
    } catch (err) {
      console.log(err);
    }
  }
  
  getAnyFacts();