"use strict";

export default class Lightbox {
  constructor() {
    this.currentIndex = 0;
    this.getMedias = Array.from(document.getElementsByClassName("ph-media"));
  }

  // initialize the lightbox when clicking on a media, call the functions allowing to navigate in the lightbox
  init(currentMedia, currentMediaName) {
    this.getMedias.forEach((mediaWorks, index) => {
      mediaWorks.setAttribute(
        "aria-label",
        "Open Lightbox for " + currentMediaName[index]
      );

      document
        .querySelectorAll("article img, article video")
        .forEach((mediaWorks, index) => {
          index -= 1;
          mediaWorks.setAttribute("data-index", index);
          mediaWorks.setAttribute("tabindex", 0);
          mediaWorks.addEventListener("click", () => {
            this.display(
              mediaWorks.getAttribute("data-index"),
              currentMedia,
              currentMediaName
            );
          });
          // on enter trigger click on mediaWorks for accessibility needs
          mediaWorks.addEventListener("keydown", (event) => {
            if (event.code === "Enter" && event.key === "Enter") {
              mediaWorks.click();
            }
          });
        });
    });

    this.previous(
      document.querySelector(".left-arrow-lightbox"),
      currentMedia,
      currentMediaName
    );
    this.next(
      document.querySelector(".right-arrow-lightbox"),
      currentMedia,
      currentMediaName
    );

    this.close();
    //manage accessibility with keyboard to navigate in next or previous media
    this.keyboard(currentMedia, currentMediaName);
    return this;
  }

  // accessibility for lightbox
  keyboard(currentMedia, currentMediaName) {
    document.addEventListener("keyup", (key) => {
      let lightBoxMedia = document.getElementById("works-lightbox-media");
      let lightBoxName = document.getElementById("works-lightbox-name");

      // ESCAPE TO CLOSE
      if (key.code === "Escape") {
        let lightBox = document.getElementById("works-lightbox");
        lightBox.style.display = "none";
      }

      // ARROW RIGHT TO STEP RIGHT
      else if (key.code === "ArrowRight") {
        this.currentIndex += 1;

        if (this.currentIndex > currentMediaName.length - 1) {
          this.currentIndex = 0;
        }

        let src = currentMedia[this.currentIndex];
        let nameSrc = currentMediaName[this.currentIndex];

        lightBoxMedia.innerHTML = `${src}`;
        lightBoxName.innerHTML = `${nameSrc}`;
      }

      // ARROW LEFT TO STEP LEFT
      else if (key.code === "ArrowLeft") {
        this.currentIndex -= 1;

        if (this.currentIndex < 0) {
          this.currentIndex = currentMedia.length - 1;
          this.currentIndex = currentMediaName.length - 1;
        }

        let src = currentMedia[this.currentIndex];
        let nameSrc = currentMediaName[this.currentIndex];

        lightBoxMedia.innerHTML = `${src}`;
        lightBoxName.innerHTML = `${nameSrc}`;
      }
    });
  }

  close() {
    document
      .querySelector(".close-lightbox-icon")
      .addEventListener("click", () => {
        let lightbox = document.getElementById("works-lightbox");
        lightbox.style.display = "none";
      });
  }

  // display current media
  display(index, currentMedia, currentMediaName) {
    let lightBoxMedia = document.getElementById("works-lightbox-media");
    let lightBoxName = document.getElementById("works-lightbox-name");
    let src = currentMedia[index];
    let nameSrc = currentMediaName[index];
    this.currentIndex = index;

    document.getElementById("works-lightbox").style.display = "block";
    lightBoxMedia.innerHTML = `${src}`;
    lightBoxName.innerHTML = `${nameSrc}`;
  }

  // return to previous media
  previous(elt, media, name) {
    elt.addEventListener("click", () => {
      this.currentIndex -= 1;
      if (this.currentIndex < 0) {
        this.currentIndex = media.length - 1;
      }
      this.display(this.currentIndex, media, name);
    });
    elt.addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
          this.currentIndex = media.length - 1;
        }
        this.display(this.currentIndex, media, name);
      }
    });
  }

  // return to the next media
  next(elt, media, name) {
    elt.addEventListener("click", () => {
      this.currentIndex += 1;
      if (this.currentIndex > name.length - 1) {
        this.currentIndex = 0;
      }
      this.display(this.currentIndex, media, name);
    });
    elt.addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        this.currentIndex += 1;
        if (this.currentIndex > name.length - 1) {
          this.currentIndex = 0;
        }
        this.display(this.currentIndex, media, name);
      }
    });
  }
}
