let photographers = [];
const getPhotographers = async () => {
  await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  console.log(photographers);
};

const displayData = async () => {
  await getPhotographers();

  photographers.forEach((photographer) => {
    const photographersSection = document.querySelector(
      ".photographer_section"
    );
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM(photographer);
    photographersSection.appendChild(userCardDOM);
    photographerModel.innerHTML = photographers
      .map(
        (photographer) =>
          `${photographer.id}${photographer.portrait}${photographer.name}${photographer.country}${photographer.city}${photographer.tagline}${photographer.price}`
      )
      .join("");
  });
};

async function init() {
  // Récupère les datas des photographes
  displayData();
}

init();
