"use strict";

export default class Modal {
  // Events, launch/close the modal by clicking on the 'contact me' button
  modal(data) {
    let modalBtn = document.getElementById("ph-contact");
    let closeBtn = document.getElementsByClassName("close-form-icon");

    if (modalBtn) {
      modalBtn.addEventListener("click", this.launchModal);
      //manage accessibility with aria-hitten attribute
      let main = document.getElementById("main");
      main.setAttribute("aria-hidden", "true");
      let modalbg = document.getElementById("form-dialog");
      modalbg.setAttribute("aria-hidden", "false");
      this.formPhName(data);
    }
    if (closeBtn) {
      closeBtn[0].addEventListener("click", this.closeModal);
      //manage accessibility with aria-hitten attribute
      let main = document.getElementById("main");
      main.setAttribute("aria-hidden", "false");
      let modalbg = document.getElementById("form-dialog");
      modalbg.setAttribute("aria-hidden", "true");
    }
  }

  // LAUNCH MODAL
  launchModal() {
    let modalbg = document.getElementById("form-dialog");
    let main = document.getElementById("main");
    modalbg.style.display = "block";
    main.style.display = "none";
  }

  // CLOSE MODAL
  closeModal() {
    let modalbg = document.getElementById("form-dialog");
    let main = document.getElementById("main");
    modalbg.style.display = "none";
    main.style.display = "block";
  }

  // DISPLAY PH NAMES IN FORM
  formPhName(data) {
    let id = window.location.search.split("id=")[1];
    let photographers = !id
      ? data
      : data.filter((photographer) => photographer.id == id);
    let phName = document.getElementById("ph-form-name");
    let phNameTemplate = `${photographers[0].name}`;
    phName.innerHTML = phNameTemplate;
  }
}
