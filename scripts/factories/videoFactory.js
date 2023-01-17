"use strict";

export default class VideoFactory {
  // CREATE VIDEO WITH ATTRIBUTES
  createHTML(el) {
    let eltVideo = document.createElement("video");
    eltVideo.setAttribute("controls", "controls");
    eltVideo.setAttribute("src", el.video);
    eltVideo.setAttribute("role", "button");
    eltVideo.setAttribute("type", "video/mp4");
    eltVideo.className = "ph-media";
    eltVideo.textContent = "Your browser does not support HTML5 videos.";

    return eltVideo;
  }
}
