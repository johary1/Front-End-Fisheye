"use strict";

import ImageFactory from "./ImageFactory.js";
import VideoFactory from "./VideoFactory.js";

export default class MediaFactory {
  // Check if the selected item is an image or a video
  renderMedia(el) {
    let factory = null;
    if (el.hasOwnProperty("image")) {
      factory = new ImageFactory();
    } else if (el.hasOwnProperty("video")) {
      factory = new VideoFactory();
    }
    return factory.createHTML(el);
  }
}
