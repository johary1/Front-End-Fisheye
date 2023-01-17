"use strict";

import ImageFactory from "./ImageFactory.js";
import VideoFactory from "./VideoFactory.js";

export default class MediaFactory {
  // Check if the selected item is an image or a video
  renderMedia(el) {
    let Factory = null;
    if (el.hasOwnProperty("image")) {
      Factory = new ImageFactory();
    } else if (el.hasOwnProperty("video")) {
      Factory = new VideoFactory();
    }
    return Factory.createHTML(el);
  }
}
