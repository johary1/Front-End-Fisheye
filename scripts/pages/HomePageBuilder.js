"use strict";

import Scroll from "../utils/Scroll.js";

// DISPLAY ALL PHOTOGRAPHERS BY DEFAULT LEANING ON BUILDER PATTERN
/*The Builder pattern allows a client to construct a complex object
 by specifying the type and content only. 
 Construction details are hidden from the client entirely*/
export default class HomePageBuilder {
  // Build the photographers section and add scroll button to go back from top
  displayPhotographers(data) {
    let photographers = data.photographers;
    photographers.map((photographe) => {
      let sectionPhotographers = document.getElementById("photographers");
      let articlePhotographers = document.createElement("article");
      articlePhotographers.className = "articlePh";
      let templatePhotographer = `
            <a href="photographer.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            
            `;

      sectionPhotographers.appendChild(articlePhotographers);
      articlePhotographers.innerHTML = templatePhotographer;
    });

    new Scroll().scrollButton();
  }
}
