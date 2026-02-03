
let form = document.querySelector("#myForm");
let main = document.querySelector("#main");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // get values
  let name = document.querySelector("#name").value;
  let age = document.querySelector("#age").value;
  let email = document.querySelector("#email").value;
  let imgUrl = document.querySelector("#img").value;

  // create card
  let card = document.createElement("div");
  card.className = "card";

  let profile = document.createElement("div");
  profile.className = "profile";

  let img = document.createElement("img");
  img.src = imgUrl;

  let h3 = document.createElement("h3");
  h3.innerText = name;

  let h5 = document.createElement("h5");
  h5.innerText = age;

  let p = document.createElement("p");
  p.innerText = email;

  // append
  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  main.appendChild(card);

  form.reset();
  
});
