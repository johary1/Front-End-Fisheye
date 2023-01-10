"use strict";

export default class ImageFactory {
  // CREATE ELEMENT IMG WITH ATTRIBUTES
  createHTML(el) {
    let eltImage = document.createElement("img");
    eltImage.setAttribute("src", el.image);
    eltImage.setAttribute("alt", el.alt);
    eltImage.setAttribute("role", "button");
    eltImage.className = "ph-media";

    return eltImage;
  }
}
