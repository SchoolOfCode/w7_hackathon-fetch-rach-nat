// fetch the first pokemon


let peopleSelector = Math.floor(Math.random () *10)

async function getPeople() {
  
  const response = await fetch("https://swapi.dev/api/people/");
  const data = await response.json();
  const randomPerson = data.results[peopleSelector]
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerText = randomPerson.name;
  ul.appendChild(li);

  let li1 = document.createElement("li");
  li1.innerText = randomPerson.height;
  ul.appendChild(li1);

  let li2 = document.createElement("li");
  li2.innerText = randomPerson.mass;
  ul.appendChild(li2);

  let li3 = document.createElement("li");
  li3.innerText = randomPerson.hair_color;
  ul.appendChild(li3);

  let li4 = document.createElement("li");
  li4.innerText = randomPerson.skin_color;
  ul.appendChild(li4);

  // console.log(data.results[peopleSelector]);
  // console.log(Object.values(data));
  // console.log(`${data.name}, ${data.weight}`);

}

// getPeople()

let button = document.querySelector ("button")
button.addEventListener("click", getPeople) 

//name
//abilities
//gender
//pokemon colors
//stats
