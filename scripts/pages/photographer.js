//Mettre le code JavaScript lié à la page photographer.html
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
  // console.log(urlParams);
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
        `<div>
      <h2>${photographer.name}</h2>
      <p>${photographer.country}, ${photographer.city}</p>
      <p>${photographer.tagline}</p>
    </div>
    <div><a><img src="../../assets/photographers/${photographer.portrait}" alt="${photographer.name}" class=""></a></div>
    `
    )
    .join("");
  return data;
}
window.addEventListener("load", getPhotographers);
