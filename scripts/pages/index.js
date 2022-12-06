/*async function getPhotographers() {
  // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
  let photographers = [
    {
      name: "Ma data test",
      id: 1,
      city: "Paris",
      country: "France",
      tagline: "Ceci est ma data test",
      price: 400,
      portrait: "account.png",
    },
    {
      name: "Autre data test",
      id: 2,
      city: "Londres",
      country: "UK",
      tagline: "Ceci est ma data test 2",
      price: 500,
      portrait: "account.png",
    },
  ];
  // et bien retourner le tableau photographers seulement une fois récupéré
  return {
    photographers: [...photographers, ...photographers, ...photographers],
  };
}*/

let photographers = [];
const getPhotographers = async () => {
  await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  console.log(photographers);
};

const displayData = async () => {
  await getPhotographers();
  //const photographerModel = photographerFactory();
  //const userCardDOM = photographerModel.getUserCardDOM();
  //photographersSection.appendChild(userCardDOM);

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
          `${photographer.portrait}${photographer.name}${photographer.country}${photographer.city}${photographer.tagline}${photographer.price}`
      )
      .join("");
  });
};

displayData();
/*
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });

}*/

/*async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();*/
