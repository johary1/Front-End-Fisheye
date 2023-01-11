"use strict";

// DATA
import FishEyeApi from "./fetchData/FishEyeApi.js";

// HOMEPAGE
import HomePageBuilder from "./pages/HomePageBuilder.js";

// PH PAGES
import PhotographerDescription from "./photographers/PhotographerDescription.js";
import DropDownMenu from "./photographers/Sort.js";
import MediaBuilder from "./photographers/MediaBuilder.js";

(function appDispatch() {
  new FishEyeApi()
    .getDataFishEye()
    .then((data) => {
      if (window.location.pathname.includes("/photographer.html")) {
        // PHOTOGRAPHER PROFIL HEADER
        new PhotographerDescription().displayPhotographerProfil(data);

        // DROPDOWN MENU
        new DropDownMenu().dropDown(data);

        //PHOTOGRAPHER GALLERY & LIKES BOX
        new MediaBuilder().photographersMedias(data);
        return;
      }
      // HOMEPAGE (PHOTOGRAPHERS, SCROLL)
      new HomePageBuilder().displayPhotographers(data);
    })
    .catch(() => {
      console.error("Failed to load ApiFishEye");
    });
})();
