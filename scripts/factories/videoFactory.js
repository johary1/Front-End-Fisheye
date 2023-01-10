"use strict";

export default class VideoFactory {
  // CREATE VIDEO WITH ATTRIBUTES
  createHTML(el) {
    let eltVideo = document.createElement("video");
    eltVideo.setAttribute("controls", "controls");
    eltVideo.setAttribute("src", el.video);
    eltVideo.setAttribute("role", "button");
    eltVideo.className = "ph-media";

    return eltVideo;
  }
}
