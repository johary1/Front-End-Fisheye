function photographerFactory(data) {
  const { name, id, portrait, country, city, tagline, price } = data;
  // create custom link for each photographer
  const paramUrlLink = `photographer.html?id=${id}`;
  console.log(paramUrlLink);

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const link = document.createElement("a");
    link.setAttribute("href", paramUrlLink);
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `${portrait}`);

    const h2 = document.createElement("h2");
    h2.textContent = name;
    const localisation = document.createElement("p");
    localisation.classList.add("localisation");
    localisation.textContent = city + ", " + country;
    const photographerTagline = document.createElement("p");
    photographerTagline.classList.add("tagline");
    photographerTagline.textContent = tagline;
    const photographerPrice = document.createElement("p");
    photographerPrice.classList.add("price");
    photographerPrice.textContent = price + "€/jour";
    // wrap img in link as its child
    article.appendChild(link);
    link.append(img);
    article.appendChild(h2);
    article.appendChild(localisation);
    article.appendChild(photographerTagline);
    article.appendChild(photographerPrice);
    return article;
  }
  return { name, id, picture, country, city, tagline, price, getUserCardDOM };
}
