//Mettre le code JavaScript lié à la page photographer.html
const contactFormTitle = document.querySelector("span");
console.log(contactFormTitle);
const photographContainer = document.querySelector(".photograph-header");

let photographers = [];

const getPhotographers = async () => {
  await fetch(`data/photographers.json`)
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  console.log(photographers);

  photographDisplay();
};

async function photographDisplay(data) {
  // get url param
  const userIdParam = window.location.search;
  //console.log(userIdParam);
  // get id param
  const urlParams = new URLSearchParams(userIdParam);

  // get id value
  let idUser = urlParams.get("id");
  idUser = parseInt(idUser);
  console.log(idUser);
  //await getPhotographers();

  photographers.forEach((photographer) => console.log(photographer.id));

  photographContainer.innerHTML += photographers
    // filter by unique id
    .filter((photographer) => photographer.id === idUser)
    .map(
      (photographer) =>
        `<div class="photographer__info">
    <h2 class="photographer__name">${photographer.name}</h2>
    <p class="photographer__localisation">${photographer.country}, ${photographer.city}</p>
    <p class="photographer__tagline">${photographer.tagline}</p>
    </div>
    <div class="photographer__picture align-item"><a><img src="../../assets/photographers/${photographer.portrait}" alt="${photographer.name}"></a></div>

    `
    )
    .join("");
  // add firstname and lastname to contact form
  contactFormTitle.textContent = photographers
    .filter((photographer) => photographer.id === idUser)
    .map(
      (photographer) =>
        `${photographer.name}
  `
    );

  return data;
}
window.addEventListener("load", getPhotographers);
