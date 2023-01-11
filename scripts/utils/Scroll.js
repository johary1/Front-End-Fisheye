"use strict";

export default class Scroll {
  // allow user to get back to top after scrolling
  scrollButton() {
    window.addEventListener("scroll", () => {
      let button = document.getElementById("main-photographers-link");
      let y = window.scrollY;

      if (y >= 200) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    });
  }
}
