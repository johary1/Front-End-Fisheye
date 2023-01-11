"use strict";

import Modal from "./Modal.js";
import ContactForm from "../utils/ContactForm.js";

export default class PhotographerDescription {
  // Check on which page the user is located, if the position corresponds with the photographer's "id", create the photographer's 'Profile' section
  displayPhotographerProfil(data) {
    let photographersData = data.photographers;
    const id = window.location.search.split("id=")[1];
    const photographers = !id
      ? photographersData
      : photographersData.filter((photographer) => photographer.id == id);
    const sectionPhotographerProfil =
      document.getElementById("ph-profil-header");
    const templatePhotographerProfil = `
            <article aria-label="Photographer Profil" class="photographer__profil">
                <div class='photographer__infos'>
                    <h2>${photographers[0].name}</h2>
                    <p class="photographer__city">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class="photographer__tagline">${photographers[0].tagline}</p>
                </div>
                <div class="wrapper__contact_button">
                    <button id="ph-contact" title='Contact Me'>Contactez-moi</button>
                </div>
                <a href='#' class='photographer__picture' title='${photographers[0].alt}'><img src="${photographers[0].portrait}" alt="${photographers[0].alt}"></a>
            </article>
            `;

    sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
    new Modal().modal(photographersData);
    new ContactForm().fields();
  }
}
