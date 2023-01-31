"use strict";

import MediaFactory from "./MediaFactory.js";
import Lightbox from "../photographers/Lightbox.js";
/*A Factory Method creates new objects as instructed by the client. 
One way to create objects in JavaScript is by invoking
a constructor function with the new operator. */
export default class GalleryFactory {
  constructor() {
    this.totalLike = 0;
  }

  // build the gallery with the different medias and the lightbox
  builder(dataMedia) {
    // get photographerId form url
    const id = window.location.search.split("id=")[1];
    let mediaFactory = new MediaFactory();
    let currentMedia = [];
    let currentMediaName = [];

    dataMedia.forEach((element) => {
      if (id == element.photographerId) {
        let sectionPhWorks = document.getElementById("ph-works");
        let articlePhWork = document.createElement("article");
        let mediaHTML = mediaFactory.renderMedia(element);

        let workTemplate = `
                <a href="#" title=${element.photoName}>
                ${mediaHTML.outerHTML}
                </a>
                <div class="ph-work-elt-text">
                    <h2 class="ph-work-title">${element.photoName}</h2>
                    <span class="ph-work-price">${element.price} €</span>
                    <div class='ph-elt-like'>
                    <span class="ph-work-like">
                        <a class="like-counter">${element.likes}</a>
                    </span>
                    <i class="far fa-heart heart-btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
                    </div>
                </div>
                `;
        articlePhWork.innerHTML = workTemplate;
        sectionPhWorks.appendChild(articlePhWork);
        articlePhWork.classList.add("ph-work-elt");

        // manage likes counter
        this.totalLike += parseInt(element.likes);
        // manage change to current item for each slide
        currentMedia.push(mediaHTML.outerHTML);

        currentMediaName.push(element.photoName);

        new Lightbox().init(currentMedia, currentMediaName);
      }
    });
    return this;
  }
}
