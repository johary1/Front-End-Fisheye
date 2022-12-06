function photographerFactory(data) {
  const { name, portrait, country, city, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `${portrait}`);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const localisation = document.createElement("p");
    localisation.textContent = country + ", " + city;
    const photographerTagline = document.createElement("p");
    photographerTagline.textContent = tagline;
    const photographerPrice = document.createElement("p");
    photographerPrice.textContent = price + "€/jour";
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(localisation);
    article.appendChild(photographerTagline);
    article.appendChild(photographerPrice);
    return article;
  }
  return { name, picture, country, city, tagline, price, getUserCardDOM };
}
