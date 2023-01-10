"use strict";

import ImageFactory from "./imageFactory.js";
import VideoFactory from "./videoFactory.js";

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
