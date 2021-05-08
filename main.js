// fetch the first pokemon
async function getPeople() {
  const response = await fetch("https://swapi.dev/api/people/2");
  const data = await response.json();
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerText = data.name;
  ul.appendChild(li);

  let li1 = document.createElement("li");
  li1.innerText = data.height;
  ul.appendChild(li1);

  let li2 = document.createElement("li");
  li2.innerText = data.mass;
  ul.appendChild(li2);

  let li3 = document.createElement("li");
  li3.innerText = data.hair_color;
  ul.appendChild(li3);

  let li4 = document.createElement("li");
  li4.innerText = data.skin_color;
  ul.appendChild(li4);

  console.log(data);
  // console.log(Object.values(data));
  // console.log(`${data.name}, ${data.weight}`);
}

getPeople();

//name
//abilities
//gender
//pokemon colors
//stats
